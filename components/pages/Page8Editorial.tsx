"use client";

import { motion } from "framer-motion";
import { OrnateRule, SectionDivider, PullQuote, DropCapParagraph } from "@/components/newspaper/Typography";
import AdBlock from "@/components/newspaper/AdBlock";

export default function Page8Editorial({ onNavigate }: { onNavigate?: (page: number) => void }) {
  const blogs = [
    {
      id: "cloudflare-scaling",
      title: "Surviving vs. Scaling: The Cloudflare Difference",
      subhead: "An inside look at how the global network safeguards and accelerates modern web applications.",
      teaser: "If you're building anything for the internet — a startup, an app, a side project — Cloudflare is the difference between surviving and scaling. In this breakdown, we demystify the Cloudflare ecosystem: from speed and security to DNS, CDN, and edge computing, delivered in a style your infrastructure deserves.",
      quote: "Cloudflare is not just a shield; it is a global accelerator that decides whether your startup survives the slashdot effect or crashes under traffic surge.",
      url: "https://www.linkedin.com/posts/aryan-singh-jadaun_the-backbone-of-every-high-performing-website-activity-7396797423781761025-DBPr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADuMGAMBc3REc3fZYVTVUOinFQsoC6oParg",
      date: "JULY 2026",
    }
  ];

  return (
    <article className="newspaper-page min-h-screen paper-aged grain-overlay">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Page Header */}
        <div className="text-center mb-4">
          <span className="label-text text-xs text-gold font-bold tracking-widest">
            THE EDITORIAL DESK · TECH COLUMNS & INDUSTRY INSIGHTS
          </span>
          <OrnateRule thick />
          <motion.h2
            className="headline-xl ink-bleed my-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Weekly Columns
            <br />
            & Editorial Opinions
          </motion.h2>
          <OrnateRule thick />
          <p className="label-text text-xs text-ink-faded mt-2">
            DEV OPINIONS · CLOUD SYSTEMS ARCHITECTURES · ARTIFICIAL INTELLIGENCE · AGENTIC WORKFLOWS
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-6">
          {/* Left Column: Featured Editorial */}
          <div className="col-span-12 md:col-span-8 space-y-4">
            <div>
              <p className="label-text text-xs text-gold font-bold mb-1">FEATURED WEEKLY COLUMN</p>
              <h3 className="headline-lg ink-bleed text-ink leading-tight mb-2">
                {blogs[0].title}
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs label-text text-ink-faded font-bold border-b border-ink border-opacity-20 pb-2 mb-3">
                <span>WRITTEN BY: ARYAN SINGH JADAUN</span>
                <span>DESK: INFRASTRUCTURE & SECURITY</span>
                <span>DATE: {blogs[0].date}</span>
              </div>
            </div>

            <DropCapParagraph text={blogs[0].teaser} />

            <PullQuote
              quote={blogs[0].quote}
              attribution="Aryan Singh Jadaun, The Developer Daily"
            />

            <div className="body-text text-xs text-ink-faded leading-relaxed space-y-3 text-justify">
              <p>
                At its core, web performance is a battle against geographical latency. When a user requests your site,
                the distance between their origin server dictates the speed of the user experience.
                Cloudflare's Anycast network resolves this bottleneck by caching and serving static assets from edge servers
                positioned in over 300 cities globally. This ensures that content is delivered at sub-millisecond speeds,
                reducing load times and resource utilization on your backend servers.
              </p>
              <p>
                However, scaling is not just about speed; it is about security. Without a Web Application Firewall (WAF)
                and robust DDoS mitigation, high-performance web systems are highly vulnerable to automated bot scans and
                malicious payloads. Incorporating edge rules, smart rate-limiting, and DNS-level shields safeguards production
                environments, allowing applications to experience viral traffic surges while retaining continuous uptime.
              </p>
            </div>

            <div className="pt-3">
              <a
                href={blogs[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-ink text-paper px-4 py-2 label-text text-xs font-bold hover:bg-brown transition-colors cursor-pointer"
              >
                READ FULL ARTICLE ON LINKEDIN ➔
              </a>
            </div>
          </div>

          {/* Right Column: Weekly Archives & Ads */}
          <aside className="col-span-12 md:col-span-4 space-y-6">
            <div className="border-newspaper p-4">
              <p className="label-text text-xs font-bold tracking-widest border-b border-ink pb-2 mb-3">
                ── UPCOMING TECH COLUMNS ──
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Scaling Python Web APIs on Cloud Infrastructure",
                    desc: "An editorial examining high-throughput FastAPI design, Docker optimization, and multi-region AWS container deployments under real-world load.",
                    tag: "CLOUD INFRASTRUCTURE",
                  },
                  {
                    title: "Building Autonomous Agents: LangGraph Decoded",
                    desc: "Decoding cyclic agentic workflows, memory persistence, and dynamic planning loops in state-of-the-art agent architectures.",
                    tag: "AGENTIC AI / LLMs",
                  },
                ].map((item, idx) => (
                  <div key={item.title} className="border-b border-ink border-opacity-20 pb-3 last:border-0 last:pb-0">
                    <span className="label-text text-[0.6rem] font-bold text-gold">{item.tag}</span>
                    <h4 className="headline-sm text-xs font-bold text-ink ink-bleed mt-0.5 mb-1 leading-snug">
                      {item.title}
                    </h4>
                    <p className="body-text text-[0.7rem] text-ink-faded leading-relaxed">
                      {item.desc}
                    </p>
                    <span className="label-text text-[0.55rem] font-bold text-ink-faded block mt-1.5 italic">
                      COMING SOON · VOLUME II
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <AdBlock
              title="Daily System Architecture Insights"
              body="Subscribe to Aryan's LinkedIn newsletter for insights into API performance, Python backend optimization, LangGraph agents, and Cloud deployments."
              cta="FOLLOW ARYAN ON LINKEDIN"
              onClick={() => window.open("https://www.linkedin.com/in/aryan-singh-jadaun", "_blank", "noopener,noreferrer")}
            />
          </aside>
        </div>
      </div>
    </article>
  );
}
