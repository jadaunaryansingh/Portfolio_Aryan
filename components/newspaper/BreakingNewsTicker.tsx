"use client";

import { motion } from "framer-motion";

const tickerItems = [
  "★ ARYAN SINGH JADAUN — AIML ENGINEER & FULL-STACK DEVELOPER FROM AGRA, INDIA",
  "★ GLA UNIVERSITY AIML UNDERGRAD SHIPS 18 LIVE AI PRODUCTS & SYSTEMS IN 2026",
  "★ CAB-I-NET REINVENTS CAB FARE COMPARISON USING REAL-TIME AI PRICE INTELLIGENCE",
  "★ VOICE BECOMES THE NEW PASSWORD: SECURE AI VOICE BIOMETRIC AUTHENTICATION SYSTEM",
  "★ CARECYNC HMS DIGITIZES HOSPITAL OPERATIONS WITH WORKFLOW AUTOMATION",
  "★ RAG MODEL POWERED BY GROQ DELIVERS HIGH-SPEED RETRIEVAL AND REASONING",
  "★ ZORVYN BACKEND INFRASTRUCTURE SCALES API ORCHESTRATION ON AWS CLOUD",
  "★ TRAVEL ITINERARY AI ENGINE GENERATES CUSTOM ASSESSMENTS & ITINERARIES FOR INDIA",
  "★ OPEN TO WORK: AI/ML ENGINEER & AGENTIC DEVELOPER SEEKING ROLES",
];

export default function BreakingNewsTicker() {
  const fullText = tickerItems.join("   ·   ");

  return (
    <div className="ticker-wrap border-t-2 border-b-2 border-ink">
      <div className="flex items-center">
        <div className="bg-ink text-paper px-3 py-1.5 shrink-0 z-10">
          <span className="label-text font-bold tracking-widest text-xs">BREAKING</span>
        </div>
        <div className="relative overflow-hidden flex-1">
          <div className="ticker-content label-text text-xs py-1.5 text-ink">
            {fullText}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{fullText}
          </div>
        </div>
      </div>
    </div>
  );
}
