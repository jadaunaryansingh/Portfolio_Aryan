"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OrnateRule, SectionDivider, PullQuote, DropCapParagraph } from "@/components/newspaper/Typography";
import VintageStamp from "@/components/newspaper/VintageStamp";
import AdBlock from "@/components/newspaper/AdBlock";

export default function Page5Hackathon({ onNavigate }: { onNavigate?: (page: number) => void }) {
  const [showFullPhoto, setShowFullPhoto] = useState(false);

  return (
    <article className="newspaper-page min-h-screen paper-aged grain-overlay pb-16">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Page Top Header Bar */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-between border-b border-ink pb-1 mb-2 text-xs label-text text-ink-faded">
            <span>SPECIAL EXTRA DISPATCH · SECTION D</span>
            <span className="text-gold font-bold">★ NATIONAL OPEN-INNOVATION SPRINT ★</span>
            <span>GLA UNIVERSITY, MATHURA</span>
          </div>

          <span className="label-text text-xs text-gold font-bold tracking-widest block uppercase">
            🏆 SMART INDIA HACKATHON 2026 · SOFTWARE CATEGORY CHAMPIONS 🏆
          </span>

          <OrnateRule thick />

          <motion.h2
            className="headline-xl ink-bleed my-3"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4.2rem)", lineHeight: 1.05 }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            FIRST HACKATHON. FIRST SIH.
            <br />
            AND WE WON.
          </motion.h2>

          <OrnateRule thick />

          <p className="label-text text-xs text-ink-faded mt-2 tracking-wider">
            ORGANIZED BY OFFICE OF STUDENTS' WELFARE & DEPT. OF CEA · ENDORSED BY MINISTRY OF EDUCATION & MOE'S INNOVATION CELL (GOVT. OF INDIA)
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-12 gap-6 mt-6">
          {/* Left Column: Photograph Showcase & Victory Plaque */}
          <div className="col-span-12 lg:col-span-5 space-y-4">
            {/* Vintage Photo Frame */}
            <motion.div
              className="border-4 border-ink p-2 bg-paper-dark shadow-md relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onClick={() => setShowFullPhoto(true)}
              title="Click to view full high-resolution photograph"
            >
              {/* Corner Decorative Ornaments */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-ink" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-ink" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-ink" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-ink" />

              <div className="relative aspect-[3/4] overflow-hidden border border-ink bg-[#1a1714]">
                <img
                  src="/textures/sih-winner-2026.jpg"
                  alt="Aryan Singh Jadaun holding 1st Prize Winner Cheque of ₹10,000 at SIH 2026"
                  className="w-full h-full object-cover filter contrast-[1.1] brightness-[0.98] transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle vignette border */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.4)]" />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="bg-paper text-ink px-3 py-1 text-xs label-text font-bold border border-ink shadow-sm">
                    🔍 CLICK TO EXPAND FULL PHOTOGRAPH
                  </span>
                </div>

                {/* Cheque Callout Badge */}
                <div className="absolute bottom-3 right-3 bg-ink text-paper px-3 py-1.5 border border-gold shadow-lg">
                  <span className="label-text text-xs text-gold font-bold block">1ST PRIZE · ₹ 10,000/-</span>
                </div>
              </div>

              {/* Caption Plaque */}
              <div className="mt-2.5 px-2 py-1.5 text-center border-t border-ink/40">
                <p className="font-playfair italic font-semibold text-xs text-ink leading-tight">
                  "Aryan Singh Jadaun holds the 1st Prize Winner Cheque of ₹10,000/- and SIH Championship Memento on the grand stage at GLA University."
                </p>
                <p className="label-text text-[0.65rem] text-ink-faded mt-1 tracking-widest uppercase">
                  PHOTOGRAPH ARCHIVE · CONCLAVE STAGE · SEPT 11–13, 2026
                </p>
              </div>
            </motion.div>

            {/* Official Certification Ledger */}
            <div className="border-newspaper p-4 bg-cream space-y-2.5">
              <p className="label-text text-xs font-bold text-gold text-center tracking-widest border-b border-ink pb-2">
                ★ OFFICIAL CONCLAVE CREDENTIALS ★
              </p>

              <div className="space-y-2 text-xs">
                {[
                  { label: "EVENT", val: "Internal Smart India Hackathon 2026" },
                  { label: "CATEGORY", val: "Software Category" },
                  { label: "DISTINCTION", val: "🏆 1st Prize Winner (Grand Champions)" },
                  { label: "CASH AWARD", val: "₹ 10,000/- (Ten Thousand Rupee)" },
                  { label: "DATES", val: "11th — 13th September, 2026" },
                  { label: "VENUE", val: "Auditorium, GLA University, Mathura" },
                  { label: "HOST DEPT.", val: "Office of Students' Welfare & Dept. of CEA" },
                  { label: "GOVT. PATRONS", val: "MoE's Innovation Cell (Govt. of India) & AICTE" },
                  { label: "INSTITUTION", val: "GLA University (NAAC A+ Accredited)" },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-start gap-2 border-b border-ink/10 pb-1.5 last:border-0 last:pb-0">
                    <span className="label-text text-ink-faded shrink-0 text-[0.7rem] font-bold">{row.label}</span>
                    <span className="font-semibold text-ink text-right text-[0.75rem]">{row.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vintage Stamps Row */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <VintageStamp text="1ST PRIZE WINNER" color="#c9a227" delay={0.2} />
              <VintageStamp text="SIH 2026 CHAMPION" color="#111" delay={0.4} />
              <VintageStamp text="₹10,000 CASH AWARD" color="#5c4b2d" delay={0.6} />
              <VintageStamp text="GOVT OF INDIA MoE" color="#8b263e" delay={0.8} />
            </div>
          </div>

          {/* Right Column: Editorial Chronicle & Technical Breakdown */}
          <div className="col-span-12 lg:col-span-7 space-y-4">
            {/* Lead Headline Story */}
            <div>
              <p className="label-text text-xs text-gold font-bold mb-1 tracking-wider">
                CHRONICLE OF VICTORY · DISPATCH NO. 101
              </p>
              <h3 className="headline-lg ink-bleed text-ink leading-tight mb-3">
                From First-Time Contender to Gold Laureate: The 36-Hour Sprint That Sealed the Software Championship
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs label-text text-ink-faded font-bold border-b border-ink/30 pb-2 mb-4">
                <span>BYLINE: Aryan Singh Jadaun</span>
                <span>EDITION: Internal SIH 2026</span>
                <span>STATUS: 1st Rank Awarded</span>
              </div>
            </div>

            <DropCapParagraph
              text="Entering the hackathon arena for the very first time is a test of sheer engineering resolve. At the Internal Smart India Hackathon 2026 — the university's premier open-innovation contest organized by the Office of Students' Welfare and the Department of Computer Engineering & Applications — the stakes were as high as they get. Walking in as a first-time competitor, the goal was not merely to participate, but to engineer an uncompromising, high-impact software system capable of withstanding the fiercest technical cross-examinations."
            />

            <PullQuote
              quote="My first-ever hackathon. My first SIH. And We won. 🏆"
              attribution="Aryan Singh Jadaun, SIH 2026 1st Prize Winner"
            />

            <p className="body-text text-sm leading-relaxed text-justify mb-4">
              Over three non-stop days and nights from September 11th to 13th, 2026, the team operated on pure adrenaline, meticulous architectural planning, and relentless iterations. Facing rigorous milestone evaluations by multiple jury panels — comprising veteran industry technologists, academic deans, and innovation specialists under the aegis of the Ministry of Education's Innovation Cell (MIC) and AICTE — our software category solution stood apart in code clarity, real-time performance, and sheer practical viability.
            </p>

            <div className="border-2 border-ink p-4 bg-cream">
              <p className="label-text text-xs font-bold text-center border-b border-ink pb-2 mb-3 tracking-wider">
                ── THE FOUR PILLARS OF VICTORY ──
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  {
                    title: "36-Hour Architectural Sprint",
                    desc: "Transformed high-level problem parameters into a modular, production-grade software engine under tight time limits without compromising code discipline.",
                  },
                  {
                    title: "Software Category Mastery",
                    desc: "Outperformed competitive collegiate teams across backend stability, API responsiveness, and intuitive, accessible user interface design.",
                  },
                  {
                    title: "Rigorous Jury Cross-Examination",
                    desc: "Successfully validated system scalability, security protocols, edge cases, and future deployment roadmaps through multiple rounds of demanding scrutiny.",
                  },
                  {
                    title: "₹10,000 Cash Prize & Gold Honors",
                    desc: "Conferred the 1st Prize Winner title, official cash award of ₹10,000/-, championship trophy, and recognition by university and national innovation authorities.",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    className="border border-ink p-3 bg-paper hover:bg-cream transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <h4 className="headline-sm text-ink text-xs mb-1">❖ {item.title}</h4>
                    <p className="body-text text-xs text-ink-faded">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Personal Reflection & Momentum */}
            <div>
              <SectionDivider label="THE BUILDER'S PHILOSOPHY" />
              <p className="body-text text-sm leading-relaxed text-justify mt-3 mb-4">
                This victory is not just a trophy on the shelf — it is a decisive validation of my core engineering ethos: build practical systems, ship without fear, and stay grounded in technical fundamentals. Whether designing autonomous agentic workflows, architecting cloud backends on AWS, or staying awake for 36 hours at SIH to bring a vision to life, the spirit remains unchanged.
              </p>
            </div>

            {/* Interactive Section Navigation / Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <button
                onClick={() => onNavigate?.(3)}
                className="border-2 border-ink p-3 text-left bg-paper hover:bg-ink hover:text-paper transition-all group cursor-pointer"
              >
                <span className="label-text text-[0.65rem] text-gold group-hover:text-gold font-bold block">
                  ← PREVIOUS DISPATCH
                </span>
                <p className="font-playfair font-bold text-sm text-ink group-hover:text-paper">
                  Explore 40+ Live AI Projects
                </p>
                <p className="body-text text-xs text-ink-faded group-hover:text-paper/80">
                  Inspect CAB-I-NET, KrugerX Browser, CareSync HMS & more.
                </p>
              </button>

              <button
                onClick={() => onNavigate?.(5)}
                className="border-2 border-ink p-3 text-left bg-paper hover:bg-ink hover:text-paper transition-all group cursor-pointer"
              >
                <span className="label-text text-[0.65rem] text-gold group-hover:text-gold font-bold block">
                  NEXT DISPATCH →
                </span>
                <p className="font-playfair font-bold text-sm text-ink group-hover:text-paper">
                  Read Peer-Reviewed Research Paper
                </p>
                <p className="body-text text-xs text-ink-faded group-hover:text-paper/80">
                  RidePulse: Real-Time Fare Aggregation & ML Surge on AWS.
                </p>
              </button>
            </div>

            {/* Quick Contact Ad */}
            <AdBlock
              title="Hire or Collaborate with an SIH Gold Laureate"
              body="Aryan Singh Jadaun is available for autonomous AI, full-stack systems, and fast-paced engineering teams that value high output and proven grit."
              cta="CONNECT WITH ARYAN →"
              onClick={() => onNavigate?.(10)}
            />
          </div>
        </div>

        {/* Page Footer Rule */}
        <div className="mt-8">
          <OrnateRule thick />
          <div className="flex flex-wrap items-center justify-between gap-2 py-2 text-xs label-text text-ink-faded">
            <span>THE DEVELOPER DAILY · SPECIAL EXTRA EDITION</span>
            <span className="text-gold font-bold">SMART INDIA HACKATHON 2026 GRAND REPERTOIRE</span>
            <span>PAGE 05 OF 11</span>
          </div>
          <OrnateRule thick />
        </div>
      </div>

      {/* High-Resolution Photo Modal */}
      <AnimatePresence>
        {showFullPhoto && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFullPhoto(false)}
          >
            <motion.div
              className="relative max-w-2xl w-full bg-paper border-4 border-ink p-3 shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b-2 border-ink pb-2 mb-2">
                <span className="label-text text-xs font-bold text-gold">
                  ★ SIH 2026 CONCLAVE ARCHIVE PHOTOGRAPH ★
                </span>
                <button
                  onClick={() => setShowFullPhoto(false)}
                  className="bg-ink text-paper px-2.5 py-1 text-xs label-text font-bold hover:bg-brown cursor-pointer"
                >
                  CLOSE [✕]
                </button>
              </div>

              <div className="max-h-[75vh] overflow-hidden border border-ink flex items-center justify-center bg-black">
                <img
                  src="/sih-winner-2026.jpg"
                  alt="Aryan Singh Jadaun - SIH 2026 Winner"
                  className="max-h-[72vh] w-auto object-contain"
                />
              </div>

              <div className="mt-2 text-center text-xs">
                <p className="font-playfair font-bold text-ink">
                  Internal Smart India Hackathon 2026 · Software Category 1st Prize Winner
                </p>
                <p className="label-text text-[0.7rem] text-ink-faded mt-0.5">
                  Aryan Singh Jadaun presenting the ₹10,000/- Winner Cheque with Trophy at GLA University Auditorium.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
