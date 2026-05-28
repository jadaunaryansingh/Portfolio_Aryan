"use client";

import { motion } from "framer-motion";
import { OrnateRule, SectionDivider } from "@/components/newspaper/Typography";
import VintageStamp from "@/components/newspaper/VintageStamp";

const certifications = [
  // --- MICROSOFT CERTIFICATIONS ---
  {
    id: "azure-ai-fundamentals",
    issuer: "Microsoft",
    title: "Azure AI Fundamentals (AI-900)",
    year: "2025",
    type: "Microsoft Certification",
    rotate: "-1.5deg",
    color: "#0078d4", // Azure Blue
    url: "https://www.credly.com/badges/b381c11e-5e65-4d73-ba7e-e086c2e2df4e/public_url",
    badge: "/certifications/microsoft-certified-azure-ai-fundamentals.png"
  },
  {
    id: "azure-fundamentals",
    issuer: "Microsoft",
    title: "Azure Fundamentals (AZ-900)",
    year: "2025",
    type: "Microsoft Certification",
    rotate: "1deg",
    color: "#0078d4", // Azure Blue
    url: "https://www.credly.com/badges/aa35e7f4-ae7e-4439-ab44-a6f29da85c24/public_url",
    badge: "/certifications/microsoft-certified-azure-fundamentals.png"
  },

  // --- LINUXWORLD CERTIFICATIONS ---
  {
    id: "linuxworld-internship",
    issuer: "LinuxWorld Informatics Pvt. Ltd.",
    title: "Autonomous Agentic AI Platform Summer Internship",
    year: "2025",
    type: "Internship Completion",
    rotate: "-1.5deg",
    color: "#5c4b2d", // Vintage Brown
    url: "/certifications/Internship Completion.pdf"
  },
  {
    id: "linuxworld-appreciation",
    issuer: "LinuxWorld Informatics Pvt. Ltd.",
    title: "AWS Cloud & Artificial Intelligence Workshop Coord.",
    year: "2025",
    type: "Letter of Appreciation",
    rotate: "2deg",
    color: "#c9a227", // Gold
    url: "/certifications/Aryan_Singh_Appreciation.pdf"
  },
  {
    id: "linuxworld-training",
    issuer: "LinuxWorld Informatics Pvt. Ltd.",
    title: "Advanced Machine Learning & DL Training",
    year: "2025",
    type: "Training Certificate",
    rotate: "-1deg",
    color: "#5c4b2d", // Vintage Brown
    url: "/certifications/Training Certificate.pdf"
  },

  // --- INDUSTRY JOB SIMULATIONS ---
  {
    id: "aws-solutions-architecture",
    issuer: "AWS",
    title: "Solutions Architecture Job Simulation",
    year: "2025",
    type: "AWS Simulation",
    rotate: "-2deg",
    color: "#ff9900", // AWS Orange
    url: "https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_68cac84215c59647ef02f5fd_1760810464687_completion_certificate.pdf"
  },
  {
    id: "deloitte-technology",
    issuer: "Deloitte",
    title: "Technology Job Simulation",
    year: "2025",
    type: "Deloitte Simulation",
    rotate: "1.5deg",
    color: "#86bc25", // Deloitte Green
    url: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_68cac84215c59647ef02f5fd_1765661730317_completion_certificate.pdf"
  },
  {
    id: "deloitte-data-analytics",
    issuer: "Deloitte",
    title: "Data Analytics Job Simulation",
    year: "2025",
    type: "Deloitte Simulation",
    rotate: "-1deg",
    color: "#86bc25", // Deloitte Green
    url: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_68cac84215c59647ef02f5fd_1760376566680_completion_certificate.pdf"
  },
  {
    id: "jp-morgan-se",
    issuer: "J.P. Morgan Chase & Co.",
    title: "Software Engineering Job Simulation",
    year: "2025",
    type: "J.P. Morgan Simulation",
    rotate: "2deg",
    color: "#111", // Black/Dark Gold
    url: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_68cac84215c59647ef02f5fd_1760377902225_completion_certificate.pdf"
  }
];

const achievements = [
  { label: "Microsoft Credentials", count: "2" },
  { label: "LinuxWorld Achievements", count: "3" },
  { label: "Industry Job Simulations", count: "4" },
  { label: "Live Projects Deployed", count: "18" },
];

function CertCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  return (
    <motion.div
      className="cert-card relative min-h-[170px] flex flex-col justify-between"
      style={{ border: `2px solid ${cert.color}`, transform: `rotate(${cert.rotate})` }}
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: parseFloat(cert.rotate) }}
      viewport={{ once: true }}
      whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute inset-2 pointer-events-none opacity-30" style={{ border: `1px dashed ${cert.color}` }} />

      {/* Render Microsoft badge image if present */}
      {cert.badge && (
        <div className="w-10 h-10 absolute right-2 top-2 z-10 pointer-events-none select-none">
          <img src={cert.badge} alt="Badge" className="w-full h-full object-contain" />
        </div>
      )}

      <div>
        <div className={`border-b-2 pb-2 mb-2 ${cert.badge ? "pr-10" : ""}`} style={{ borderColor: cert.color }}>
          <p className="label-text text-[0.65rem] font-bold tracking-widest" style={{ color: cert.color }}>
            {cert.type}
          </p>
        </div>

        <p className="body-text text-[0.7rem] text-ink-faded mb-0.5">{cert.issuer}</p>
        <h3 className="headline-sm text-ink ink-bleed mb-2 text-xs font-bold leading-tight">{cert.title}</h3>
      </div>

      <div className="flex items-center justify-between mt-auto pt-2 border-t border-ink border-opacity-20 z-20">
        <span className="font-abril text-sm" style={{ color: cert.color }}>{cert.year}</span>
        <a
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="label-text text-[0.6rem] font-bold px-2 py-0.5 border border-ink hover:bg-ink hover:text-paper transition-colors cursor-pointer"
        >
          VIEW FILE ↗
        </a>
      </div>
    </motion.div>
  );
}

function TimelineDot({ year, event }: { year: string; event: string }) {
  return (
    <motion.div
      className="flex gap-3 items-start"
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-ink border-2 border-gold shrink-0 mt-1" />
        <div className="w-px flex-1 bg-ink opacity-20 mt-1" />
      </div>
      <div className="pb-4">
        <span className="font-bold text-gold" style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "0.8rem" }}>{year}</span>
        <p className="body-text text-xs text-ink-faded">{event}</p>
      </div>
    </motion.div>
  );
}

export default function Page6Certifications({ onNavigate }: { onNavigate?: (page: number) => void }) {
  return (
    <article className="newspaper-page min-h-screen paper-aged grain-overlay">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="label-text text-xs text-gold font-bold tracking-widest">
            ACHIEVEMENTS & CREDENTIALS DESK
          </span>
          <OrnateRule thick />
          <motion.h2
            className="headline-xl ink-bleed my-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            A Record Of
            <br />
            Proven Excellence
          </motion.h2>
          <OrnateRule thick />
          <p className="label-text text-xs text-ink-faded mt-2">
            OFFICIAL CREDENTIALS OF ARYAN SINGH JADAUN · GLA UNIVERSITY · MICROSOFT · AWS · DELOITTE · J.P. MORGAN
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-6">
          {/* Left: Cert cards */}
          <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {certifications.map((cert, i) => (
                <CertCard key={cert.id} cert={cert} index={i} />
              ))}
            </div>

            {/* Live deployments as achievement */}
            <div className="border-2 border-gold p-4">
              <p className="label-text text-xs font-bold text-gold border-b border-gold pb-2 mb-3 text-center">
                ── LIVE DEPLOYMENT RECORD ──
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  { name: "CAB-I-NET", host: "Netlify Live" },
                  { name: "Clothing AI", host: "Render Live" },
                  { name: "QuizMaker AI", host: "Netlify Live" },
                  { name: "Travel Planner", host: "GitHub / Next.js" },
                  { name: "Voice Auth", host: "FastAPI / Python" },
                  { name: "Zorvyn Backend", host: "AWS / Docker" },
                  { name: "AI Agent Arch", host: "Groq / LangChain" },
                  { name: "RAG System", host: "Groq Vector DB" },
                  { name: "CareSync HMS", host: "FastAPI / Render" },
                ].map((proj) => (
                  <div key={proj.name} className="border border-gold p-2">
                    <p className="label-text text-xs font-bold text-ink">{proj.name}</p>
                    <p className="label-text text-xs text-ink-faded">{proj.host}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <aside className="col-span-12 md:col-span-4 space-y-4">
            {/* Achievement counts */}
            <div className="border-newspaper p-4">
              <p className="label-text text-xs font-bold tracking-widest border-b border-ink pb-2 mb-3">
                ── CREDENTIAL INDEX ──
              </p>
              <div className="space-y-3">
                {achievements.map(({ label, count }) => (
                  <div key={label} className="flex items-center justify-between border-b border-ink border-opacity-20 pb-2">
                    <span className="body-text text-xs">{label}</span>
                    <span className="font-bold text-gold" style={{ fontFamily: "'Abril Fatface', cursive", fontSize: "1.1rem" }}>
                      {count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Credential timeline */}
            <div className="border-newspaper p-4">
              <p className="label-text text-xs font-bold tracking-widest border-b border-ink pb-2 mb-3">
                ── CREDENTIAL TIMELINE ──
              </p>
              <TimelineDot year="2024" event="LinuxWorld Informatics — System Administration & ML Internships" />
              <TimelineDot year="2025" event="Microsoft Credentials — Azure AI & Cloud Fundamentals Badges" />
              <TimelineDot year="2025" event="Industry Simulations — AWS, Deloitte, J.P. Morgan Chase Simulations" />
              <TimelineDot year="2025" event="18 Live AI Projects Deployed across GitHub, Render & Netlify" />
              <TimelineDot year="2028" event="B.Tech AIML Graduation — GLA University, Mathura" />
            </div>

            {/* Stamps */}
            <div className="flex flex-col items-center gap-3">
              <VintageStamp text="CERTIFIED" color="#c9a227" delay={0.2} />
              <VintageStamp text="MICROSOFT CERTIFIED" color="#0078d4" delay={0.5} />
              <VintageStamp text="GLA AIML 2028" color="#5c4b2d" delay={0.8} />
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
