"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OrnateRule, SectionDivider } from "@/components/newspaper/Typography";
import VintageStamp from "@/components/newspaper/VintageStamp";
import AdBlock from "@/components/newspaper/AdBlock";

const contactItems = [
  {
    id: "email",
    type: "ELECTRONIC MAIL",
    label: "Email",
    value: "aryansinghjadaun@gmail.com",
    description: "Fastest method of correspondence. Replies within 24 hours, guaranteed.",
    icon: "✉",
    href: "mailto:aryansinghjadaun@gmail.com",
    copyValue: "aryansinghjadaun@gmail.com",
  },
  {
    id: "github",
    type: "CODE REPOSITORY",
    label: "GitHub",
    value: "github.com/jadaunaryansingh",
    description: "Browse 18 deployed projects, live AI systems, and open-source work.",
    icon: "◈",
    href: "https://github.com/jadaunaryansingh",
    copyValue: "https://github.com/jadaunaryansingh",
  },
  {
    id: "linkedin",
    type: "PROFESSIONAL NETWORK",
    label: "LinkedIn",
    value: "linkedin.com/in/jadaunaryansingh",
    description: "Professional profile, endorsements, LinuxWorld experience & GLA University.",
    icon: "◉",
    href: "https://www.linkedin.com/in/aryan-singh-jadaun",
    copyValue: "https://linkedin.com/in/jadaunaryansingh",
  },
  {
    id: "whatsapp",
    type: "INSTANT MESSENGER",
    label: "WhatsApp",
    value: "+91 98370 39028",
    description: "Direct chat available Monday–Friday, 10am–9pm IST. Quick responses.",
    icon: "☎",
    href: "https://wa.me/919837039028",
    copyValue: "+919837039028",
  },
];

const fakeAds = [
  {
    title: "AIML ENGINEER — URGENTLY WANTED",
    body: "Growing AI startup seeks LangGraph expert and full-stack builder. Must have: Flask, Docker, AWS, LLMs. Aryan Singh Jadaun is highly recommended by LinuxWorld Informatics.",
    cta: "APPLY NOW",
  },
  {
    title: "Full-Stack Developer — PREMIUM ROLE",
    body: "Fintech platform requires React + Python + Firebase expert. 18 live projects preferred. GLA University AIML candidates strongly encouraged to apply.",
    cta: "CONTACT US",
  },
  {
    title: "AI Consulting — OPEN FOR PROJECTS",
    body: "Need a RAG pipeline, Agentic AI system, or ML model? Aryan builds production-grade AI. LangGraph · Gemini · FastAPI. Results in weeks.",
    cta: "INQUIRE TODAY",
  },
];

function AnimatedSignature() {
  return (
    <motion.div className="mt-3">
      <motion.svg viewBox="0 0 300 60" className="w-56 h-12">
        <motion.text
          x="8" y="45"
          style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "26px", fill: "#111" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Aryan Singh Jadaun
        </motion.text>
        <motion.line
          x1="8" y1="52" x2="292" y2="52"
          stroke="#111" strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
        />
      </motion.svg>
      <p className="label-text text-xs text-ink-faded mt-1">AIML Engineer · GLA University, Mathura</p>
    </motion.div>
  );
}

export default function Page8Contact({ onNavigate }: { onNavigate?: (page: number) => void }) {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (value: string, id: string) => {
    navigator.clipboard.writeText(value).catch(() => {});
    setCopied(id);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <article className="newspaper-page min-h-screen paper-aged grain-overlay">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="label-text text-xs text-gold font-bold tracking-widest">
            CLASSIFIEDS & ANNOUNCEMENTS · FINAL EDITION
          </span>
          <OrnateRule thick />
          <motion.h2
            className="headline-xl ink-bleed my-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Classifieds &<br />Correspondence
          </motion.h2>
          <OrnateRule thick />
          <p className="label-text text-xs text-ink-faded mt-2">
            FOR PLACEMENT, COLLABORATION & GENERAL ENQUIRIES — AGRA BUREAU
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-6">
          {/* Main classified section */}
          <div className="col-span-12 md:col-span-8">
            {/* Featured announcement banner */}
            <motion.div
              className="bg-ink text-paper p-6 mb-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-3 border border-gold opacity-40 pointer-events-none" />
              <p className="label-text text-xs text-gold font-bold tracking-widest mb-2">
                ★ FEATURED ANNOUNCEMENT ★
              </p>
              <h3
                className="ink-bleed mb-3"
                style={{ fontFamily: "'Abril Fatface', cursive", fontSize: "clamp(1.3rem, 3vw, 1.8rem)", color: "#f5e9d4", lineHeight: 1.15 }}
              >
                AIML Engineer Seeks Opportunities in AI/ML, Full-Stack & Agentic AI Development
              </h3>
              <p className="body-text text-sm mb-4" style={{ color: "#d4bc8a" }}>
                Aryan Singh Jadaun — GLA University AIML undergraduate, LinuxWorld Informatics
                alumnus, and builder of 18 live AI products — is actively seeking internships and
                full-time roles in AI/ML Engineering, Full-Stack Development, and Agentic AI.
                Immediately available. Based in Agra; open to remote and relocation.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://drive.google.com/file/d/19ZoiBLyYThKkgC_hwxmSNl2dKR1TsGR5/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="download-resume"
                  className="inline-block border-2 border-gold text-gold px-4 py-2 label-text text-xs font-bold hover:bg-gold hover:text-ink transition-colors"
                >
                  ⬇ DOWNLOAD RÉSUMÉ
                </a>
                <a
                  href="mailto:aryansinghjadaun@gmail.com"
                  id="email-cta"
                  className="inline-block border-2 border-paper text-paper px-4 py-2 label-text text-xs font-bold hover:bg-paper hover:text-ink transition-colors"
                >
                  ✉ SEND EMAIL
                </a>
                <a
                  href="https://wa.me/919837039028"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="whatsapp-cta"
                  className="inline-block border-2 border-green-400 text-green-400 px-4 py-2 label-text text-xs font-bold hover:bg-green-400 hover:text-ink transition-colors"
                >
                  ✆ WHATSAPP
                </a>
              </div>
            </motion.div>

            {/* Contact classified cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  className="vintage-ad cursor-pointer"
                  id={`contact-${item.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl text-ink opacity-60 shrink-0">{item.icon}</span>
                      <div className="flex-1">
                        <p className="label-text text-xs font-bold text-gold tracking-widest mb-1">
                          {item.type}
                        </p>
                        <p className="headline-sm text-ink mb-1 break-all text-xs">{item.value}</p>
                        <p className="body-text text-xs text-ink-faded">{item.description}</p>
                      </div>
                    </div>
                  </a>
                  <button
                    onClick={() => copyToClipboard(item.copyValue, item.id)}
                    className="mt-2 label-text text-xs text-ink-faded border-t border-ink border-opacity-20 pt-1.5 w-full text-left hover:text-gold transition-colors"
                  >
                    {copied === item.id ? "✓ COPIED!" : "⊕ COPY TO CLIPBOARD"}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Fake retro ads */}
            <SectionDivider label="CLASSIFIED ADVERTISEMENTS" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {fakeAds.map((ad, i) => (
                <AdBlock
                  key={i}
                  title={ad.title}
                  body={ad.body}
                  cta={ad.cta}
                  onClick={() => {
                    if (ad.cta === "APPLY NOW" || ad.cta === "CONTACT US" || ad.cta === "INQUIRE TODAY") {
                      window.open("mailto:aryansinghjadaun@gmail.com");
                    }
                  }}
                  className="h-full"
                />
              ))}
            </div>
          </div>

          {/* Right sidebar */}
          <aside className="col-span-12 md:col-span-4 space-y-4">
            {/* Real QR Code */}
            <div className="border-newspaper p-4 text-center">
              <p className="label-text text-xs font-bold tracking-widest border-b border-ink pb-2 mb-3">
                ── SCAN TO CONNECT ──
              </p>
              <div className="w-28 mx-auto mb-2 border-2 border-ink p-1 bg-white">
                <img
                  src="/textures/qrcode.png"
                  alt="Scan to Connect QR Code"
                  className="w-full h-auto object-contain filter contrast-[1.1] grayscale"
                />
              </div>
              <p className="label-text text-xs text-ink-faded">Scan to visit portfolio</p>
            </div>

            {/* Bureau location */}
            <div className="border-newspaper p-4">
              <p className="label-text text-xs font-bold tracking-widest border-b border-ink pb-2 mb-3">
                ── BUREAU LOCATION ──
              </p>
              <p className="font-playfair font-bold text-ink text-sm">Agra, Uttar Pradesh</p>
              <p className="body-text text-xs text-ink-faded">India · Open to Remote · Open to Relocation</p>
              <div className="mt-2 pt-2 border-t border-ink border-opacity-20 space-y-1">
                <p className="body-text text-xs text-ink-faded">📍 GLA University, Mathura</p>
                <p className="body-text text-xs text-ink-faded">🏛 St. Peter's & RCS Memorial School</p>
                <p className="body-text text-xs text-ink-faded">💼 Ex-LinuxWorld Informatics</p>
              </div>
            </div>

            {/* Signature */}
            <div className="border-newspaper p-4">
              <p className="label-text text-xs font-bold tracking-widest border-b border-ink pb-2 mb-3">
                ── AUTHENTICATED BY ──
              </p>
              <AnimatedSignature />
            </div>

            {/* Stamps */}
            <div className="flex flex-col items-center gap-3">
              <VintageStamp text="AVAILABLE NOW" color="#c9a227" delay={0.2} />
              <VintageStamp text="HIRE ME" color="#111" delay={0.5} />
            </div>

            {/* Social links */}
            <div className="border-newspaper p-4">
              <p className="label-text text-xs font-bold tracking-widest border-b border-ink pb-2 mb-3">
                ── SOCIAL BUREAU ──
              </p>
              {[
                { label: "GitHub", handle: "@jadaunaryansingh", href: "https://github.com/jadaunaryansingh", id: "social-github" },
                { label: "LinkedIn", handle: "jadaunaryansingh", href: "https://linkedin.com/in/jadaunaryansingh", id: "social-linkedin" },
                { label: "Email", handle: "aryansinghjadaun@gmail.com", href: "mailto:aryansinghjadaun@gmail.com", id: "social-email" },
                { label: "WhatsApp", handle: "+91 98370 39028", href: "https://wa.me/919837039028", id: "social-whatsapp" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={social.id}
                  className="flex items-center justify-between py-2 border-b border-ink border-opacity-10 last:border-0 hover:text-gold transition-colors"
                >
                  <span className="label-text text-xs font-bold">{social.label}</span>
                  <span className="body-text text-xs text-ink-faded truncate max-w-[55%] text-right">{social.handle}</span>
                </a>
              ))}
            </div>

            {/* Resume CTA sidebar */}
            <div className="border-2 border-gold p-4 text-center">
              <p className="label-text text-xs font-bold text-gold mb-2">── RÉSUMÉ ──</p>
              <a
                href="https://drive.google.com/file/d/19ZoiBLyYThKkgC_hwxmSNl2dKR1TsGR5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                id="resume-sidebar-link"
                className="block bg-ink text-paper px-3 py-3 label-text text-xs font-bold hover:bg-brown transition-colors"
              >
                ⬇ DOWNLOAD RÉSUMÉ
              </a>
              <p className="label-text text-xs text-ink-faded mt-2">Google Drive · Always Up To Date</p>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center border-t-4 border-ink pt-4">
          <OrnateRule />
          <p className="font-abril text-ink ink-bleed mt-2" style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)" }}>
            The Developer Daily · Est. MMXXIV
          </p>
          <p className="label-text text-xs text-ink-faded mt-1">
            "All The Code That's Fit To Print" · Aryan Singh Jadaun · Agra, India · GLA University AIML
          </p>
          <OrnateRule />
        </div>
      </div>
    </article>
  );
}
