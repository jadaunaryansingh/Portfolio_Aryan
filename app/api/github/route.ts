import { NextResponse } from "next/server";

// Live GitHub data for the "Git Dispatch" page.
// Runs on the server so that:
//  - the real contribution calendar (not exposed by the REST API) can be read,
//  - commit messages can be resolved (PushEvents no longer include them),
//  - browser visitors don't burn GitHub's 60 req/hour/IP unauthenticated limit.
// Set GITHUB_TOKEN in the environment (optional) for a higher rate limit.

export const dynamic = "force-dynamic"; // never baked in at build time; fresh data per request
// Upstream GitHub calls are cached for 10 minutes (fetch `next.revalidate`) and the
// response carries a matching CDN Cache-Control header, so GitHub is not hammered.

const USERNAME = "jadaunaryansingh";
const UA = "Portfolio-Git-Dispatch";

function ghHeaders(): HeadersInit {
  const h: Record<string, string> = {
    "User-Agent": UA,
    Accept: "application/vnd.github+json",
  };
  if (process.env.GITHUB_TOKEN) h.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  return h;
}

async function gh<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`https://api.github.com${path}`, {
      headers: ghHeaders(),
      next: { revalidate: 600 },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

interface Day {
  date: string;
  count: number;
  level: number;
}

interface Calendar {
  total: number;
  weeks: Day[][];
}

/** Parse the public contribution graph exactly as shown on the GitHub profile. */
async function getCalendar(): Promise<Calendar | null> {
  try {
    const res = await fetch(`https://github.com/users/${USERNAME}/contributions`, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; Portfolio-Git-Dispatch)" },
      next: { revalidate: 600 },
    });
    if (!res.ok) return null;
    const html = await res.text();

    // Tooltips: "<n> contribution(s) on <date>." / "No contributions on <date>." keyed by cell id
    const counts = new Map<string, number>();
    for (const m of html.matchAll(/<tool-tip[^>]*\sfor="([^"]+)"[^>]*>\s*([^<]*?)\s*<\/tool-tip>/g)) {
      const n = m[2].match(/^(\d[\d,]*)\s+contribution/);
      counts.set(m[1], n ? parseInt(n[1].replace(/,/g, ""), 10) : 0);
    }

    const weeks: Day[][] = [];
    for (const m of html.matchAll(/<td\b[^>]*data-date="([^"]+)"[^>]*>/g)) {
      const tag = m[0];
      const id = tag.match(/\sid="([^"]+)"/)?.[1] ?? "";
      const level = parseInt(tag.match(/data-level="(\d)"/)?.[1] ?? "0", 10);
      const ix = parseInt(tag.match(/data-ix="(\d+)"/)?.[1] ?? "-1", 10);
      const row = parseInt(id.match(/contribution-day-component-(\d+)-/)?.[1] ?? "-1", 10);
      if (ix < 0 || row < 0) continue;
      (weeks[ix] ??= [])[row] = { date: m[1], count: counts.get(id) ?? 0, level };
    }
    const cleaned = weeks.filter(Boolean);
    if (cleaned.length === 0) return null;

    const headline = html.match(/(\d[\d,]*)\s+contributions\s+in\s+the\s+last\s+year/);
    const summed = cleaned.flat().reduce((a, d) => a + (d?.count ?? 0), 0);
    return {
      total: headline ? parseInt(headline[1].replace(/,/g, ""), 10) : summed,
      weeks: cleaned,
    };
  } catch {
    return null;
  }
}

interface RawEvent {
  id: string;
  type: string;
  repo: { name: string };
  payload: { head?: string; commits?: Array<{ sha: string; message: string }> };
  created_at: string;
}

async function getEvents() {
  const raw = await gh<RawEvent[]>(`/users/${USERNAME}/events/public?per_page=50`);
  if (!raw) return null;

  // Keep the newest push per repo+branch so the feed isn't one repo repeated.
  const pushes = raw.filter((e) => e.type === "PushEvent");
  const seen = new Set<string>();
  const picked: RawEvent[] = [];
  for (const e of pushes) {
    const key = e.repo.name;
    if (seen.has(key)) continue;
    seen.add(key);
    picked.push(e);
    if (picked.length === 6) break;
  }

  return Promise.all(
    picked.map(async (e) => {
      let message = e.payload.commits?.[0]?.message;
      const sha = e.payload.commits?.[0]?.sha ?? e.payload.head ?? "";
      if (!message && sha) {
        const c = await gh<{ commit: { message: string } }>(`/repos/${e.repo.name}/commits/${sha}`);
        message = c?.commit.message;
      }
      return {
        id: e.id,
        repo: e.repo.name,
        sha,
        message: (message ?? "Pushed updates").split("\n")[0],
        created_at: e.created_at,
      };
    })
  );
}

export async function GET() {
  const [user, repos, events, calendar] = await Promise.all([
    gh<Record<string, unknown>>(`/users/${USERNAME}`),
    gh<Array<Record<string, unknown>>>(`/users/${USERNAME}/repos?per_page=100&sort=pushed`),
    getEvents(),
    getCalendar(),
  ]);

  return NextResponse.json(
    {
      user,
      repos: repos ? repos.filter((r) => !r.fork) : null,
      events,
      calendar,
      fetchedAt: new Date().toISOString(),
    },
    { headers: { "Cache-Control": "public, s-maxage=600, stale-while-revalidate=1200" } }
  );
}
