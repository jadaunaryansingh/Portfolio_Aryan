"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { OrnateRule } from "@/components/newspaper/Typography";
import VintageStamp from "@/components/newspaper/VintageStamp";

const USERNAME = "jadaunaryansingh";
const PROFILE_URL = `https://github.com/${USERNAME}`;

interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
}

interface GitHubEvent {
  id: string;
  repo: string;
  sha: string;
  message: string;
  created_at: string;
}

interface CalendarDay {
  date: string;
  count: number;
  level: number;
}

interface Calendar {
  total: number;
  weeks: CalendarDay[][];
}

interface GitHubData {
  user: GitHubUser | null;
  repos: GitHubRepo[] | null;
  events: GitHubEvent[] | null;
  calendar: Calendar | null;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function GitHubContributionChart({ calendar }: { calendar: Calendar | null }) {
  const getColorClass = (level: number) => {
    switch (level) {
      case 1:
        return "bg-[#0e4429]";
      case 2:
        return "bg-[#006d32]";
      case 3:
        return "bg-[#26a641]";
      case 4:
        return "bg-[#39d353]";
      default:
        return "bg-[#161b22]";
    }
  };

  const weeks = calendar?.weeks ?? [];

  // Month labels: place one wherever the month changes between columns.
  const months: { label: string; week: number }[] = [];
  let lastMonth = -1;
  let lastWeek = -10;
  weeks.forEach((week, w) => {
    const first = week.find(Boolean);
    if (!first) return;
    const month = new Date(first.date + "T00:00:00").getMonth();
    if (month !== lastMonth) {
      if (w - lastWeek >= 3) {
        months.push({ label: MONTHS[month], week: w });
        lastWeek = w;
      }
      lastMonth = month;
    }
  });

  return (
    <div className="w-full bg-[#0d1117] text-[#c9d1d9] p-5 rounded-lg border border-[#30363d] shadow-xl text-xs font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-[#f0f6fc]">
          {calendar
            ? `${calendar.total.toLocaleString()} contributions in the last year`
            : "Loading contributions from GitHub…"}
        </h3>
        <div className="flex items-center gap-1 text-[#8b949e]">
          <span>Live from github.com/{USERNAME}</span>
        </div>
      </div>

      {/* Graph Area */}
      {weeks.length > 0 ? (
        <div className="overflow-x-auto pb-2">
          <div style={{ minWidth: `${40 + weeks.length * 13}px` }}>
            {/* Months header */}
            <div className="flex text-[10px] text-[#8b949e] mb-1 pl-8 relative h-4">
              {months.map((m) => (
                <span
                  key={m.label + m.week}
                  className="absolute"
                  style={{ left: `${32 + m.week * 13}px` }}
                >
                  {m.label}
                </span>
              ))}
            </div>

            {/* Days & Matrix */}
            <div className="flex gap-1.5 items-start">
              {/* Days labels */}
              <div className="flex flex-col justify-between h-[96px] text-[10px] text-[#8b949e] pr-1 pt-3 shrink-0">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>

              <div className="flex gap-[3px]">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3px]">
                    {Array.from({ length: 7 }, (_, dIdx) => {
                      const day = week[dIdx];
                      if (!day) return <div key={dIdx} className="w-[10px] h-[10px]" />;
                      return (
                        <div
                          key={dIdx}
                          className={`w-[10px] h-[10px] rounded-[2px] ${getColorClass(
                            day.level
                          )} hover:ring-1 hover:ring-white transition-all`}
                          title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[110px] flex items-center justify-center text-[#8b949e]">
          {calendar === null ? "Fetching the contribution graph…" : "No contribution data"}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between text-[11px] text-[#8b949e] mt-4 pt-2 border-t border-[#21262d]">
        <a
          href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/showing-an-overview-of-your-activity-on-your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#58a6ff] hover:underline"
        >
          Learn how we count contributions
        </a>

        <div className="flex items-center gap-1">
          <span>Less</span>
          <div className="w-[10px] h-[10px] rounded-[2px] bg-[#161b22]" />
          <div className="w-[10px] h-[10px] rounded-[2px] bg-[#0e4429]" />
          <div className="w-[10px] h-[10px] rounded-[2px] bg-[#006d32]" />
          <div className="w-[10px] h-[10px] rounded-[2px] bg-[#26a641]" />
          <div className="w-[10px] h-[10px] rounded-[2px] bg-[#39d353]" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}

export default function Page8GitAnalysis({ onNavigate }: { onNavigate?: (page: number) => void }) {
  const [data, setData] = useState<GitHubData | null>(null);
  const [status, setStatus] = useState<"loading" | "live" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch("/api/github");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: GitHubData = await res.json();
        if (cancelled) return;
        setData(json);
        setStatus(json.user || json.repos || json.calendar ? "live" : "error");
      } catch (err) {
        console.warn("GitHub live sync failed:", err);
        if (!cancelled) setStatus("error");
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const user = data?.user ?? null;
  const repos = data?.repos ?? [];
  const events = data?.events ?? [];
  const calendar = data?.calendar ?? null;
  const loading = status === "loading";
  const dash = loading ? "…" : "—";

  // Language distribution across all repositories (real data)
  const langCounts: Record<string, number> = {};
  repos.forEach((r) => {
    if (r.language) langCounts[r.language] = (langCounts[r.language] || 0) + 1;
  });
  const totalLangRepos = Object.values(langCounts).reduce((a, b) => a + b, 0) || 1;
  const langPercentages = Object.entries(langCounts)
    .map(([lang, count]) => ({ lang, count, pct: Math.round((count / totalLangRepos) * 100) }))
    .sort((a, b) => b.count - a.count);
  const topLang = langPercentages[0];

  const totalStars = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);

  const langColors: Record<string, string> = {
    Python: "#3572A5",
    TypeScript: "#3178C6",
    JavaScript: "#F7DF1E",
    Dart: "#00B4AB",
    HTML: "#E34F26",
    CSS: "#563D7C",
    Shell: "#89E051",
    "Jupyter Notebook": "#DA5B0B",
  };

  const formatTimeAgo = (isoDate: string) => {
    const diffMs = Date.now() - new Date(isoDate).getTime();
    const diffMins = Math.max(0, Math.floor(diffMs / (1000 * 60)));
    if (diffMins < 1) return "just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  };

  return (
    <article className="newspaper-page min-h-screen paper-aged grain-overlay">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header Banner */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span
              className={`w-2 h-2 rounded-full animate-pulse ${
                status === "error" ? "bg-red-600" : status === "live" ? "bg-emerald-600" : "bg-amber-500"
              }`}
            />
            <span className="label-text text-xs text-gold font-bold tracking-widest uppercase">
              {status === "live"
                ? "LIVE SYNCED WITH GITHUB"
                : status === "error"
                ? "GITHUB TEMPORARILY UNREACHABLE"
                : "CONNECTING TO GITHUB…"}
            </span>
          </div>
          <OrnateRule thick />
          <motion.h2
            className="headline-xl ink-bleed my-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Git Dispatch &<br />
            Live GitHub Analytics
          </motion.h2>
          <OrnateRule thick />
          <p className="label-text text-xs text-ink-faded mt-2 uppercase tracking-wider">
            VERSION CONTROL INTELLIGENCE · @{USERNAME} · REAL-TIME TELEMETRY
          </p>
        </div>

        {status === "error" && (
          <div className="border-2 border-ink p-3 mb-6 text-center bg-cream">
            <p className="label-text text-xs text-ink">
              Couldn&apos;t load live data from GitHub right now. Nothing is being faked — please retry in a moment, or{" "}
              <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer" className="underline font-bold">
                view the profile directly ↗
              </a>
            </p>
          </div>
        )}

        {/* Live Profile & KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="border border-ink p-3 text-center bg-cream">
            <span className="label-text text-xs text-ink-faded block uppercase">PUBLIC REPOSITORIES</span>
            <span className="font-abril text-2xl text-ink block mt-1">{user ? user.public_repos : dash}</span>
            <span className="label-text text-[10px] text-gold font-bold uppercase">DEPLOYED AI &amp; DIGITAL SYSTEMS</span>
          </div>

          <div className="border border-ink p-3 text-center bg-cream">
            <span className="label-text text-xs text-ink-faded block uppercase">PRIMARY LANGUAGE</span>
            <span className="font-abril text-2xl text-ink block mt-1">{topLang ? topLang.lang : dash}</span>
            <span className="label-text text-[10px] text-gold font-bold uppercase">
              {topLang ? `${topLang.pct}% OF REPOSITORIES` : "ACROSS ALL REPOSITORIES"}
            </span>
          </div>

          <div className="border border-ink p-3 text-center bg-cream">
            <span className="label-text text-xs text-ink-faded block uppercase">STARGAZERS &amp; APPRECIATION</span>
            <span className="font-abril text-2xl text-ink block mt-1">{data?.repos ? `${totalStars} ★` : dash}</span>
            <span className="label-text text-[10px] text-gold font-bold uppercase">ACROSS ALL PUBLIC REPOS</span>
          </div>

          <div className="border border-ink p-3 text-center bg-cream">
            <span className="label-text text-xs text-ink-faded block uppercase">CONTRIBUTIONS &amp; ACTIVITY</span>
            <span className="font-abril text-2xl text-ink block mt-1">
              {calendar ? calendar.total.toLocaleString() : dash}
            </span>
            <span className="label-text text-[10px] text-gold font-bold uppercase">IN THE LAST YEAR</span>
          </div>
        </div>

        {/* Live GitHub Contribution Chart */}
        <div className="mb-6 border-2 border-ink p-2 bg-paper">
          <div className="flex items-center justify-between mb-2 px-2 pt-1">
            <span className="label-text text-xs font-bold text-ink">LIVE GITHUB CONTRIBUTION GRAPH</span>
            <a
              href={PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="label-text text-xs font-bold text-paper bg-ink px-2.5 py-0.5 hover:bg-gold hover:text-ink transition-colors"
            >
              @{USERNAME} ↗
            </a>
          </div>
          <GitHubContributionChart calendar={calendar} />
        </div>

        {/* Grid: Language Distribution & Live Telemetry Wire */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-6">
          {/* Left: Language Distribution & Profile Card (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* User Profile Card */}
            <div className="border-2 border-ink p-4 bg-cream">
              <div className="flex items-center gap-3 border-b border-ink pb-3 mb-3">
                {user?.avatar_url ? (
                  <img
                    src={user.avatar_url}
                    alt={user.name || USERNAME}
                    className="w-14 h-14 border border-ink filter grayscale contrast-125 shrink-0"
                  />
                ) : (
                  <div className="w-14 h-14 border border-ink shrink-0 bg-paper" />
                )}
                <div>
                  <h4 className="font-abril text-base text-ink">{user?.name || "Aryan Singh Jadaun"}</h4>
                  <p className="label-text text-xs text-gold font-bold">@{user?.login || USERNAME}</p>
                  <p className="body-text text-xs text-ink-faded mt-0.5 line-clamp-2">
                    {user?.bio || "AIML Engineer · Full Stack Developer · GLA University"}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center text-xs label-text border border-ink p-2 bg-paper">
                <div>
                  <span className="text-ink-faded block">FOLLOWERS</span>
                  <span className="font-bold text-ink">{user ? user.followers : dash}</span>
                </div>
                <div>
                  <span className="text-ink-faded block">FOLLOWING</span>
                  <span className="font-bold text-ink">{user ? user.following : dash}</span>
                </div>
              </div>
            </div>

            {/* Language Breakdown */}
            <div className="border-2 border-ink p-4">
              <h3 className="font-abril text-base text-ink mb-2">Language Breakdown</h3>
              <p className="label-text text-xs text-ink-faded mb-3">Distribution across public repositories</p>

              {langPercentages.length === 0 ? (
                <p className="label-text text-xs text-ink-faded">{loading ? "Loading…" : "No language data available."}</p>
              ) : (
                <>
                  {/* Progress bar */}
                  <div className="h-3 w-full flex border border-ink overflow-hidden mb-4">
                    {langPercentages.map(({ lang, count }) => (
                      <div
                        key={lang}
                        style={{
                          width: `${(count / totalLangRepos) * 100}%`,
                          backgroundColor: langColors[lang] || "#5c4b2d",
                        }}
                        title={`${lang}: ${count}`}
                      />
                    ))}
                  </div>

                  {/* Legend */}
                  <div className="space-y-2">
                    {langPercentages.map(({ lang, count, pct }) => (
                      <div
                        key={lang}
                        className="flex items-center justify-between text-xs border-b border-ink border-opacity-10 pb-1"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2.5 h-2.5 border border-ink inline-block"
                            style={{ backgroundColor: langColors[lang] || "#5c4b2d" }}
                          />
                          <span className="font-bold label-text text-ink">{lang}</span>
                        </div>
                        <div className="label-text text-ink-faded">
                          <span>
                            {count} {count === 1 ? "REPO" : "REPOS"}
                          </span>{" "}
                          · <span className="text-ink font-bold">{pct}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right: Live Commit Telegraph Wire (7 cols) */}
          <div className="lg:col-span-7 border-2 border-ink p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-ink pb-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-gold">⚡</span>
                  <h3 className="font-abril text-lg text-ink">Commit Wire &amp; Live Activity</h3>
                </div>
                <span className="label-text text-xs font-bold text-gold tracking-widest uppercase">TELEGRAPH FEED</span>
              </div>

              <div className="space-y-3">
                {events.length === 0 && (
                  <p className="label-text text-xs text-ink-faded">
                    {loading ? "Receiving telegraph…" : "No recent public pushes found."}
                  </p>
                )}
                {events.map((evt) => (
                  <motion.div
                    key={evt.id}
                    className="border border-ink p-3 bg-paper hover:bg-cream transition-colors"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="label-text font-bold text-gold uppercase tracking-wider">
                        {evt.repo.replace(`${USERNAME}/`, "")}
                      </span>
                      <span className="label-text text-ink-faded">{formatTimeAgo(evt.created_at)}</span>
                    </div>

                    <p className="body-text text-xs text-ink font-bold font-mono">{evt.message}</p>

                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-ink border-opacity-10 text-[10px] label-text text-ink-faded">
                      <span>SHA: {evt.sha ? evt.sha.substring(0, 7) : "HEAD"}</span>
                      <a
                        href={`https://github.com/${evt.repo}/commit/${evt.sha}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-ink underline"
                      >
                        VIEW COMMIT ↗
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-ink text-center">
              <p className="label-text text-xs text-ink-faded">
                TELEGRAPH DISPATCH · CONNECTED DIRECTLY TO GITHUB REPOSITORIES
              </p>
            </div>
          </div>
        </div>

        {/* Featured Live Repositories Grid */}
        <div className="border-2 border-ink p-4 mb-6">
          <p className="label-text text-xs font-bold mb-3 text-center tracking-widest uppercase">
            ── RECENTLY ACTIVE GITHUB REPOSITORIES ──
          </p>
          {repos.length === 0 && (
            <p className="label-text text-xs text-ink-faded text-center">
              {loading ? "Loading repositories…" : "No repositories available."}
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.slice(0, 6).map((repo) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-ink p-3 block bg-paper hover:bg-ink hover:text-paper transition-all group"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start justify-between mb-1">
                  <span className="font-abril text-base group-hover:text-gold">{repo.name}</span>
                  <span className="label-text text-xs text-gold border border-gold px-1.5 py-0.5 shrink-0">
                    ★ {repo.stargazers_count || 0}
                  </span>
                </div>

                <p className="body-text text-xs text-ink-faded group-hover:text-paper group-hover:opacity-80 line-clamp-2 mb-3 min-h-[2rem]">
                  {repo.description || "Production repository by Aryan Singh Jadaun."}
                </p>

                <div className="flex items-center justify-between text-xs label-text border-t border-ink group-hover:border-paper group-hover:border-opacity-30 pt-2">
                  <span className="font-bold text-ink group-hover:text-paper">{repo.language || "Code"}</span>
                  <span className="text-ink-faded group-hover:text-gold">VIEW ON GITHUB ↗</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Stamps */}
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <VintageStamp text="GITHUB VERIFIED" color="#c9a227" delay={0.2} />
          <VintageStamp text="OPEN SOURCE BUILDER" color="#111" delay={0.5} />
          <VintageStamp text="DAILY COMMIT STREAK" color="#5c4b2d" delay={0.8} />
        </div>
      </div>
    </article>
  );
}
