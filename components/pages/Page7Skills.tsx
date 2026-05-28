"use client";

import { motion } from "framer-motion";
import { OrnateRule, SectionDivider } from "@/components/newspaper/Typography";
import VintageStamp from "@/components/newspaper/VintageStamp";

const skillCategories = [
  {
    category: "ML / DEEP LEARNING / NLP / CV",
    icon: "⬡",
    desc: "Deep Learning, NLP, Computer Vision",
    skills: [
      { name: "Deep Learning (CNN, RNN, Transformers)", level: 8, note: "Production models" },
      { name: "Natural Language Processing", level: 9, note: "LLMs, BERT, SpaCy" },
      { name: "Computer Vision", level: 7, note: "OpenCV, YOLO, CNNs" },
      { name: "Scikit-Learn / PyTorch", level: 8, note: "Classical ML & DL" },
      { name: "LangChain / LangGraph", level: 9, note: "Agentic pipelines" },
    ],
  },
  {
    category: "FULL-STACK DEVELOPMENT",
    icon: "⬡",
    desc: "React, Python, Flask, APIs",
    skills: [
      { name: "Python", level: 10, note: "Primary language" },
      { name: "Flask / FastAPI / Streamlit", level: 9, note: "Backend & AI UI" },
      { name: "React / JavaScript", level: 8, note: "Frontend" },
      { name: "REST API Design", level: 9, note: "OpenAPI, JSON" },
      { name: "Firebase / Supabase", level: 8, note: "BaaS & Auth" },
    ],
  },
  {
    category: "DEVOPS",
    icon: "⬡",
    desc: "CI/CD, Automation, Monitoring",
    skills: [
      { name: "Jenkins CI/CD Pipelines", level: 8, note: "Full RHEL setup" },
      { name: "Docker & Containerization", level: 9, note: "Docker Hub, Compose" },
      { name: "GitHub Actions / Webhooks", level: 8, note: "Automated deploys" },
      { name: "Monitoring & Logging", level: 7, note: "Production observability" },
      { name: "Shell Scripting", level: 8, note: "RHEL / Linux" },
    ],
  },
  {
    category: "CLOUD (AWS)",
    icon: "⬡",
    desc: "EC2, S3, Lambda, Docker on Cloud",
    skills: [
      { name: "AWS EC2 & Compute", level: 8, note: "Instance management" },
      { name: "AWS S3 & Storage", level: 8, note: "Object storage" },
      { name: "AWS Lambda", level: 7, note: "Serverless functions" },
      { name: "Docker on Cloud", level: 8, note: "ECS-ready containers" },
      { name: "Cloud Architecture", level: 7, note: "Scalable design" },
    ],
  },
  {
    category: "AUTOMATION / SCRIPTING",
    icon: "⬡",
    desc: "Python Scripts, Workflow Automation",
    skills: [
      { name: "Python Automation Scripts", level: 9, note: "Complex workflows" },
      { name: "Web Scraping", level: 9, note: "BeautifulSoup, Selenium" },
      { name: "Task Scheduling", level: 8, note: "Cron, Celery" },
      { name: "Workflow Automation", level: 8, note: "End-to-end pipelines" },
      { name: "Process Orchestration", level: 7, note: "Multi-step agents" },
    ],
  },
  {
    category: "DATABASE MANAGEMENT",
    icon: "⬡",
    desc: "SQL, NoSQL, Data Modeling",
    skills: [
      { name: "PostgreSQL / MySQL", level: 8, note: "Relational DBs" },
      { name: "MongoDB / NoSQL", level: 8, note: "Document stores" },
      { name: "Firebase Firestore", level: 8, note: "Real-time DB" },
      { name: "Data Modeling", level: 8, note: "Schema design" },
      { name: "Query Optimization", level: 7, note: "Performance tuning" },
    ],
  },
  {
    category: "PROMPT ENGINEERING",
    icon: "⬡",
    desc: "LLM Optimization, AI Prompting",
    skills: [
      { name: "LLM Prompt Design", level: 9, note: "GPT, Gemini, Claude" },
      { name: "Chain-of-Thought Prompting", level: 9, note: "Reasoning chains" },
      { name: "RAG (Retrieval-Augmented)", level: 8, note: "Vector search" },
      { name: "Gemini API Integration", level: 9, note: "Production use" },
      { name: "Agentic AI Patterns", level: 8, note: "Tool-calling agents" },
    ],
  },
  {
    category: "LINUX",
    icon: "⬡",
    desc: "System Admin, Shell Scripting",
    skills: [
      { name: "RHEL / Ubuntu Administration", level: 8, note: "LinuxWorld trained" },
      { name: "Bash / Shell Scripting", level: 9, note: "Automation scripts" },
      { name: "System Configuration", level: 8, note: "Services & daemons" },
      { name: "Networking & Security", level: 7, note: "Firewall, SSH, ports" },
      { name: "Package Management", level: 8, note: "dnf, apt, pip" },
    ],
  },
  {
    category: "VERSION CONTROL",
    icon: "⬡",
    desc: "Git, GitHub, Collaboration",
    skills: [
      { name: "Git", level: 10, note: "Daily driver" },
      { name: "GitHub Flow & PR Reviews", level: 9, note: "Team collaboration" },
      { name: "Branching Strategies", level: 8, note: "Git Flow, trunk" },
      { name: "GitHub Actions", level: 8, note: "CI/CD automation" },
      { name: "Open Source Contribution", level: 7, note: "PRs & issues" },
    ],
  },
  {
    category: "API INTEGRATION",
    icon: "⬡",
    desc: "REST APIs, GraphQL, Webhooks",
    skills: [
      { name: "REST API Consumption", level: 9, note: "External services" },
      { name: "API Design & Documentation", level: 9, note: "OpenAPI, Swagger" },
      { name: "Webhooks & Event Streams", level: 8, note: "Real-time events" },
      { name: "GraphQL", level: 7, note: "Query language" },
      { name: "Rate Limiting & Auth", level: 8, note: "JWT, OAuth" },
    ],
  },
  {
    category: "UI/UX & WEB DESIGN",
    icon: "⬡",
    desc: "Design Systems, User Experience",
    skills: [
      { name: "UI Component Design", level: 8, note: "React, Tailwind" },
      { name: "UX Principles", level: 8, note: "User-centred design" },
      { name: "Responsive Layouts", level: 9, note: "Mobile-first" },
      { name: "Streamlit / Gradio UIs", level: 9, note: "AI-first interfaces" },
      { name: "Accessibility", level: 7, note: "WCAG basics" },
    ],
  },
];

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

function SkillMeter({ name, level, note }: { name: string; level: number; note: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayLevel, setDisplayLevel] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const timer = setInterval(() => {
        start += 1;
        setDisplayLevel(start);
        if (start >= level) clearInterval(timer);
      }, 70);
      return () => clearInterval(timer);
    }
  }, [isInView, level]);

  const bars = Array.from({ length: 10 }, (_, i) => i < displayLevel);

  return (
    <div ref={ref} className="flex items-center gap-2 py-1.5 border-b border-ink border-opacity-10">
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="body-text text-xs font-bold text-ink">{name}</span>
          <span className="label-text text-xs text-ink-faded hidden md:inline">{note}</span>
        </div>
      </div>
      <div className="flex gap-0.5 shrink-0">
        {bars.map((filled, i) => (
          <motion.div
            key={i}
            className={`w-2 h-2 border border-ink ${filled ? "bg-ink" : "bg-transparent"}`}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: i * 0.04, duration: 0.15 }}
          />
        ))}
      </div>
      <span className="label-text text-xs font-bold text-gold w-4 shrink-0 text-right">
        {displayLevel}
      </span>
    </div>
  );
}

function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/\D/g, "")) || 0;
  const suffix = value.replace(/\d/g, "");

  useEffect(() => {
    if (isInView && target > 0) {
      let start = 0;
      const step = Math.max(1, Math.floor(target / 40));
      const timer = setInterval(() => {
        start = Math.min(start + step, target);
        setCount(start);
        if (start >= target) clearInterval(timer);
      }, 50);
      return () => clearInterval(timer);
    }
    if (isInView && target === 0) setCount(0);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center p-3 border border-ink">
      <motion.p
        className="font-abril text-ink"
        style={{ fontSize: "2rem", lineHeight: 1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {target > 0 ? `${count}${suffix}` : value}
      </motion.p>
      <p className="label-text text-xs text-ink-faded mt-1">{label}</p>
    </div>
  );
}

export default function Page7Skills({ onNavigate }: { onNavigate?: (page: number) => void }) {
  return (
    <article className="newspaper-page min-h-screen paper-aged grain-overlay">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="label-text text-xs text-gold font-bold tracking-widest">
            TECHNOLOGY INDEX · ELEVEN COMPETENCY DOMAINS
          </span>
          <OrnateRule thick />
          <motion.h2
            className="headline-xl ink-bleed my-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Complete
            <br />
            Technical Arsenal
          </motion.h2>
          <OrnateRule thick />
          <p className="label-text text-xs text-ink-faded mt-2">
            11 SKILL DOMAINS · 55+ SUB-SKILLS · ALL PRODUCTION-TESTED
          </p>
        </div>

        {/* Summary counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <Counter value="18" label="Live AI Products" />
          <Counter value="11" label="Skill Domains" />
          <Counter value="3+" label="Years Building" />
          <Counter value="∞" label="Curiosity" />
        </div>

        {/* Market index header */}
        <div className="border-2 border-ink p-4 mb-6 bg-cream">
          <div className="flex items-center gap-2 mb-2">
            <span className="label-text text-xs font-bold">TECHNOLOGY MARKET INDEX:</span>
            <span className="label-text text-xs text-gold">▲ BULLISH ON AGENTIC AI</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {["Python ▲98", "LangGraph ▲92", "Flask ▲90", "Docker ▲88", "AWS ▲83", "React ▲80", "NLP ▲90", "Gemini ▲95"].map((item) => (
              <span key={item} className="label-text text-xs font-bold text-ink">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Skill categories — 2 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              className="border-2 border-ink p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
            >
              <div className="flex items-center gap-2 mb-3 border-b border-ink pb-2">
                <span className="text-gold">{cat.icon}</span>
                <div>
                  <p className="label-text text-xs font-bold tracking-wider text-ink">{cat.category}</p>
                  <p className="label-text text-xs text-ink-faded">{cat.desc}</p>
                </div>
              </div>
              <div className="space-y-0.5">
                {cat.skills.map((skill) => (
                  <SkillMeter key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}

          {/* Legend */}
          <div className="border border-ink p-4 flex flex-col justify-center md:col-span-2">
            <p className="label-text text-xs font-bold mb-3 border-b border-ink pb-2 text-center">
              ── PROFICIENCY RATING SCALE ──
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { range: "9–10", label: "Expert", desc: "Production mastery" },
                { range: "7–8", label: "Advanced", desc: "Professional depth" },
                { range: "5–6", label: "Proficient", desc: "Working knowledge" },
                { range: "1–4", label: "Learning", desc: "Active development" },
              ].map(({ range, label, desc }) => (
                <div key={range} className="border border-ink p-2 text-center">
                  <span className="label-text text-xs font-bold text-gold block">{range}</span>
                  <span className="label-text text-xs font-bold text-ink block mt-0.5">{label}</span>
                  <span className="body-text text-xs text-ink-faded">{desc}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-ink text-paper text-center">
              <p className="label-text text-xs text-gold font-bold mb-1">EDITOR'S NOTE</p>
              <p className="body-text text-xs" style={{ color: "#e8d5b0" }}>
                All ratings reflect production usage across 18 deployed projects — not academic study.
                LinuxWorld Informatics trained. GLA University AIML backbone.
              </p>
            </div>
          </div>
        </div>

        {/* Full stack tags */}
        <div className="mt-6 border-2 border-ink p-4">
          <p className="label-text text-xs font-bold mb-3 text-center tracking-widest">── COMPLETE TECHNOLOGY INDEX ──</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Python","Flask","FastAPI","Streamlit","React","JavaScript",
              "LangGraph","LangChain","LLMs","Gemini API","Prompt Engineering","RAG",
              "NLP","Computer Vision","Deep Learning","Scikit-Learn","PyTorch",
              "Docker","Jenkins","CI/CD","GitHub Actions","RHEL","Linux","Bash",
              "AWS EC2","AWS S3","AWS Lambda","Firebase","MongoDB","PostgreSQL","MySQL",
              "REST APIs","GraphQL","Webhooks","Web Scraping","Selenium","BeautifulSoup",
              "Git","GitHub","HuggingFace","Netlify","Render","Tailwind CSS","UI/UX",
            ].map((tech, i) => (
              <motion.span
                key={tech}
                className="border border-ink px-2 py-1 label-text text-xs cursor-default"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                whileHover={{ background: "#111", color: "#f5e9d4" }}
                style={{ transition: "all 0.15s" }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Stamps */}
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <VintageStamp text="PRODUCTION READY" color="#c9a227" delay={0.2} />
          <VintageStamp text="LINUXWORLD TRAINED" color="#111" delay={0.5} />
          <VintageStamp text="GLA UNIVERSITY AIML" color="#5c4b2d" delay={0.8} />
        </div>
      </div>
    </article>
  );
}
