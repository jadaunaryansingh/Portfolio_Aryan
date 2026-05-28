"use client";

import { motion } from "framer-motion";
import { OrnateRule, PullQuote, SectionDivider, DropCapParagraph } from "@/components/newspaper/Typography";
import VintageStamp from "@/components/newspaper/VintageStamp";
import AdBlock from "@/components/newspaper/AdBlock";

const timeline = [
  { year: "~2010", event: "Tech-obsessed childhood begins in Agra — dismantling gadgets, writing first BASIC programs" },
  { year: "2011-2021", event: "High School at St. Peter's College, Agra (Completed 10th Grade in 2021)" },
  { year: "2021-2023", event: "Matriculation at RCS Memorial Sr. Secondary School (Completed 11th & 12th Grade in 2023)" },
  { year: "2024", event: "Enrolled at GLA University — B.Tech in AI & Machine Learning (graduating 2028)" },
  { year: "2024", event: "Interned at LinuxWorld Informatics — deep dive into Agentic AI, cloud & autonomous systems" },
  { year: "2025", event: "Launched CAB-I-NET, CareSync HMS, Voice Auth & other AI systems — 18 projects" },
  { year: "2025", event: "Led E-Cell entrepreneurship initiatives at GLA University" },
  { year: "2026", event: "Actively seeking full-time AI/ML Engineering & Full-Stack Development roles" },
];

const techStack = [
  "Python", "Flask", "Streamlit", "LangGraph", "FastAPI",
  "AWS", "Docker", "Firebase", "React", "NLP",
];

const stats = [
  { value: "18", label: "Live Projects" },
  { value: "11", label: "Skill Domains" },
  { value: "2028", label: "Graduating" },
  { value: "∞", label: "Drive" },
];

function HandwrittenSignature() {
  return (
    <motion.svg
      viewBox="0 0 340 70"
      className="w-56 h-14 mt-2"
    >
      <motion.text
        x="10"
        y="48"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: "30px",
          fill: "#111",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Aryan Singh Jadaun
      </motion.text>
      <motion.line
        x1="10" y1="55" x2="330" y2="55"
        stroke="#111" strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.8 }}
      />
    </motion.svg>
  );
}

export default function Page2About({ onNavigate }: { onNavigate?: (page: number) => void }) {
  return (
    <article className="newspaper-page min-h-screen paper-aged grain-overlay">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Page header */}
        <div className="text-center mb-4">
          <span className="label-text text-xs text-gold font-bold tracking-widest">
            EXCLUSIVE FEATURE INTERVIEW
          </span>
          <OrnateRule thick />
          <motion.h2
            className="headline-xl ink-bleed my-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Inside The Mind Of
            <br />
            A Young AI Engineer
          </motion.h2>
          <OrnateRule thick />
          <p className="label-text text-xs text-ink-faded mt-2">
            BY THE EDITORIAL STAFF · DEVELOPER DAILY CORRESPONDENT · AGRA BUREAU
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-6">
          {/* Left: Main article */}
          <div className="col-span-12 md:col-span-8">
            <DropCapParagraph
              text="I don't plan — I ship. Raised in Agra and now studying Artificial Intelligence & Machine Learning at GLA University in Mathura, I have built a philosophy that cuts through the noise of academia: bridge research and real-world systems, always. My eighteen deployed AI products are proof that this philosophy works."
            />

            <p className="body-text mb-4">
              My time at LinuxWorld Informatics wasn't just an internship — it was a crucible.
              Autonomous systems, Agentic AI, cloud deployments, and ML/DL pipelines were not
              academic concepts. They were daily deliverables. That experience forged the
              engineer I am today, building LangGraph-powered legal AI platforms and hospital
              chatbots that actually scrape live hospital data.
            </p>

            <PullQuote
              quote="Bridging research and real-world systems is not a career goal. It's a daily practice. Every project I ship is a bridge."
              attribution="Aryan Singh Jadaun — AIML Engineer & Builder"
            />

            <p className="body-text mb-4">
              Python, Flask, Streamlit, Docker and NLP are my native languages. But what sets
              me apart is my range — from writing Shell scripts on RHEL to deploying CI/CD
              pipelines with Jenkins, from building Gemini-powered fashion recommenders to
              designing agentic legal reasoning engines. I lead with curiosity and ship with
              discipline.
            </p>

            <p className="body-text mb-4">
              Beyond engineering, I bring leadership. As a participant in E-Cell at GLA
              University, I have nurtured the entrepreneurial spirit that gave rise to CAB-I-NET
              — my smart cab fare comparison startup — and a growing portfolio of AI products
              that are already in the hands of real users. I am, by any measure, a builder.
            </p>

            <SectionDivider label="CAREER TIMELINE" />

            {/* Timeline */}
            <div className="space-y-3 mb-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="shrink-0">
                    <span
                      className="bg-ink text-paper px-2 py-0.5 font-bold"
                      style={{ fontFamily: "'Abril Fatface', cursive", fontSize: "0.65rem" }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-1 border-l-2 border-ink pl-3 pb-3">
                    <p className="body-text text-sm">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <SectionDivider />

            <p className="body-text italic border-l-4 border-gold pl-4 mb-4">
              "Tech-obsessed since childhood, raised in Agra. Skilled in Python, Flask,
              Streamlit, Docker & NLP. Passionate about bridging research and real-world
              systems. Engineer. Builder. Dreamer. Rider."
            </p>

            {/* Signature */}
            <div className="mt-6 border-t border-ink pt-4">
              <p className="body-text text-xs text-ink-faded italic mb-1">
                Authenticated by:
              </p>
              <HandwrittenSignature />
              <p className="label-text text-xs mt-1">ARYAN SINGH JADAUN · AIML ENGINEER, GLA UNIVERSITY</p>
            </div>
          </div>

          {/* Right sidebar */}
          <aside className="col-span-12 md:col-span-4 space-y-4">
            {/* Identity card */}
            <div className="border-newspaper p-4">
              <p className="label-text text-xs font-bold tracking-widest border-b border-ink pb-2 mb-3">
                ── IDENTITY CARD ──
              </p>
              <div className="space-y-2">
                {[
                  { label: "Full Name", value: "Aryan Singh Jadaun" },
                  { label: "University", value: "GLA University, Mathura" },
                  { label: "Degree", value: "B.Tech — AIML" },
                  { label: "Graduating", value: "2028" },
                  { label: "Schooling", value: "St. Peter's (High School) & RCS Memorial (Matriculation)" },
                  { label: "Experience", value: "LinuxWorld Informatics" },
                  { label: "Location", value: "Agra, Uttar Pradesh" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-start gap-2 border-b border-ink border-opacity-10 pb-1.5">
                    <span className="label-text text-xs text-ink-faded">{label}</span>
                    <span className="body-text text-xs font-bold text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="border-newspaper p-4">
              <p className="label-text text-xs font-bold tracking-widest border-b border-ink pb-2 mb-3">
                ── AT A GLANCE ──
              </p>
              <div className="grid grid-cols-2 gap-3">
                {stats.map(({ value, label }) => (
                  <div key={label} className="text-center border border-ink p-2">
                    <p className="font-abril text-ink" style={{ fontSize: "1.6rem", lineHeight: 1 }}>
                      {value}
                    </p>
                    <p className="label-text text-xs text-ink-faded mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div className="border-newspaper p-4">
              <p className="label-text text-xs font-bold tracking-widest border-b border-ink pb-2 mb-3">
                ── CORE ARSENAL ──
              </p>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <span key={tech} className="border border-ink px-2 py-0.5 label-text text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="border-newspaper p-4">
              <p className="label-text text-xs font-bold tracking-widest border-b border-ink pb-2 mb-2">
                ── RESEARCH INTERESTS ──
              </p>
              {["Agentic AI", "LLMs & Prompt Engineering", "ML/DL", "AWS Cloud", "Computer Vision", "NLP"].map((item) => (
                <p key={item} className="body-text text-xs text-ink-faded py-1 border-b border-ink border-opacity-10">
                  ◆ {item}
                </p>
              ))}
            </div>

            {/* Stamps */}
            <div className="flex flex-col gap-3 items-center">
              <VintageStamp text="GLA UNIVERSITY" color="#5c4b2d" delay={0.3} />
              <VintageStamp text="AIML ENGINEER" color="#c9a227" delay={0.6} />
              <VintageStamp text="LINUXWORLD ALUMNI" color="#111" delay={0.9} />
            </div>

            <AdBlock
              title="AI/ML Engineer Available"
              body="Aryan Singh Jadaun — AIML undergrad, 18 live AI products. Agentic AI · LangGraph · Full-Stack. Immediate availability. Results guaranteed."
              cta="CONTACT NOW →"
              onClick={() => onNavigate?.(7)}
            />
          </aside>
        </div>
      </div>
    </article>
  );
}
