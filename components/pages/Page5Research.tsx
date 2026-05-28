"use client";

import { motion } from "framer-motion";
import { OrnateRule, SectionDivider, PullQuote, DropCapParagraph } from "@/components/newspaper/Typography";
import VintageStamp from "@/components/newspaper/VintageStamp";

export default function Page5Research({ onNavigate }: { onNavigate?: (page: number) => void }) {
  return (
    <article className="newspaper-page min-h-screen paper-aged grain-overlay">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Page Header */}
        <div className="text-center mb-4">
          <span className="label-text text-xs text-gold font-bold tracking-widest">
            SCIENTIFIC INQUIRY & ACADEMIC PUBLICATION · SECTION B
          </span>
          <OrnateRule thick />
          <motion.h2
            className="headline-xl ink-bleed my-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Scientific Breakthrough
            <br />
            In Urban Mobility
          </motion.h2>
          <OrnateRule thick />
          <p className="label-text text-xs text-ink-faded mt-2">
            PUBLISHED IN: INTERNATIONAL JOURNAL OF RECENT RESEARCH AND REVIEW (IJRRR) · SPECIAL ISSUE-2 · 2025
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-6">
          {/* Left Column: Abstract & Overview */}
          <div className="col-span-12 md:col-span-7 space-y-4">
            <div>
              <p className="label-text text-xs text-gold font-bold mb-1">OFFICIAL PUBLICATION METADATA</p>
              <h3 className="headline-lg ink-bleed text-ink leading-tight mb-2">
                RIDEPULSE: A Unified Platform for Real-Time Ride-Hailing Fare Aggregation and Surge Forecasting
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs label-text text-ink-faded font-bold border-b border-ink border-opacity-20 pb-2 mb-3">
                <span>AUTHORS: Vimal Daga · Preeti Daga · Aryan Singh</span>
                <span>ISSN: 2277-8322</span>
                <span>PAPER NO: 31</span>
              </div>
            </div>

            <DropCapParagraph
              text="Urban commuters face significant friction due to dynamic surge pricing models utilized by fragmented ride-hailing networks. With fares fluctuating up to 200% between services like Uber, Ola, Rapido, inDrive, and Namma Yatri, commuters are forced to perform time-consuming manual checks. This research introduces RidePulse, an autonomous, cloud-native system designed to aggregate real-time rideshare fare data and predict upcoming surges using machine learning, hosted on high-performance AWS infrastructure."
            />

            <PullQuote
              quote="By combining ethical API scraping pipelines with Random Forest regression models on AWS, RidePulse solves the fragmentation dilemma, achieving sub-second comparisons and 92% surge forecasting accuracy."
              attribution="IJRRR Journal Review Board, 2025"
            />

            <div className="border-2 border-ink p-4 bg-cream">
              <p className="label-text text-xs font-bold text-center border-b border-ink pb-2 mb-3">
                ── RESEARCH PAPER ABSTRACT ──
              </p>
              <p className="body-text text-xs text-ink-faded leading-relaxed text-justify">
                This paper proposes a centralized framework, RidePulse, which addresses ride-hailing data fragmentation by employing a hybrid collection strategy consisting of API integration and ethical web-scraping pipelines. Operating within an AWS-based microservices architecture, the platform consolidates fare, arrival time, and route options into a single user interface. A predictive engine powered by machine learning analyzes temporal trends, weather, and traffic data to forecast upcoming surge patterns. The system empowers commuters with cost-effective options, helps reduce travel expenditure, and establishes a foundation for future Mobility-as-a-Service (MaaS) deployments in smart cities.
              </p>
            </div>

            {/* Core Contributions */}
            <div>
              <SectionDivider label="KEY RESEARCH CONTRIBUTIONS" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                {[
                  {
                    title: "Unified Consolidation",
                    desc: "Centralized interface collating dynamic fare metrics, ETA, and availability across five major services (Uber, Ola, Rapido, inDrive, Namma Yatri).",
                  },
                  {
                    title: "Ethical Data Pipelines",
                    desc: "A hybrid ingestion pipeline combining API endpoints and ethical web-scraping agents configured with request throttling to prevent rate limits.",
                  },
                  {
                    title: "ML Surge Forecasting",
                    desc: "Random Forest and XGBoost regression models trained on historical routes, temporal cycles, weather feeds, and traffic conditions.",
                  },
                  {
                    title: "Cloud Microservices",
                    desc: "A modular AWS backend using API Gateway, EC2 compute nodes for scraping, S3 storage, and serverless Lambda functions for forecasting.",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    className="border border-ink p-3 hover:bg-cream transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <h4 className="headline-sm text-ink text-xs mb-1">✦ {item.title}</h4>
                    <p className="body-text text-xs text-ink-faded">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Blueprint & Publication links */}
          <aside className="col-span-12 md:col-span-5 space-y-4">
            {/* Download Link Block */}
            <div className="border-newspaper-thick p-4 text-center bg-cream">
              <p className="label-text text-xs font-bold text-gold mb-2">★ NOW AVAILABLE WORLDWIDE ★</p>
              <h4 className="font-playfair font-bold text-ink text-sm mb-3">
                Read the Published Manuscript
              </h4>
              <p className="body-text text-xs text-ink-faded mb-4">
                The full PDF paper is indexed in the official IJRRR library, detailing mathematical formulations, data pre-processing, and performance evaluations.
              </p>
              <motion.a
                href="https://www.ijrrr.com/specialissues2-2025/ijrrr-Special-Issue-2-2025-paper31.pdf"
                target="_blank"
                rel="noopener noreferrer"
                id="research-paper-pdf-link"
                className="block bg-ink text-paper py-3 label-text text-xs font-bold hover:bg-gold hover:text-ink transition-colors border-2 border-ink cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                📖 OPEN FULL PDF PAPER ↗
              </motion.a>
              <p className="label-text text-[0.6rem] text-ink-faded mt-2">
                HOSTED AT IJRRR.COM · SPECIAL ISSUE-2 · PAPER 31
              </p>
            </div>

            {/* Architecture blueprint */}
            <div className="border-newspaper p-4">
              <p className="label-text text-xs font-bold tracking-widest border-b border-ink pb-2 mb-3">
                ── SYSTEM ARCHITECTURE BLUEPRINT ──
              </p>
              
              {/* SVG Blueprint Schema */}
              <div className="relative w-full aspect-[4/3] overflow-hidden border border-ink bg-[#1e2530] text-[#8fa0b5] font-mono p-1">
                {/* Blueprint Grid background pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="blueprint-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#fff" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
                </svg>

                <svg viewBox="0 0 320 240" className="absolute inset-0 w-full h-full p-2 select-none">
                  {/* Schematic Title */}
                  <text x="160" y="15" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold" opacity="0.8">
                    AWS MICROSERVICES SCHEMA (RIDEPULSE)
                  </text>
                  
                  {/* Client nodes */}
                  <rect x="10" y="40" width="60" height="30" fill="none" stroke="#8fa0b5" strokeWidth="1.5" strokeDasharray="2,2" />
                  <text x="40" y="52" textAnchor="middle" fill="#8fa0b5" fontSize="7" fontWeight="bold">USER CLIENT</text>
                  <text x="40" y="62" textAnchor="middle" fill="#8fa0b5" fontSize="5">Web / Mobile</text>

                  {/* API Gateway */}
                  <rect x="100" y="40" width="70" height="30" fill="none" stroke="#e8c04a" strokeWidth="1.5" />
                  <text x="135" y="52" textAnchor="middle" fill="#e8c04a" fontSize="7" fontWeight="bold">API GATEWAY</text>
                  <text x="135" y="62" textAnchor="middle" fill="#e8c04a" fontSize="5">AWS EC2 / FastAPI</text>

                  {/* Connector Clients -> Gateway */}
                  <path d="M 70 55 L 100 55" fill="none" stroke="#8fa0b5" strokeWidth="1" markerEnd="url(#arrow)" />
                  <circle cx="85" cy="55" r="2" fill="#8fa0b5" />

                  {/* Aggregator Service */}
                  <rect x="35" y="110" width="90" height="40" fill="none" stroke="#fff" strokeWidth="1.5" />
                  <text x="80" y="123" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="bold">FARE AGGREGATOR</text>
                  <text x="80" y="133" textAnchor="middle" fill="#8fa0b5" fontSize="5">Ethical Scrapers & API</text>
                  <text x="80" y="141" textAnchor="middle" fill="#8fa0b5" fontSize="5">Interceptors (Python)</text>

                  {/* ML forecasting engine */}
                  <rect x="165" y="110" width="90" height="40" fill="none" stroke="#e8c04a" strokeWidth="1.5" />
                  <text x="210" y="123" textAnchor="middle" fill="#e8c04a" fontSize="7" fontWeight="bold">SURGE FORECASTER</text>
                  <text x="210" y="133" textAnchor="middle" fill="#8fa0b5" fontSize="5">ML Regressor (Python)</text>
                  <text x="210" y="141" textAnchor="middle" fill="#8fa0b5" fontSize="5">AWS S3 / Lambda</text>

                  {/* Connections from Gateway to Services */}
                  <path d="M 135 70 L 135 90 L 80 90 L 80 110" fill="none" stroke="#8fa0b5" strokeWidth="1" />
                  <path d="M 135 70 L 135 90 L 210 90 L 210 110" fill="none" stroke="#e8c04a" strokeWidth="1" />

                  {/* Database / Storage logs */}
                  <path d="M 270 170 C 270 160, 310 160, 310 170 L 310 195 C 310 205, 270 205, 270 195 Z" fill="none" stroke="#8fa0b5" strokeWidth="1" />
                  <text x="290" y="185" textAnchor="middle" fill="#8fa0b5" fontSize="5" fontWeight="bold">AWS S3</text>
                  <text x="290" y="192" textAnchor="middle" fill="#8fa0b5" fontSize="4">Historical Log</text>

                  {/* Dynamic rideshare platforms */}
                  <rect x="25" y="185" width="200" height="35" fill="none" stroke="#8fa0b5" strokeWidth="1" strokeDasharray="3,3" />
                  <text x="125" y="195" textAnchor="middle" fill="#8fa0b5" fontSize="6" fontWeight="bold">EXTERNAL RIDE-HAILING APIS</text>
                  <text x="125" y="206" textAnchor="middle" fill="#8fa0b5" fontSize="5" opacity="0.7">Uber · Ola · Rapido · inDrive · Namo Yatri</text>

                  {/* Connection from Services to APIs */}
                  <path d="M 80 150 L 80 185" fill="none" stroke="#fff" strokeWidth="1" />
                  <path d="M 210 150 L 210 185" fill="none" stroke="#e8c04a" strokeWidth="1" />
                  
                  {/* Connection Surger to S3 DB */}
                  <path d="M 255 130 L 290 130 L 290 160" fill="none" stroke="#8fa0b5" strokeWidth="1" strokeDasharray="2,2" />

                  {/* Marker definitions */}
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 2 L 10 5 L 0 8 z" fill="#8fa0b5" />
                    </marker>
                  </defs>
                </svg>
              </div>
              <p className="label-text text-[0.6rem] text-ink-faded mt-2 text-center">
                FIG 1.0: CLOUD PIPELINE & MACHINE LEARNING INGESTION ARCHITECTURE
              </p>
            </div>

            {/* Methodology index */}
            <div className="border-newspaper p-4">
              <p className="label-text text-xs font-bold tracking-widest border-b border-ink pb-2 mb-3">
                ── STUDY METRICS ──
              </p>
              <div className="space-y-2.5">
                {[
                  { metric: "Dynamic Surge Predictor Accuracy", val: "92.4%" },
                  { metric: "Consolidated API Response Time", val: "<0.8s" },
                  { metric: "Historical Ingestion Volume", val: "10k+ rides" },
                  { metric: "Aggregated Providers", val: "5 Services" },
                  { metric: "AWS Microservices Active", val: "4 Services" },
                ].map((item) => (
                  <div key={item.metric} className="flex justify-between items-baseline gap-2 border-b border-ink border-opacity-10 pb-1.5 last:border-0 last:pb-0">
                    <span className="body-text text-xs text-ink-faded">{item.metric}</span>
                    <span className="font-bold text-gold" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}>{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stamps */}
            <div className="flex flex-col items-center gap-3">
              <VintageStamp text="PEER REVIEWED" color="#c9a227" delay={0.2} />
              <VintageStamp text="AWS INFRASTRUCTURE" color="#111" delay={0.5} />
              <VintageStamp text="IJRRR INDEXED" color="#5c4b2d" delay={0.8} />
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
