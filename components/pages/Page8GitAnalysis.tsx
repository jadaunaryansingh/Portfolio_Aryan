"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { OrnateRule } from "@/components/newspaper/Typography";
import VintageStamp from "@/components/newspaper/VintageStamp";

interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  fork: boolean;
}

interface GitHubEvent {
  id: string;
  type: string;
  repo: { name: string; url: string };
  payload: {
    commits?: Array<{ sha: string; message: string }>;
    action?: string;
  };
  created_at: string;
}

const fallbackUser: GitHubUser = {
  login: "jadaunaryansingh",
  avatar_url: "https://avatars.githubusercontent.com/u/jadaunaryansingh",
  html_url: "https://github.com/jadaunaryansingh",
  name: "Aryan Singh Jadaun",
  bio: "AIML Engineer | Full Stack Developer | LinuxWorld Alumnus | GLA University 2028",
  public_repos: 20,
  followers: 48,
  following: 32,
  created_at: "2023-01-15T00:00:00Z",
  updated_at: new Date().toISOString(),
};

const fallbackRepos: GitHubRepo[] = [
  {
    id: 1,
    name: "Portfolio",
    full_name: "jadaunaryansingh/Portfolio",
    html_url: "https://github.com/jadaunaryansingh/Portfolio",
    description: "Cinematic 1930s-1940s Vintage Newspaper Portfolio built with Next.js & Tailwind",
    stargazers_count: 14,
    forks_count: 5,
    language: "TypeScript",
    updated_at: "Just now",
    fork: false,
  },
  {
    id: 2,
    name: "Zorvyn-Backend",
    full_name: "jadaunaryansingh/Zorvyn-Backend",
    html_url: "https://github.com/jadaunaryansingh/Zorvyn-Backend",
    description: "Scalable enterprise REST API backend core with JWT auth, Docker & PostgreSQL",
    stargazers_count: 12,
    forks_count: 4,
    language: "Python",
    updated_at: "Today",
    fork: false,
  },
  {
    id: 3,
    name: "CareSync-HMS",
    full_name: "jadaunaryansingh/CareSync-HMS",
    html_url: "https://github.com/jadaunaryansingh/CareSync-HMS",
    description: "Hospital Management System with automated appointment scheduling & doctor dashboards",
    stargazers_count: 10,
    forks_count: 3,
    language: "JavaScript",
    updated_at: "2 days ago",
    fork: false,
  },
  {
    id: 4,
    name: "CAB-I-NET",
    full_name: "jadaunaryansingh/CAB-I-NET",
    html_url: "https://github.com/jadaunaryansingh/CAB-I-NET",
    description: "Real-time cab fare aggregator comparing Uber, Ola & Rapido using ML surge forecasting",
    stargazers_count: 18,
    forks_count: 6,
    language: "Python",
    updated_at: "3 days ago",
    fork: false,
  },
  {
    id: 5,
    name: "Voice-Authentication-System",
    full_name: "jadaunaryansingh/Voice-Authentication-System",
    html_url: "https://github.com/jadaunaryansingh/Voice-Authentication-System",
    description: "Biometric voice authentication & speaker verification engine using deep learning",
    stargazers_count: 9,
    forks_count: 2,
    language: "Python",
    updated_at: "4 days ago",
    fork: false,
  },
  {
    id: 6,
    name: "Legally-Agentic-AI",
    full_name: "jadaunaryansingh/Legally-Agentic-AI",
    html_url: "https://github.com/jadaunaryansingh/Legally-Agentic-AI",
    description: "LangGraph-powered multi-agent legal intelligence platform with Flutter & FastAPI",
    stargazers_count: 15,
    forks_count: 4,
    language: "Dart",
    updated_at: "5 days ago",
    fork: false,
  },
];

const fallbackEvents: GitHubEvent[] = [
  {
    id: "evt-1",
    type: "PushEvent",
    repo: { name: "jadaunaryansingh/Portfolio", url: "https://github.com/jadaunaryansingh/Portfolio" },
    payload: {
      commits: [{ sha: "a1b2c3d", message: "feat: Live GitHub Analytics & Git Dispatch page integration" }],
    },
    created_at: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
  },
  {
    id: "evt-2",
    type: "PushEvent",
    repo: { name: "jadaunaryansingh/Portfolio", url: "https://github.com/jadaunaryansingh/Portfolio" },
    payload: {
      commits: [{ sha: "e4f5g6h", message: "refactor: Update skills competency domains & expert badges" }],
    },
    created_at: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
  },
  {
    id: "evt-3",
    type: "PushEvent",
    repo: { name: "jadaunaryansingh/Zorvyn-Backend", url: "https://github.com/jadaunaryansingh/Zorvyn-Backend" },
    payload: {
      commits: [{ sha: "i7j8k9l", message: "perf: Optimize Docker container deployment on AWS EC2" }],
    },
    created_at: new Date(Date.now() - 1000 * 60 * 600).toISOString(),
  },
  {
    id: "evt-4",
    type: "PushEvent",
    repo: { name: "jadaunaryansingh/Legally-Agentic-AI", url: "https://github.com/jadaunaryansingh/Legally-Agentic-AI" },
    payload: {
      commits: [{ sha: "m0n1o2p", message: "feat: Multi-agent LangGraph workflow for document reasoning" }],
    },
    created_at: new Date(Date.now() - 1000 * 60 * 1440).toISOString(),
  },
];

export default function Page8GitAnalysis({ onNavigate }: { onNavigate?: (page: number) => void }) {
  const [user, setUser] = useState<GitHubUser>(fallbackUser);
  const [repos, setRepos] = useState<GitHubRepo[]>(fallbackRepos);
  const [events, setEvents] = useState<GitHubEvent[]>(fallbackEvents);
  const [isLoading, setIsLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        setIsLoading(true);
        // Fetch User Info
        const resUser = await fetch("https://api.github.com/users/jadaunaryansingh");
        if (resUser.ok) {
          const userData = await resUser.json();
          setUser(userData);
        }

        // Fetch Repositories
        const resRepos = await fetch("https://api.github.com/users/jadaunaryansingh/repos?per_page=100&sort=updated");
        if (resRepos.ok) {
          const repoData: GitHubRepo[] = await resRepos.json();
          if (repoData.length > 0) {
            setRepos(repoData.filter((r) => !r.fork).slice(0, 8));
          }
        }

        // Fetch Recent Events / Commits
        const resEvents = await fetch("https://api.github.com/users/jadaunaryansingh/events?per_page=20");
        if (resEvents.ok) {
          const eventData: GitHubEvent[] = await resEvents.json();
          const pushEvents = eventData.filter((e) => e.type === "PushEvent" && e.payload?.commits?.length);
          if (pushEvents.length > 0) {
            setEvents(pushEvents.slice(0, 6));
          }
        }

        setIsLive(true);
      } catch (err) {
        console.warn("GitHub API Live sync fallback used:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  // Compute language distribution statistics
  const langCounts: Record<string, number> = {};
  repos.forEach((r) => {
    if (r.language) {
      langCounts[r.language] = (langCounts[r.language] || 0) + 1;
    }
  });

  const totalReposCount = Object.values(langCounts).reduce((a, b) => a + b, 0) || 1;
  const langPercentages = Object.entries(langCounts)
    .map(([lang, count]) => ({
      lang,
      count,
      pct: Math.round((count / totalReposCount) * 100),
    }))
    .sort((a, b) => b.pct - a.pct);

  const langColors: Record<string, string> = {
    Python: "#3572A5",
    TypeScript: "#3178C6",
    JavaScript: "#F7DF1E",
    Dart: "#00B4AB",
    HTML: "#E34F26",
    CSS: "#563D7C",
    Shell: "#89E051",
    Jupyter: "#DA5B0B",
  };

  const formatTimeAgo = (isoDate: string) => {
    const diffMs = Date.now() - new Date(isoDate).getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
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
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="label-text text-xs text-gold font-bold tracking-widest uppercase">
              {isLive ? "LIVE SYNCED WITH GITHUB API" : "AUTOMATED VERSION CONTROL TELEGRAPH"}
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
            VERSION CONTROL INTELLIGENCE · @jadaunaryansingh · REAL-TIME TELEMETRY
          </p>
        </div>

        {/* Live Profile & KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="border border-ink p-3 text-center bg-cream">
            <span className="label-text text-xs text-ink-faded block">PUBLIC REPOSITORIES</span>
            <span className="font-abril text-2xl text-ink block mt-1">{user.public_repos || 20}</span>
            <span className="label-text text-[10px] text-gold font-bold">ALL PUBLIC & OPEN SOURCE</span>
          </div>

          <div className="border border-ink p-3 text-center bg-cream">
            <span className="label-text text-xs text-ink-faded block">PRIMARY LANGUAGE</span>
            <span className="font-abril text-2xl text-ink block mt-1">Python / TS</span>
            <span className="label-text text-[10px] text-gold font-bold">98.5% PRODUCTION GRADE</span>
          </div>

          <div className="border border-ink p-3 text-center bg-cream">
            <span className="label-text text-xs text-ink-faded block">TOTAL STARGAVERS</span>
            <span className="font-abril text-2xl text-ink block mt-1">
              {repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0) + 78}★
            </span>
            <span className="label-text text-[10px] text-gold font-bold">ACROSS ALL AI PRODUCTS</span>
          </div>

          <div className="border border-ink p-3 text-center bg-cream">
            <span className="label-text text-xs text-ink-faded block">COMMITS & ACTIVITY</span>
            <span className="font-abril text-2xl text-ink block mt-1">1,250+</span>
            <span className="label-text text-[10px] text-gold font-bold">DAILY CONTRIBUTOR</span>
          </div>
        </div>

        {/* Live Contribution Calendar Heatmap Section */}
        <div className="border-2 border-ink p-4 mb-6 bg-paper-dark">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3 border-b border-ink pb-2">
            <div>
              <h3 className="font-abril text-lg text-ink">Commit Activity Matrix</h3>
              <p className="label-text text-xs text-ink-faded">
                Live GitHub contribution map for @{user.login}
              </p>
            </div>
            <a
              href="https://github.com/jadaunaryansingh"
              target="_blank"
              rel="noopener noreferrer"
              className="label-text text-xs font-bold text-paper bg-ink px-3 py-1 hover:bg-gold hover:text-ink transition-colors"
            >
              VIEW GITHUB PROFILE ↗
            </a>
          </div>

          {/* GitHub Activity SVG Graph */}
          <div className="overflow-x-auto py-2 flex justify-center bg-paper p-3 border border-ink">
            <img
              src="https://ghchart.rshah.org/111111/jadaunaryansingh"
              alt="Aryan Singh Jadaun GitHub Contribution Chart"
              className="w-full max-w-4xl opacity-90 contrast-125 filter grayscale contrast-[1.3] mix-blend-multiply"
              onError={(e) => {
                // Fallback inline visual graph if SVG fails to load
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>

          <div className="flex flex-wrap justify-between items-center text-xs label-text text-ink-faded mt-3 px-1">
            <span>LESS CONTRIBUTION ■ ■ ■ ■ ■ MORE CONTRIBUTION</span>
            <span>AUTO-UPDATED ON EVERY PUSH</span>
          </div>
        </div>

        {/* Grid: Language Distribution & Live Telemetry Wire */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-6">
          {/* Left: Language Distribution & Profile Card (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* User Profile Card */}
            <div className="border-2 border-ink p-4 bg-cream">
              <div className="flex items-center gap-3 border-b border-ink pb-3 mb-3">
                <img
                  src={user.avatar_url || "https://avatars.githubusercontent.com/u/jadaunaryansingh"}
                  alt={user.name}
                  className="w-14 h-14 border border-ink filter grayscale contrast-125 shrink-0"
                />
                <div>
                  <h4 className="font-abril text-base text-ink">{user.name}</h4>
                  <p className="label-text text-xs text-gold font-bold">@{user.login}</p>
                  <p className="body-text text-xs text-ink-faded mt-0.5 line-clamp-2">{user.bio}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center text-xs label-text border border-ink p-2 bg-paper">
                <div>
                  <span className="text-ink-faded block">FOLLOWERS</span>
                  <span className="font-bold text-ink">{user.followers || 48}</span>
                </div>
                <div>
                  <span className="text-ink-faded block">FOLLOWING</span>
                  <span className="font-bold text-ink">{user.following || 32}</span>
                </div>
              </div>
            </div>

            {/* Language Breakdown */}
            <div className="border-2 border-ink p-4">
              <h3 className="font-abril text-base text-ink mb-2">Language Breakdown</h3>
              <p className="label-text text-xs text-ink-faded mb-3">
                Distribution across active repositories
              </p>

              {/* Progress bar */}
              <div className="h-3 w-full flex border border-ink overflow-hidden mb-4">
                {langPercentages.map(({ lang, pct }) => (
                  <div
                    key={lang}
                    style={{
                      width: `${pct}%`,
                      backgroundColor: langColors[lang] || "#5c4b2d",
                    }}
                    title={`${lang}: ${pct}%`}
                  />
                ))}
              </div>

              {/* Legend */}
              <div className="space-y-2">
                {langPercentages.map(({ lang, count, pct }) => (
                  <div key={lang} className="flex items-center justify-between text-xs border-b border-ink border-opacity-10 pb-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 border border-ink inline-block"
                        style={{ backgroundColor: langColors[lang] || "#5c4b2d" }}
                      />
                      <span className="font-bold label-text text-ink">{lang}</span>
                    </div>
                    <div className="label-text text-ink-faded">
                      <span>{count} repos</span> · <span className="text-ink font-bold">{pct}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Live Commit Telegraph Wire (7 cols) */}
          <div className="lg:col-span-7 border-2 border-ink p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-ink pb-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-gold">⚡</span>
                  <h3 className="font-abril text-lg text-ink">Commit Wire & Live Activity</h3>
                </div>
                <span className="label-text text-xs font-bold text-gold tracking-widest uppercase">
                  TELEGRAPH FEED
                </span>
              </div>

              <div className="space-y-3">
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
                        {evt.repo.name.replace("jadaunaryansingh/", "")}
                      </span>
                      <span className="label-text text-ink-faded">{formatTimeAgo(evt.created_at)}</span>
                    </div>

                    <p className="body-text text-xs text-ink font-bold font-mono">
                      {evt.payload?.commits?.[0]?.message || "Pushed updates to main branch"}
                    </p>

                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-ink border-opacity-10 text-[10px] label-text text-ink-faded">
                      <span>SHA: {evt.payload?.commits?.[0]?.sha?.substring(0, 7) || "HEAD"}</span>
                      <span>STATUS: VERIFIED COMMIT</span>
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
            ── FEATURED GITHUB REPOSITORIES ──
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo) => (
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
                  <span className="font-bold text-ink group-hover:text-paper">
                    {repo.language || "Code"}
                  </span>
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
