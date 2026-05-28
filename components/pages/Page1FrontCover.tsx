"use client";

import { motion } from "framer-motion";
import Masthead from "@/components/newspaper/Masthead";
import BreakingNewsTicker from "@/components/newspaper/BreakingNewsTicker";
import VintageStamp from "@/components/newspaper/VintageStamp";
import { OrnateRule, SectionDivider } from "@/components/newspaper/Typography";

const miniStories = [
  {
    label: "STARTUPS",
    headline: "CAB-I-NET Disrupts Cab Fare Comparison with Premium AI Interface",
    teaser: "Compare Uber, Ola & Rapido in real-time. My startup goes live on Netlify.",
    url: "https://cab-i-nit-2025.netlify.app/",
  },
  {
    label: "LEGAL TECH",
    headline: "LEGALLY: Agentic AI Brings LangGraph-Powered Legal Intelligence",
    teaser: "Firebase Auth · FastAPI · Autonomous legal reasoning engine deployed.",
    url: "https://github.com/jadaunaryansingh",
  },
  {
    label: "CAREERS",
    headline: "Open To Work: Ex-LinuxWorld Engineer Seeks AI/ML Roles",
    teaser: "Available for internships and full-time AI/ML & full-stack opportunities.",
    url: "https://linkedin.com/in/jadaunaryansingh",
    isInternal: true
  },
];

function HalftonePortrait() {
  return (
    <div className="relative w-full aspect-[3/4] overflow-hidden border-2 border-ink bg-paper-dark">
      {/* Real Photo with high-contrast grayscale and vintage paper blending */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/textures/Photo.jpeg"
          alt="Aryan Singh Jadaun"
          className="w-full h-full object-cover filter grayscale contrast-[1.25] brightness-[0.9] mix-blend-multiply"
        />
      </div>

      {/* Halftone grid pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.28] pointer-events-none mix-blend-multiply" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="halftone" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.0" fill="#111" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#halftone)" />
      </svg>

      {/* Subtle vignette/shadow edge */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_15px_rgba(0,0,0,0.4)]" />

      {/* Caption bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-ink text-paper text-center py-1.5 z-10">
        <p className="label-text text-xs tracking-widest">ARYAN SINGH JADAUN · AIML ENGINEER · AGRA</p>
      </div>

      {/* Photo credit */}
      <div className="absolute top-2 left-2 rotate-90 origin-top-left z-10">
        <p className="label-text" style={{ fontSize: "0.55rem", color: "#5c4b2d" }}>
          ARCHIVE · THE DEVELOPER DAILY
        </p>
      </div>
    </div>
  );
}

export default function Page1FrontCover({ onNavigate }: { onNavigate?: (page: number) => void }) {
  return (
    <article className="newspaper-page min-h-screen paper-aged grain-overlay">
      <Masthead onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 py-4">
        <BreakingNewsTicker />

        <div className="mt-4 grid grid-cols-12 gap-4">
          {/* LEFT: Portrait + sidebar */}
          <motion.div
            className="col-span-12 md:col-span-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <HalftonePortrait />

            {/* Location / identity box */}
            <div className="mt-4 vintage-ad p-3">
              <p className="label-text text-xs text-ink-faded text-center mb-1">BUREAU OF IDENTITY</p>
              <div className="space-y-1.5 text-center">
                <p className="font-playfair font-bold text-ink text-sm">GLA University · Mathura</p>
                <p className="body-text text-xs text-ink-faded">B.Tech — AI & Machine Learning, 2028</p>
                <div className="h-px bg-ink opacity-20 my-1" />
                <p className="body-text text-xs text-ink-faded italic">
                  "Engineer. Builder. Dreamer. Rider."
                </p>
                <p className="body-text text-xs text-ink-faded">Raised in Agra · Tech-obsessed since childhood</p>
              </div>
            </div>

            <div className="flex gap-3 mt-4 flex-wrap">
              <button
                onClick={() => onNavigate?.(7)}
                className="cursor-pointer transition-transform hover:scale-105"
              >
                <VintageStamp text="OPEN TO WORK" color="#c9a227" delay={1.2} />
              </button>
              <VintageStamp text="VERIFIED" color="#111" delay={1.5} />
            </div>
          </motion.div>

          {/* RIGHT: Hero section */}
          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px flex-1 bg-ink" />
              <span className="label-text text-xs tracking-widest text-gold font-bold">
                ✦ TECHNOLOGY & AI SPECIAL EDITION ✦
              </span>
              <div className="h-px flex-1 bg-ink" />
            </div>

            <motion.h2
              className="headline-xl ink-bleed mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              ARYAN SINGH
              <br />
              BUILDS AI SYSTEMS
              <br />
              THAT THINK
            </motion.h2>

            <OrnateRule thick />

            <motion.p
              className="headline-md font-playfair font-normal italic mt-3 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              AIML Undergrad · Full-Stack Developer · AI/ML Engineer · Agentic AI Builder
            </motion.p>

            <motion.p
              className="body-text mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <span className="drop-cap">
                Based in the historic city of Agra, I am an AIML undergraduate at
                GLA University and an alumnus of LinuxWorld Informatics. Over the course of my
                academic journey, I have focused on designing and deploying AI-driven systems and
                full-stack solutions. My portfolio includes eighteen projects spanning machine
                learning models, autonomous agentic workflows, and cloud applications.
              </span>
            </motion.p>

            <motion.p
              className="body-text mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              From developing CAB-I-NET — a real-time cab fare comparison aggregator — to publishing
              peer-reviewed research on machine learning fare forecasting, I focus on building
              practical utilities that solve real-world problems. My work emphasizes robust backend
              systems, automation pipelines, and clean user experience designs.
            </motion.p>

            <OrnateRule />

            {/* Mini stories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {miniStories.map((story, i) => {
                const isInternal = story.isInternal;
                return isInternal ? (
                  <button
                    key={i}
                    onClick={() => onNavigate?.(7)}
                    className="text-left cursor-pointer w-full bg-transparent border-0 p-0"
                  >
                    <motion.div
                      className="article-card border-r border-ink last:border-0 pr-4 last:pr-0 h-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.1 + i * 0.15 }}
                    >
                      <p className="label-text text-xs text-gold font-bold mb-1">{story.label}</p>
                      <h3 className="headline-sm text-ink ink-bleed mb-2">{story.headline}</h3>
                      <p className="body-text text-xs text-ink-faded">{story.teaser}</p>
                    </motion.div>
                  </button>
                ) : (
                  <a
                    href={story.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={i}
                    className="block h-full"
                  >
                    <motion.div
                      className="article-card border-r border-ink last:border-0 pr-4 last:pr-0 h-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.1 + i * 0.15 }}
                    >
                      <p className="label-text text-xs text-gold font-bold mb-1">{story.label}</p>
                      <h3 className="headline-sm text-ink ink-bleed mb-2">{story.headline}</h3>
                      <p className="body-text text-xs text-ink-faded">{story.teaser}</p>
                    </motion.div>
                  </a>
                );
              })}
            </div>

            <SectionDivider />

            {/* Stats row */}
            <motion.div
              className="grid grid-cols-4 gap-4 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              {[
                { num: "18", label: "AI Projects" },
                { num: "11", label: "Skill Domains" },
                { num: "2028", label: "Graduating" },
                { num: "∞", label: "Ambition" },
              ].map(({ num, label }) => (
                <div key={label} className="text-center border-r border-ink last:border-0">
                  <p className="font-abril text-ink ink-bleed" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                    {num}
                  </p>
                  <p className="label-text text-xs text-ink-faded">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6">
          <OrnateRule thick />
          <div className="flex items-center gap-2 py-2">
            <span className="label-text text-xs text-gold font-bold shrink-0">TODAY IN AI:</span>
            <p className="label-text text-xs text-ink truncate">
              CAB-I-NET Reinvents Cab Fare Comparison · Travel Itinerary AI Generates Custom Tours ·
              AI Voice Authentication Secures Systems · CareSync HMS Digitizes Hospitals ·
              RAG with Groq Achieves High Speed · GLA University AIML Student Ships 18 Projects
            </p>
          </div>
          <OrnateRule thick />
        </div>
      </div>
    </article>
  );
}
