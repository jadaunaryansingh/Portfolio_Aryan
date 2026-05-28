"use client";

import { motion } from "framer-motion";
import { OrnateRule, SectionDivider } from "@/components/newspaper/Typography";
import VintageStamp from "@/components/newspaper/VintageStamp";
import AdBlock from "@/components/newspaper/AdBlock";

const internships = [
  {
    role: "Agentic AI & Cloud Intern",
    company: "LinuxWorld Informatics Pvt. Ltd.",
    duration: "May 2025 - August 2025 (3 Months)",
    summary: "Built autonomous AI systems and deployed secure cloud architecture under the mentorship of Vimal Daga.",
    bullets: [
      "Designed and deployed LangChain + Gemini AI agent workflows for autonomous decision making.",
      "Automated complete CI/CD deployment pipelines using Jenkins, Docker, and AWS EC2 compute nodes.",
      "Engineered an Agentic AI Dashboard: a multi-tool menu-driven application integrating Twilio, WhatsApp, and LinkedIn API endpoints.",
      "Configured robust Docker containerization pipelines, optimizing resource footprint and dependency isolation."
    ],
    color: "#ff9900" // AWS Orange accent
  },
  {
    role: "AI Web Development Intern",
    company: "InAmigos Foundation Pvt. Ltd.",
    duration: "May 2026 - August 2026 (3 Months)",
    summary: "Developed intelligent web applications integrating automation pipelines and full-stack modules.",
    bullets: [
      "Engineered AI-powered web solutions featuring responsive APIs and intelligent task automation capabilities.",
      "Optimized frontend module delivery for responsive client viewing and maximum performance.",
      "Collaborated on unit testing, validation pipelines, and secure cloud staging deployments."
    ],
    color: "#86bc25" // Deloitte/Foundation Green accent
  }
];

const leadership = [
  {
    role: "Secretary & Head of Corporate Relations",
    org: "IEEE Computer Society Council, GLA University",
    duration: "Present Role",
    desc: "Currently directing council operations and bridging academic research with industry partnerships.",
    bullets: [
      "Orchestrating daily council operations, official communications, and administrative documentation.",
      "Building and maintaining long-term corporate relationships for technical workshops, symposiums, and events.",
      "Coordinating corporate sponsorships and technical collaborations with key industry stakeholders."
    ]
  },
  {
    role: "E-Cell Member",
    org: "GLA University Entrepreneurship Cell",
    duration: "5 Months Active",
    desc: "Participated in hands-on startup ideation, venture pitch preparation, and entrepreneurial mentoring.",
    bullets: [
      "Contributed to startup ideation bootcamps and business model canvas (BMC) design workshops.",
      "Prepared pitch decks and financial projection blueprints for university-level entrepreneurship challenges."
    ]
  },
  {
    role: "Campus Ambassador",
    org: "SmartED Innovations",
    duration: "Academic Campaign",
    desc: "Represented SmartED on campus, driving student engagement, outreach campaigns, and brand visibility.",
    bullets: [
      "Promoted educational programs and bootcamps, serving as the core bridge between students and coordinators.",
      "Led digital promotion campaigns, managing peer onboarding and campus-wide ambassador networks."
    ]
  }
];

export default function Page3Experience({ onNavigate }: { onNavigate?: (page: number) => void }) {
  return (
    <article className="newspaper-page min-h-screen paper-aged grain-overlay">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Page Header */}
        <div className="text-center mb-4">
          <span className="label-text text-xs text-gold font-bold tracking-widest">
            PROFESSIONAL CHRONICLES · LABOR & LEADERSHIP RECORD
          </span>
          <OrnateRule thick />
          <motion.h2
            className="headline-xl ink-bleed my-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Chronicles Of
            <br />
            Industry Involvement
          </motion.h2>
          <OrnateRule thick />
          <p className="label-text text-xs text-ink-faded mt-2">
            RECORD OF INTERNSHIPS, ENGINEERING ROLES, AND LEADERSHIP INITIATIVES
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-6 mt-6">
          
          {/* LEFT: Professional Internships (col-span-8) */}
          <div className="col-span-12 md:col-span-8 space-y-6">
            <SectionDivider label="PROFESSIONAL INTERNSHIPS" />

            <div className="space-y-6">
              {internships.map((job, idx) => (
                <motion.div
                  key={job.role}
                  className="border-2 border-ink p-4 bg-cream relative hover:translate-y-[-1px] transition-transform duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                >
                  {/* Accent tag */}
                  <div
                    className="absolute top-0 left-0 w-1.5 h-full"
                    style={{ backgroundColor: job.color }}
                  />

                  <div className="pl-2">
                    <div className="flex justify-between items-baseline flex-wrap border-b border-ink border-opacity-10 pb-2 mb-3">
                      <div>
                        <span className="label-text text-[0.6rem] text-gold font-bold tracking-wider block">
                          EXPERIENCE RECORD 0{idx + 1}
                        </span>
                        <h3 className="headline-md text-ink font-bold">{job.role}</h3>
                        <p className="font-playfair text-sm text-ink-light italic font-bold">{job.company}</p>
                      </div>
                      <span className="label-text text-[0.65rem] text-ink-faded font-bold bg-paper px-2 py-0.5 border border-ink">
                        {job.duration}
                      </span>
                    </div>

                    <p className="body-text text-xs italic text-ink-faded mb-3">{job.summary}</p>

                    <ul className="space-y-2">
                      {job.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex gap-2 items-start body-text text-xs text-ink-light">
                          <span className="text-gold shrink-0">◆</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom mini classified layout */}
            <div className="border border-ink p-3 bg-[#faf3e0] text-center">
              <p className="label-text text-[0.6rem] text-ink-faded">
                VERIFIED ARCHIVES · PUBLIC REGISTERED RECORD OF EMPLOYMENT
              </p>
            </div>
          </div>

          {/* RIGHT: Leadership & Engagement Sidebar (col-span-4) */}
          <aside className="col-span-12 md:col-span-4 space-y-4">
            <SectionDivider label="LEADERSHIP & COUNCILS" />

            <div className="space-y-4">
              {leadership.map((lead, idx) => (
                <motion.div
                  key={lead.role}
                  className="border border-ink p-4 bg-paper"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="border-b border-ink border-opacity-20 pb-1.5 mb-2 flex justify-between items-baseline flex-wrap">
                    <h4 className="headline-sm text-ink text-xs font-bold">{lead.role}</h4>
                    <span className="label-text text-[0.55rem] text-ink-faded">{lead.duration}</span>
                  </div>
                  <p className="label-text text-[0.6rem] text-gold font-bold mb-1 tracking-wider">{lead.org}</p>
                  <p className="body-text text-[0.7rem] text-ink-faded mb-2 leading-relaxed">{lead.desc}</p>
                  
                  <ul className="space-y-1">
                    {lead.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex gap-1.5 items-start text-[0.68rem] text-ink-light leading-normal">
                        <span className="text-ink opacity-40 shrink-0">◇</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Hiring Adblock */}
            <AdBlock
              title="Talent Available for AI Engineering"
              body="Aryan Singh Jadaun is available for autonomous Agentic AI, LangGraph orchestration, cloud deployments, and full-stack engineering."
              cta="HIRE ME NOW →"
              onClick={() => onNavigate?.(7)}
            />

            {/* Stamps */}
            <div className="flex flex-col items-center gap-3">
              <VintageStamp text="AGENTIC AI INTERN" color="#ff9900" delay={0.2} />
              <VintageStamp text="LEADERSHIP COUNCIL" color="#111" delay={0.5} />
              <VintageStamp text="SHIPPED IN PRODUCTION" color="#c9a227" delay={0.8} />
            </div>
          </aside>

        </div>
      </div>
    </article>
  );
}
