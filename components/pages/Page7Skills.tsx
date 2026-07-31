"use client";

import { motion } from "framer-motion";
import { OrnateRule } from "@/components/newspaper/Typography";
import VintageStamp from "@/components/newspaper/VintageStamp";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface SkillItemProps {
  name: string;
  note: string;
}

const skillCategories = [
  {
    category: "AGENTIC AI & MULTI-AGENT SYSTEMS",
    icon: "⬡",
    desc: "LangGraph, AutoGen, CrewAI, MCP, Autonomous Agents",
    skills: [
      { name: "LangGraph & LangChain", note: "Multi-agent DAGs & stateful workflows" },
      { name: "Autonomous AI Agents", note: "Tool-calling & self-healing loops" },
      { name: "Multi-Agent Orchestration", note: "CrewAI, AutoGen, Swarm architectures" },
      { name: "Model Context Protocol (MCP)", note: "Custom tools & external integrations" },
      { name: "Advanced RAG & Vector DBs", note: "Pinecone, ChromaDB, hybrid search" },
    ],
  },
  {
    category: "FLUTTER & CROSS-PLATFORM APPS",
    icon: "⬡",
    desc: "Flutter, Dart, Mobile & PC Desktop Applications",
    skills: [
      { name: "Flutter Cross-Platform", note: "iOS, Android, Windows & macOS apps" },
      { name: "Dart Language Mastery", note: "Async, OOP, reactive programming" },
      { name: "Desktop & Mobile UI/UX", note: "Responsive layouts & adaptive views" },
      { name: "State Management", note: "Provider, Riverpod, Bloc pattern" },
      { name: "Native Feature & API Integration", note: "Plugins, SQLite, Push Notifications" },
    ],
  },
  {
    category: "ML / DEEP LEARNING / NLP / CV",
    icon: "⬡",
    desc: "Deep Learning, NLP, Computer Vision",
    skills: [
      { name: "Deep Learning (CNN, RNN, Transformers)", note: "Production models" },
      { name: "Natural Language Processing", note: "LLMs, BERT, SpaCy" },
      { name: "Computer Vision", note: "OpenCV, YOLO, CNNs" },
      { name: "Scikit-Learn / PyTorch", note: "Classical ML & DL" },
      { name: "LangChain / LangGraph", note: "Agentic pipelines" },
    ],
  },
  {
    category: "FULL-STACK DEVELOPMENT",
    icon: "⬡",
    desc: "React, Python, Flask, APIs",
    skills: [
      { name: "Python", note: "Primary language" },
      { name: "Flask / FastAPI / Streamlit", note: "Backend & AI UI" },
      { name: "React / JavaScript", note: "Frontend" },
      { name: "REST API Design", note: "OpenAPI, JSON" },
      { name: "Firebase / Supabase", note: "BaaS & Auth" },
    ],
  },
  {
    category: "DEVOPS",
    icon: "⬡",
    desc: "CI/CD, Automation, Monitoring",
    skills: [
      { name: "Jenkins CI/CD Pipelines", note: "Full RHEL setup" },
      { name: "Docker & Containerization", note: "Docker Hub, Compose" },
      { name: "GitHub Actions / Webhooks", note: "Automated deploys" },
      { name: "Monitoring & Logging", note: "Production observability" },
      { name: "Shell Scripting", note: "RHEL / Linux" },
    ],
  },
  {
    category: "CLOUD (AWS)",
    icon: "⬡",
    desc: "EC2, S3, Lambda, Docker on Cloud",
    skills: [
      { name: "AWS EC2 & Compute", note: "Instance management" },
      { name: "AWS S3 & Storage", note: "Object storage" },
      { name: "AWS Lambda", note: "Serverless functions" },
      { name: "Docker on Cloud", note: "ECS-ready containers" },
      { name: "Cloud Architecture", note: "Scalable design" },
    ],
  },
  {
    category: "AUTOMATION / SCRIPTING",
    icon: "⬡",
    desc: "Python Scripts, Workflow Automation",
    skills: [
      { name: "Python Automation Scripts", note: "Complex workflows" },
      { name: "Web Scraping", note: "BeautifulSoup, Selenium" },
      { name: "Task Scheduling", note: "Cron, Celery" },
      { name: "Workflow Automation", note: "End-to-end pipelines" },
      { name: "Process Orchestration", note: "Multi-step agents" },
    ],
  },
  {
    category: "DATABASE MANAGEMENT",
    icon: "⬡",
    desc: "SQL, NoSQL, Data Modeling",
    skills: [
      { name: "PostgreSQL / MySQL", note: "Relational DBs" },
      { name: "MongoDB / NoSQL", note: "Document stores" },
      { name: "Firebase Firestore", note: "Real-time DB" },
      { name: "Data Modeling", note: "Schema design" },
      { name: "Query Optimization", note: "Performance tuning" },
    ],
  },
  {
    category: "PROMPT ENGINEERING",
    icon: "⬡",
    desc: "LLM Optimization, AI Prompting",
    skills: [
      { name: "LLM Prompt Design", note: "GPT, Gemini, Claude" },
      { name: "Chain-of-Thought Prompting", note: "Reasoning chains" },
      { name: "RAG (Retrieval-Augmented)", note: "Vector search" },
      { name: "Gemini API Integration", note: "Production use" },
      { name: "Agentic AI Patterns", note: "Tool-calling agents" },
    ],
  },
  {
    category: "LINUX",
    icon: "⬡",
    desc: "System Admin, Shell Scripting",
    skills: [
      { name: "RHEL / Ubuntu Administration", note: "LinuxWorld trained" },
      { name: "Bash / Shell Scripting", note: "Automation scripts" },
      { name: "System Configuration", note: "Services & daemons" },
      { name: "Networking & Security", note: "Firewall, SSH, ports" },
      { name: "Package Management", note: "dnf, apt, pip" },
    ],
  },
  {
    category: "VERSION CONTROL",
    icon: "⬡",
    desc: "Git, GitHub, Collaboration",
    skills: [
      { name: "Git", note: "Daily driver" },
      { name: "GitHub Flow & PR Reviews", note: "Team collaboration" },
      { name: "Branching Strategies", note: "Git Flow, trunk" },
      { name: "GitHub Actions", note: "CI/CD automation" },
      { name: "Open Source Contribution", note: "PRs & issues" },
    ],
  },
  {
    category: "API INTEGRATION",
    icon: "⬡",
    desc: "REST APIs, GraphQL, Webhooks",
    skills: [
      { name: "REST API Consumption", note: "External services" },
      { name: "API Design & Documentation", note: "OpenAPI, Swagger" },
      { name: "Webhooks & Event Streams", note: "Real-time events" },
      { name: "GraphQL", note: "Query language" },
      { name: "Rate Limiting & Auth", note: "JWT, OAuth" },
    ],
  },
  {
    category: "UI/UX & WEB DESIGN",
    icon: "⬡",
    desc: "Design Systems, User Experience",
    skills: [
      { name: "UI Component Design", note: "React, Tailwind" },
      { name: "UX Principles", note: "User-centred design" },
      { name: "Responsive Layouts", note: "Mobile-first & Desktop" },
      { name: "Streamlit / Gradio UIs", note: "AI-first interfaces" },
      { name: "Accessibility", note: "WCAG basics" },
    ],
  },
];

function SkillItem({ name, note }: SkillItemProps) {
  return (
    <div className="flex items-center justify-between py-1.5 border-b border-ink border-opacity-10">
      <div className="flex-1 min-w-0 pr-2">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="body-text text-xs font-bold text-ink">{name}</span>
          <span className="label-text text-xs text-ink-faded hidden md:inline">{note}</span>
        </div>
      </div>
      <span className="label-text text-[10px] font-bold tracking-wider text-gold px-1.5 py-0.5 border border-gold border-opacity-40 uppercase shrink-0">
        EXPERT
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
            TECHNOLOGY INDEX · THIRTEEN COMPETENCY DOMAINS
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
            13 SKILL DOMAINS · 65+ SUB-SKILLS · ALL PRODUCTION-TESTED & EXPERT LEVEL
          </p>
        </div>

        {/* Summary counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <Counter value="40+" label="Live AI Products" />
          <Counter value="13" label="Skill Domains" />
          <Counter value="3+" label="Years Building" />
          <Counter value="∞" label="Curiosity" />
        </div>

        {/* Market index header */}
        <div className="border-2 border-ink p-4 mb-6 bg-cream">
          <div className="flex items-center gap-2 mb-2">
            <span className="label-text text-xs font-bold">TECHNOLOGY MARKET INDEX:</span>
            <span className="label-text text-xs text-gold">▲ BULLISH ON AGENTIC AI & FLUTTER</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              "Agentic AI ▲ EXPERT",
              "Flutter ▲ EXPERT",
              "Python ▲ EXPERT",
              "LangGraph ▲ EXPERT",
              "FastAPI ▲ EXPERT",
              "Docker ▲ EXPERT",
              "AWS ▲ EXPERT",
              "React ▲ EXPERT",
              "Gemini ▲ EXPERT",
            ].map((item) => (
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
                  <SkillItem key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}

          {/* Legend */}
          <div className="border border-ink p-4 flex flex-col justify-center md:col-span-2">
            <p className="label-text text-xs font-bold mb-3 border-b border-ink pb-2 text-center">
              ── DOMAIN MASTERY & PROFICIENCY ──
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { level: "EXPERT", label: "Agentic AI & LLMs", desc: "Production Systems" },
                { level: "EXPERT", label: "Flutter & Mobile/PC", desc: "Cross-Platform Apps" },
                { level: "EXPERT", label: "Full-Stack & Cloud", desc: "AWS, DevOps & CI/CD" },
                { level: "EXPERT", label: "System Architecture", desc: "Battle-Tested Systems" },
              ].map(({ level, label, desc }) => (
                <div key={label} className="border border-ink p-2 text-center">
                  <span className="label-text text-xs font-bold text-gold block">{level}</span>
                  <span className="label-text text-xs font-bold text-ink block mt-0.5">{label}</span>
                  <span className="body-text text-xs text-ink-faded">{desc}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-ink text-paper text-center">
              <p className="label-text text-xs text-gold font-bold mb-1">EDITOR'S NOTE</p>
              <p className="body-text text-xs" style={{ color: "#e8d5b0" }}>
                All domains reflect Expert-Level production usage across 40+ deployed projects — not academic study.
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
              "Python", "Flutter", "Dart", "Agentic AI", "LangGraph", "LangChain", "AutoGen", "CrewAI", "MCP",
              "Flask", "FastAPI", "Streamlit", "React", "JavaScript", "Mobile Apps", "PC Apps",
              "LLMs", "Gemini API", "Prompt Engineering", "RAG", "Vector DBs",
              "NLP", "Computer Vision", "Deep Learning", "Scikit-Learn", "PyTorch",
              "Docker", "Jenkins", "CI/CD", "GitHub Actions", "RHEL", "Linux", "Bash",
              "AWS EC2", "AWS S3", "AWS Lambda", "Firebase", "MongoDB", "PostgreSQL", "MySQL",
              "REST APIs", "GraphQL", "Webhooks", "Web Scraping", "Selenium", "BeautifulSoup",
              "Git", "GitHub", "HuggingFace", "Netlify", "Render", "Tailwind CSS", "UI/UX",
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

