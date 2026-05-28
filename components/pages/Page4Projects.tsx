"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OrnateRule, SectionDivider } from "@/components/newspaper/Typography";
import AdBlock from "@/components/newspaper/AdBlock";

const projects = [
  {
    id: "cab-i-net",
    label: "CONSUMER TECHNOLOGY",
    headline: "Startup Reinvents Cab Fare Comparison Using AI",
    subhead: "AI-powered smart cab aggregation platform comparing real-time fares",
    body: "CAB-I-NET is a real-time cab aggregator comparing Uber, Ola, and Rapido. The platform features intelligent route analysis, smart ride suggestions, Firebase Auth, Stripe/Razorpay integration, and a premium glassmorphism interface.",
    stack: ["FlutterFlow", "React", "Firebase", "Google Maps", "Razorpay", "AI"],
    live: "https://cab-i-net.netlify.app/",
    size: "large",
    column: "col-span-12 md:col-span-7",
    emoji: "🚖",
  },
  {
    id: "travel-itinerary",
    label: "CONSUMER TECHNOLOGY",
    headline: "Exploring India Through Intelligent Travel Planning",
    subhead: "AI-powered personalized travel itineraries and route optimizer",
    body: "Generates custom multi-city Indian itineraries and destination recommendations based on budget and duration, utilizing LLM generation and travel APIs inside a user-friendly Next.js dashboard.",
    stack: ["Next.js", "React", "AI APIs", "Travel APIs", "Tailwind"],
    live: "https://travelitiniarybyaryan.netlify.app/",
    size: "medium",
    column: "col-span-12 md:col-span-5",
    emoji: "🗺️",
  },
  {
    id: "voice-auth",
    label: "AI SECURITY",
    headline: "Voice Becomes The New Password",
    subhead: "AI-powered authentication system using voice biometrics",
    body: "A secure verification system verifying users based on voiceprints and speech patterns. Features advanced audio preprocessing, speaker verification, and deep learning identity matching.",
    stack: ["Python", "Machine Learning", "Speech Recognition", "Deep Learning", "FastAPI"],
    live: "https://mini-project-7k5l.onrender.com",
    size: "medium",
    column: "col-span-12 md:col-span-6",
    emoji: "🎙️",
  },
  {
    id: "jailbreak",
    label: "AI SECURITY / IEEE",
    headline: "Exploring AI Prompt Security & Jailbreak Detection",
    subhead: "Cybersecurity prompt injection and LLM vulnerability showcase",
    body: "Built for an IEEE event to demonstrate real prompt injection techniques, LLM safety loopholes, and AI jailbreak prevention strategies. Highlights robust system prompt engineering.",
    stack: ["React", "AI APIs", "Python", "Prompt Engineering", "Web Security"],
    live: "https://jailbreaking.netlify.app/",
    size: "medium",
    column: "col-span-12 md:col-span-6",
    emoji: "🔓",
  },
  {
    id: "enterprise-predictor",
    label: "ENTERPRISE AI",
    headline: "AI Predicts Enterprise Growth Before It Happens",
    subhead: "Predictive growth and revenue analytics platform",
    body: "An intelligent forecasting system designed to predict business revenue, perform risk assessment, and analyze operational growth using historical metrics and machine learning.",
    stack: ["Python", "Pandas", "Machine Learning", "Data Analytics", "FastAPI"],
    live: "https://ai-demand-inventory.onrender.com",
    size: "medium",
    column: "col-span-12 md:col-span-4",
    emoji: "📈",
  },
  {
    id: "primetrade",
    label: "FINANCIAL INTELLIGENCE",
    headline: "AI-Driven Financial Intelligence & Trading Insights",
    subhead: "Market trend monitoring and predictive analytics dashboard",
    body: "Provides real-time financial data visualization, market trend analysis, and predictive trading insights powered by custom-trained machine learning models.",
    stack: ["Python", "AI Models", "Data Analytics", "React", "Chart.js"],
    live: "https://primetradeai-5uas.onrender.com",
    size: "medium",
    column: "col-span-12 md:col-span-4",
    emoji: "💸",
  },
  {
    id: "clothing-ai",
    label: "CONSUMER AI",
    headline: "AI Personal Stylist Powered By Gemini",
    subhead: "Personalized outfit recommendation engine using Gemini AI",
    body: "Suggests clothing style combinations, trending fashion wear, and occasion-specific outfit recommendations based on user characteristics and Gemini's multimodal reasoning.",
    stack: ["Gemini AI", "React", "Python", "Recommendation Systems", "APIs"],
    live: "https://clothing-recommendation-by-aryan-powered.onrender.com",
    size: "medium",
    column: "col-span-12 md:col-span-4",
    emoji: "👕",
  },
  {
    id: "cancer-research",
    label: "MEDICAL RESEARCH",
    headline: "Enhancing Cancer Treatment Through Chemosensitisation",
    subhead: "Data analysis of drug interactions and compound effectiveness",
    body: "A scientific computing project studying chemical compounds and biological mechanisms to improve cancer cell chemosensitisation, backed by detailed data analysis and research.",
    stack: ["Research", "Data Analysis", "Scientific Computing", "Python"],
    live: "https://ml-project-final-aryan-ayush-palak.onrender.com",
    size: "medium",
    column: "col-span-12 md:col-span-6",
    emoji: "🔬",
  },
  {
    id: "brain-stroke",
    label: "HEALTHCARE AI",
    headline: "AI-Assisted Early Stroke Detection For Smarter Healthcare",
    subhead: "Predictive ML models analyzing medical risk datasets",
    body: "Identifies early warning indicators of brain strokes using patient clinical datasets. Employs machine learning algorithms to generate risk assessments and healthcare insights.",
    stack: ["Python", "Machine Learning", "Healthcare AI", "Data Analytics"],
    live: "https://bsd-system.onrender.com",
    size: "medium",
    column: "col-span-12 md:col-span-6",
    emoji: "🧠",
  },
  {
    id: "caresync-hms",
    label: "HEALTHCARE WORKFLOWS",
    headline: "Digitizing Hospital Operations With CareSync HMS",
    subhead: "Complete cloud hospital management platform and doctor portal",
    body: "CareSync streamlines modern clinic and hospital operations by organizing patient registration, doctor schedules, appointments, billing cycles, and automated healthcare notifications.",
    stack: ["React", "FastAPI", "PostgreSQL", "Cloud Infrastructure"],
    live: "https://caresync-rhnx.onrender.com",
    size: "large",
    column: "col-span-12",
    emoji: "🏥",
  },
  {
    id: "newspaper-portfolio",
    label: "CREATIVE TECH",
    headline: "Turning A Developer Portfolio Into A Living Newspaper",
    subhead: "Cinematic realistic 1930s-1940s interactive newspaper site",
    body: "Features 3D page-flip physics, paper texture shaders, vintage letterpress typography, and responsive editorial column grids. Powered by GSAP, Framer Motion, and Next.js.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "GSAP", "React PageFlip"],
    live: "https://github.com/jadaunaryansingh/Portfolio",
    size: "medium",
    column: "col-span-12 md:col-span-4",
    emoji: "📰",
  },
  {
    id: "ai-agent-arch",
    label: "AGENTIC AI",
    headline: "Building Autonomous AI Agent Ecosystems",
    subhead: "Multi-agent planning, RAG pipelines, and orchestrator",
    body: "An advanced agentic system implementing autonomous workflows, memory stores, tool-calling pipelines, and task orchestration powered by Groq's high-speed inference engine.",
    stack: ["Groq", "Appwrite", "AI Agents", "LLMs", "RAG", "LangChain"],
    live: "https://web-silk-six-36.vercel.app/",
    size: "medium",
    column: "col-span-12 md:col-span-4",
    emoji: "🤖",
  },
  {
    id: "rag-groq",
    label: "RETRIEVAL-AUGMENTED SYSTEMS",
    headline: "High-Speed Retrieval-Augmented AI Systems",
    subhead: "Lightning-fast RAG pipelines with semantic vector search",
    body: "Implements high-speed semantic document search and context-aware responses by parsing unstructured files and indexing vector embeddings, using Groq's ultra-low latency API.",
    stack: ["Groq", "LangChain", "Vector Databases", "LLMs", "Python"],
    live: "https://ragmodelpoweredbygrok-1.onrender.com",
    size: "medium",
    column: "col-span-12 md:col-span-4",
    emoji: "⚡",
  },
  {
    id: "quizmaker",
    label: "EDTECH",
    headline: "Generating Intelligent Assessments With AI",
    subhead: "Dynamic quiz maker with assessment evaluation",
    body: "Generates custom assessment sheets, evaluating questions on-the-fly and outputting analytics.",
    stack: ["React", "AI APIs", "Python", "FastAPI", "Netlify"],
    live: "https://quizmakerbyaryan.netlify.app/",
    size: "medium",
    column: "col-span-12 md:col-span-6",
    emoji: "📝",
  },
  {
    id: "zorvyn-backend",
    label: "INFRASTRUCTURE",
    headline: "Engineering The Backend Core Of Zorvyn",
    subhead: "Scalable API orchestrator, cloud security, and DB architecture",
    body: "The engine backing the Zorvyn platform. Designed with secure JWT authentication, PostgreSQL database modeling, Docker container orchestration, and high-performance FastAPI endpoints.",
    stack: ["FastAPI", "PostgreSQL", "Docker", "AWS", "Backend Architecture"],
    live: "https://zorvyn-lkz5.onrender.com",
    size: "medium",
    column: "col-span-12 md:col-span-6",
    emoji: "⚙️",
  },
  {
    id: "legally-app",
    label: "MOBILE TECH / LEGAL",
    headline: "Modern Legal Assistance Through Mobile Technology",
    subhead: "Flutter-based legal service assistance and document builder",
    body: "An interactive mobile app simplifying legal jargon, document workflows, and local attorney matching. Features a sleek, modern UI with real-time Firebase syncing.",
    stack: ["Flutter", "Firebase", "APIs", "Mobile Development", "UI/UX"],
    live: "https://legally2026.netlify.app/",
    size: "medium",
    column: "col-span-12 md:col-span-6",
    emoji: "⚖️",
  },
  {
    id: "sentiment-ai",
    label: "NATURAL LANGUAGE PROCESSING",
    headline: "Understanding Human Emotion Through AI",
    subhead: "Real-time sentiment and opinion classification model",
    body: "An NLP system analyzing textual comments, social feeds, and reviews. Classifies emotions and classifies sentiment categories utilizing machine learning classifiers.",
    stack: ["Python", "NLP", "Machine Learning", "FastAPI"],
    live: "https://sentimentanalysisbyaryan.netlify.app/",
    size: "medium",
    column: "col-span-12 md:col-span-6",
    emoji: "💬",
  },
  {
    id: "fullstack-ai",
    label: "FULL STACK AI",
    headline: "Building AI-Powered Digital Experiences",
    subhead: "Production-ready templates for generative applications",
    body: "A portfolio of full-stack templates focusing on RAG, AI automation, predictive analytics, and secure backends utilizing FastAPI, AWS, Azure, Supabase, Neon, and Docker.",
    stack: ["FastAPI", "AWS", "Azure", "Docker", "Firebase", "Neon", "Supabase", "React", "Next.js"],
    live: "https://github.com/jadaunaryansingh",
    size: "large",
    column: "col-span-12",
    emoji: "💼",
  },
];

function ProjectThumbnail({ id, size, emoji }: { id: string; size: string; emoji: string }) {
  const palettes: Record<string, [string, string]> = {
    "cab-i-net":           ["#1a1a2a", "#c9a227"],
    "travel-itinerary":    ["#2a1a1a", "#e8d5b0"],
    "voice-auth":          ["#1a2a2a", "#e8c04a"],
    "jailbreak":           ["#3a1a1a", "#e8d5b0"],
    "enterprise-predictor": ["#2a2a3a", "#f5e9d4"],
    "primetrade":          ["#1a3a2a", "#c9a227"],
    "clothing-ai":         ["#2a1a2a", "#e8d5b0"],
    "cancer-research":     ["#1a2a3a", "#e8d5b0"],
    "brain-stroke":        ["#2a2a1a", "#e8c04a"],
    "caresync-hms":        ["#1a3a2a", "#c9a227"],
    "newspaper-portfolio": ["#1a1a1a", "#f5e9d4"],
    "ai-agent-arch":       ["#2a1a3a", "#e8c04a"],
    "rag-groq":            ["#1a2a1a", "#c9a227"],
    "quizmaker":           ["#2a1a2a", "#e8d5b0"],
    "zorvyn-backend":      ["#1a1a2a", "#c9a227"],
    "legally-app":         ["#2a2a1a", "#e8c04a"],
    "sentiment-ai":        ["#1a2a2a", "#f5e9d4"],
    "fullstack-ai":        ["#1a2a1a", "#e8c04a"],
  };
  const [bg, accent] = palettes[id] || ["#1a1a1a", "#c9a227"];

  return (
    <div
      className={`relative overflow-hidden border-b border-ink ${size === "large" ? "h-44" : "h-32"}`}
      style={{ background: bg }}
    >
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`h-${id}`} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="2" fill={accent} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#h-${id})`} />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
        <span style={{ fontSize: "2.5rem" }}>{emoji}</span>
        <span style={{ fontFamily: "'Abril Fatface', cursive", color: accent, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          {id.replace(/-/g, " ")}
        </span>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className={`article-card border-2 border-ink overflow-hidden cursor-pointer hover:bg-cream hover:bg-opacity-35 transition-all duration-300 ${project.column}`}
      onClick={() => window.open(project.live, "_blank", "noopener,noreferrer")}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
    >
      <ProjectThumbnail id={project.id} size={project.size} emoji={project.emoji} />

      <div className="p-3">
        <p className="label-text text-xs text-gold font-bold mb-1">{project.label}</p>
        <h3 className="headline-md text-ink ink-bleed mb-1">{project.headline}</h3>
        <p className="font-playfair italic text-ink-faded text-sm mb-2">{project.subhead}</p>

        <div className="h-px bg-ink opacity-20 mb-2" />
        <p className="body-text text-xs text-ink-faded">{project.body}</p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-2"
            >
              <p className="body-text text-xs text-ink-faded italic">
                Every line of code in this project reflects my commitment to building
                robust digital systems that solve real-world problems.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stack + CTAs */}
        <div className="flex flex-wrap gap-1 mt-3 mb-2">
          {project.stack.map((tech) => (
            <span key={tech} className="border border-ink px-1.5 py-0.5 label-text text-xs">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            id={`project-more-${project.id}`}
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
            className="label-text text-xs font-bold text-gold border-b border-gold hover:text-ink hover:border-ink transition-colors cursor-pointer relative z-10"
          >
            {expanded ? "CLOSE ↑" : "READ MORE →"}
          </button>
          <span
            className="label-text text-xs font-bold border border-ink px-2 py-0.5 hover:bg-ink hover:text-paper transition-colors"
          >
            {project.live.includes("github.com") ? "VIEW ON GITHUB ➔" : "LIVE ↗"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Page4Projects({ onNavigate }: { onNavigate?: (page: number) => void }) {
  return (
    <article className="newspaper-page min-h-screen paper-aged grain-overlay">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="label-text text-xs text-gold font-bold tracking-widest">
            TECHNOLOGY & INNOVATION DESK · EIGHTEEN SHIPPED PROJECTS
          </span>
          <OrnateRule thick />
          <motion.h2
            className="headline-xl ink-bleed my-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Eighteen Projects That
            <br />
            Rewrite The Rules
          </motion.h2>
          <OrnateRule thick />
          <p className="label-text text-xs text-ink-faded mt-2">
            ALL PROJECTS BUILT & DEPLOYED · ARYAN SINGH JADAUN · GLA UNIVERSITY
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-4 mt-6">
          {/* Section: Consumer & Travel */}
          <div className="col-span-12">
            <SectionDivider label="CONSUMER TECHNOLOGY & TRAVEL" />
          </div>
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[1]} />

          {/* Section: AI Security & Biometrics */}
          <div className="col-span-12">
            <SectionDivider label="AI SECURITY & BIOMETRICS" />
          </div>
          <ProjectCard project={projects[2]} />
          <ProjectCard project={projects[3]} />

          <div className="col-span-12">
            <AdBlock
              title="Zorvyn Backend Infrastructure Goes Live"
              body="Aryan Singh Jadaun engineers high-speed backend systems with FastAPI, PostgreSQL, Docker and AWS. Verified performance under load."
              cta="CONTACT NOW →"
              onClick={() => onNavigate?.(7)}
              className="max-w-sm mx-auto my-2"
            />
          </div>

          {/* Section: Enterprise & Finance */}
          <div className="col-span-12">
            <SectionDivider label="ENTERPRISE ANALYTICS & FINANCE" />
          </div>
          <ProjectCard project={projects[4]} />
          <ProjectCard project={projects[5]} />
          <ProjectCard project={projects[6]} />

          {/* Section: Medical & Healthcare */}
          <div className="col-span-12">
            <SectionDivider label="MEDICAL RESEARCH & HEALTHCARE AI" />
          </div>
          <ProjectCard project={projects[7]} />
          <ProjectCard project={projects[8]} />
          <ProjectCard project={projects[9]} />

          {/* Section: Agentic AI & RAG */}
          <div className="col-span-12">
            <SectionDivider label="AGENTIC AI & RAG ARCHITECTURES" />
          </div>
          <ProjectCard project={projects[10]} />
          <ProjectCard project={projects[11]} />
          <ProjectCard project={projects[12]} />

          {/* Section: Education, Backend & Mobile */}
          <div className="col-span-12">
            <SectionDivider label="EDTECH, SYSTEM INFRASTRUCTURE & MOBILE" />
          </div>
          <ProjectCard project={projects[13]} />
          <ProjectCard project={projects[14]} />
          <ProjectCard project={projects[15]} />

          {/* Section: NLP & Collections */}
          <div className="col-span-12">
            <SectionDivider label="NATURAL LANGUAGE PROCESSING & PORTFOLIOS" />
          </div>
          <ProjectCard project={projects[16]} />
          <ProjectCard project={projects[17]} />
        </div>

        {/* GitHub link note */}
        <div className="mt-6 border-2 border-ink p-4">
          <p className="label-text text-xs font-bold text-center mb-2">── ADDITIONAL PROJECTS & SOURCE CODE ──</p>
          <p className="body-text text-xs text-ink-faded text-center">
            All repository archives, command-line scripts, database schemas, and AI workflow templates
            are documented on GitHub.
          </p>
          <div className="flex justify-center mt-2">
            <a
              href="https://github.com/jadaunaryansingh"
              target="_blank"
              rel="noopener noreferrer"
              id="github-archive-link"
              className="label-text text-xs font-bold border border-ink px-3 py-1.5 hover:bg-ink hover:text-paper transition-colors"
            >
              VIEW ALL ON GITHUB →
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
