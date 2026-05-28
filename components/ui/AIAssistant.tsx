"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const knowledgeBase: Record<string, string> = {
  "who are you": "Good day! I am the AI Correspondent for The Developer Daily. I report exclusively on Aryan Singh Jadaun — AIML Engineer, Full-Stack Developer, and startup founder from Agra, India.",
  "aryan": "Aryan Singh Jadaun is an AIML undergraduate at GLA University (graduating 2028), a LinuxWorld Informatics alumnus, and the builder of 18 live AI products and digital systems. He is from Agra, UP — tech-obsessed since childhood. Engineer. Builder. Dreamer. Rider.",
  "education": "Aryan studies B.Tech in Artificial Intelligence & Machine Learning at GLA University, Mathura (expected graduation: 2028). He completed high school at St. Peter's College, Agra (2021) and matriculated at RCS Memorial Sr. Secondary School, Agra (2023).",
  "experience": "Aryan interned at LinuxWorld Informatics, where he worked on Autonomous Systems, Agentic AI, ML/DL, and cloud technologies. He also leads E-Cell (entrepreneurship club) at GLA University.",
  "projects": "Aryan has built 18 unique projects: 🚖 CAB-I-NET (Cab aggregator), 🗺️ Travel Itinerary AI, 🎙️ Voice Authentication, 🔓 Jailbreak Web App, 📈 Enterprise Predictor, 💸 PrimeTrade AI, 👕 Clothing Recommendation, 🔬 Cancer Research, 🧠 Brain Stroke Detection, 🏥 CareSync HMS, 📰 Living Newspaper Portfolio, 🤖 AI Agent Architecture, ⚡ Groq RAG Model, 📝 QuizMaker AI, ⚙️ Zorvyn Backend, ⚖️ Legally Flutter App, 💬 Sentiment Analysis, and 💼 Full Stack AI Collections.",
  "cab-i-net": "CAB-I-NET is Aryan's smart cab fare comparison aggregator. It compares fares from Uber, Ola, and Rapido in real-time. Live at cab-i-nit-2025.netlify.app",
  "travel": "The Travel Itinerary AI platform generates personalized travel plans and optimized routes for tourists exploring India. Built with Next.js and AI APIs.",
  "voice": "The AI Voice Authentication System verifies user identities based on voice biometrics, speech patterns, and deep learning models. Built with Python and FastAPI.",
  "enterprise": "The Enterprise Growth Predictor forecasts company revenue, performs risk analysis, and visualizes performance trends using ML and Pandas.",
  "caresync": "CareSync HMS is an intelligent hospital management system that digitizes clinic workflows, appointments, doctor dashboards, and billing using React and FastAPI.",
  "rag": "The Groq RAG system implements high-speed semantic document retrieval pipelines and context-aware responses using LangChain and Vector Databases.",
  "zorvyn": "Zorvyn Backend is a secure, scalable backend core featuring REST APIs, JWT authentication, PostgreSQL, and Docker containerization deployed on AWS.",
  "jailbreak": "The Jailbreak Web App is a security platform built for an IEEE event demonstrating prompt injection simulation, LLM vulnerabilities, and defense strategies.",
  "skills": "Aryan has 11 skill domains: ML/DL/NLP/CV, Full-Stack Dev (React, Python, FastAPI), DevOps (CI/CD, Jenkins, Docker), AWS Cloud (EC2, S3, Lambda), Automation/Scripting, Database Management, Prompt Engineering, Linux, Version Control, API Integration, and UI/UX Design.",
  "contact": "Reach Aryan at: Email — aryansinghjadaun@gmail.com | GitHub — github.com/jadaunaryansingh | LinkedIn — linkedin.com/in/jadaunaryansingh | WhatsApp — +91 98370 39028. Resume on Google Drive.",
  "resume": "Aryan's resume is available at: https://drive.google.com/file/d/19ZoiBLyYThKkgC_hwxmSNl2dKR1TsGR5/view — Updated and current.",
  "github": "Aryan's GitHub: github.com/jadaunaryansingh — Find Zorvyn Backend, CareSync, CAB-I-NET, Voice Auth, and 14 other projects.",
  "python": "Python is Aryan's primary language — used across all 18 projects. He specialises in FastAPI, Flask, Streamlit, Pandas, LangChain, PyTorch, and Scikit-Learn.",
  "ai": "Aryan's AI expertise spans: LLMs & Prompt Engineering, LangGraph Agentic Pipelines, Groq RAG systems, Speech Recognition, NLP, and medical healthcare AI modeling.",
  "linuxworld": "LinuxWorld Informatics was Aryan's internship — focused on Autonomous Systems, Agentic AI, ML/DL, cloud technologies, and Linux system administration. He earned 3 certifications there.",
  "agra": "Aryan is from Agra, Uttar Pradesh — the city of the Taj Mahal. He attended St. Peter's College there before moving to GLA University in Mathura for his AIML degree.",
  "default": "A most intriguing question! I can tell you about Aryan's 18 projects (like CAB-I-NET, Voice Auth, CareSync HMS, Zorvyn, Groq RAG), skills, education, or contact details.",
};

function getResponse(query: string): string {
  const lower = query.toLowerCase();
  for (const [key, response] of Object.entries(knowledgeBase)) {
    if (key !== "default" && lower.includes(key)) return response;
  }
  return knowledgeBase["default"];
}

const systemInstruction = `You are the AI Correspondent for "The Developer Daily", a cinematic 1930s-1940s style portfolio newspaper. Your job is to answer questions about Aryan Singh Jadaun — an AIML Engineer, Full-Stack Developer, and startup founder from Agra, India.
Respond in a helpful, polite, and slightly journalistic vintage tone. Keep your responses concise (2-4 sentences max) as they are displayed in a small chat widget.

Here is the official fact sheet about Aryan Singh Jadaun:
- Name: Aryan Singh Jadaun (AIML Engineer & Builder)
- Location: Agra, Uttar Pradesh, India.
- Schooling: High School at St. Peter's College, Agra (2011 - 2021, completed 10th grade in 2021); Matriculated at RCS Memorial Sr. Secondary School, Agra (2021 - 2023, completed 11th & 12th grade in 2023).
- Education: GLA University, Mathura. B.Tech in Artificial Intelligence & Machine Learning (Expected graduation: 2028).
- Professional Internships:
  1. Agentic AI & Cloud Intern at LinuxWorld Informatics Pvt. Ltd. (May 2025 - August 2025, 3 months under Vimal Daga). Worked on LangChain + Gemini AI agents, CI/CD pipelines (Jenkins, Docker, AWS EC2), and an Agentic AI Dashboard (Twilio, WhatsApp, LinkedIn APIs).
  2. AI Web Development Intern at InAmigos Foundation Pvt. Ltd. (May 2026 - August 2026, 3 months). Worked on AI web applications, full-stack modules.
- Leadership & Activities:
  1. Secretary & Head of Corporate Relations at IEEE Computer Society Council, GLA University.
  2. Member of Entrepreneurship Cell (E-Cell), GLA University.
  3. Campus Ambassador at SmartED Innovations.
- Key Projects (18 total):
  - CAB-I-NET: Real-time Cab aggregator comparing Uber, Ola & Rapido (Live: https://cab-i-net.netlify.app/)
  - Travel Itinerary AI: customized tours of India (Live: https://travelitiniarybyaryan.netlify.app/)
  - Voice Authentication: speech biometrics FastAPI backend (Live: https://mini-project-7k5l.onrender.com)
  - Jailbreak Web App: prompt injection demonstrator for IEEE (Live: https://jailbreaking.netlify.app/)
  - CareSync HMS: Hospital management system (Live: https://caresync-rhnx.onrender.com)
  - Research Paper: "RidePulse" published in International Journal of Recent Research and Review (Special Issue-2, 2025), focusing on Real-Time Fare Aggregation and ML Surge Forecasting on AWS.
  - Zorvyn Backend: scalable backend core (Live: https://zorvyn-lkz5.onrender.com)
  - AI Agent Architecture: autonomous workflows (Live: https://web-silk-six-36.vercel.app/)
  - Living Newspaper Portfolio: the current interactive portfolio website (Live: https://github.com/jadaunaryansingh/Portfolio)
- Technical Skills: Python (primary), FastAPI, Flask, Streamlit, LangGraph, LangChain, React, Docker, Jenkins, AWS (EC2, S3, Lambda), PostgreSQL, Git.
- Certifications: Microsoft Azure AI Fundamentals (AI-900), Microsoft Azure Fundamentals (AZ-900), AWS Solutions Architecture Job Simulation, Deloitte Tech/Data simulations, JP Morgan Software Engineering simulation, LinuxWorld.
- Contacts: Email (aryansinghjadaun@gmail.com), GitHub (github.com/jadaunaryansingh), LinkedIn (linkedin.com/in/jadaunaryansingh), WhatsApp (+91 98370 39028). Resume Link (https://drive.google.com/file/d/19ZoiBLyYThKkgC_hwxmSNl2dKR1TsGR5/view).

If asked about topics not related to Aryan, politely guide them back to his portfolio, projects, skills, or career. Do not make up any facts outside of this list.`;

const suggestedQuestions = [
  "Tell me about his projects",
  "What are his skills?",
  "How to contact Aryan?",
  "Where did he study?",
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Good day! I am the AI Correspondent for The Developer Daily. Ask me anything about Aryan Singh Jadaun — his projects, skills, education, or how to hire him!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async (text?: string) => {
    const msg = text || input;
    if (!msg.trim()) return;
    const userMsg: Message = { role: "user", content: msg };
    
    // Create and set updated messages state immediately to avoid race conditions
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role === "user" ? "user" : "model",
            parts: [{ text: m.content }],
          })),
          systemInstruction: systemInstruction,
        }),
      });

      if (!response.ok) {
        throw new Error("Gemini API call failed");
      }

      const data = await response.json();
      const assistantText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
      
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: assistantText.trim() },
      ]);
    } catch (error) {
      console.error("Gemini API failed, using fallback:", error);
      // Fallback to rules-based response
      const fallbackText = getResponse(msg);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: fallbackText },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <motion.button
        id="ai-assistant-toggle"
        className="fixed bottom-6 right-6 z-50 bg-ink text-paper border-2 border-gold px-4 py-3 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="label-text text-xs font-bold tracking-widest">
          {isOpen ? "✕ CLOSE" : "✦ ASK THE PAPER"}
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-6 z-50 w-80 shadow-2xl"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            {/* Header */}
            <div className="bg-ink text-paper p-3 border-b-2 border-gold">
              <p className="font-abril text-sm">The Developer Daily</p>
              <p className="label-text text-xs opacity-70">AI Correspondent · Aryan Singh Jadaun</p>
            </div>

            {/* Messages */}
            <div className="bg-paper border-2 border-ink border-t-0 h-64 overflow-y-auto p-3 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] px-3 py-2 ${msg.role === "user" ? "bg-ink text-paper" : "bg-cream border border-ink"}`}>
                    <p className="body-text text-xs" style={{ color: msg.role === "user" ? "#f5e9d4" : "#111" }}>
                      {msg.content}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-cream border border-ink px-3 py-2">
                    <p className="body-text text-xs text-ink-faded italic">Composing reply...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Suggested questions */}
            {messages.length <= 1 && (
              <div className="bg-paper border-2 border-ink border-t-0 p-2 grid grid-cols-2 gap-1">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-left px-2 py-1 border border-ink label-text text-xs hover:bg-ink hover:text-paper transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="bg-paper border-2 border-ink border-t-0 flex">
              <input
                id="ai-assistant-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask about Aryan..."
                className="flex-1 bg-transparent px-3 py-2 body-text text-xs text-ink outline-none placeholder:text-ink-faded"
              />
              <button
                id="ai-assistant-send"
                onClick={() => sendMessage()}
                className="bg-ink text-paper px-3 py-2 label-text text-xs hover:bg-brown transition-colors"
              >
                SEND
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
