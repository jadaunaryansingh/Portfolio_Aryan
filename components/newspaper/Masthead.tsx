"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const sections = [
  "Cover",
  "About",
  "Experience",
  "Projects",
  "Research",
  "Certifications",
  "Skills",
  "Contact"
];

const sectionMapping: Record<string, number> = {
  "cover": 0,
  "about": 1,
  "experience": 2,
  "projects": 3,
  "research": 4,
  "certifications": 5,
  "skills": 6,
  "contact": 7,
};

export default function Masthead({ onNavigate }: { onNavigate?: (page: number) => void }) {
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const now = new Date();
    setDateStr(
      now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  return (
    <header className="w-full border-b-4 border-ink pb-2">
      {/* Top info bar */}
      <div className="flex items-center justify-between px-4 py-1 border-b border-ink">
        <span className="label-text text-ink-faded">Est. MMXXIII · Vol. III · No. 42</span>
        <span className="label-text text-ink-faded">{dateStr}</span>
        <span className="label-text text-ink-faded">Price: Your Attention</span>
      </div>

      {/* Main masthead title */}
      <div className="text-center py-4 px-4 relative">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex-1 h-px bg-ink" />
          <span className="label-text text-xs tracking-widest">★ PREMIUM EDITION ★</span>
          <div className="flex-1 h-px bg-ink" />
        </div>

        <motion.h1
          className="masthead-title ink-bleed"
          style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", lineHeight: 1 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          The Developer Daily
        </motion.h1>

        <p className="label-text text-ink-faded mt-1 tracking-widest">
          "All The Code That's Fit To Print"
        </p>

        <div className="flex items-center gap-3 mt-2">
          <div className="flex-1 h-0.5 bg-ink" />
          <span className="text-gold text-lg">❖</span>
          <div className="flex-1 h-0.5 bg-ink" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex overflow-x-auto md:justify-center border-t border-b border-ink whitespace-nowrap scrollbar-none">
        {sections.map((section, i) => (
          <span key={section} className="flex items-center shrink-0">
            <button
              onClick={() => onNavigate?.(sectionMapping[section.toLowerCase()] ?? 0)}
              className="label-text px-4 py-2 hover:bg-ink hover:text-paper transition-colors duration-200 cursor-pointer"
              id={`nav-${section.toLowerCase()}`}
            >
              {section}
            </button>
            {i < sections.length - 1 && (
              <span className="text-ink-faded text-xs select-none">|</span>
            )}
          </span>
        ))}
      </nav>
    </header>
  );
}
