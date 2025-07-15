import React from 'react';
import { Sparkles } from 'lucide-react';
import myPhoto from '/profile.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex justify-center items-center px-6 py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Glowing Backgrounds */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>

      {/* Hero Content Box */}
      <div className="z-10 w-full max-w-5xl bg-black/90 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-8 animate-fade-in-up">
        {/* Profile Photo */}
        <div className="w-48 h-64 rounded-2xl overflow-hidden border-2 border-blue-600 shadow-lg">
          <img
            src={myPhoto}
            alt="Aryan Singh Jadaun"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Aryan Singh Jadaun
          </h1>
          <h2 className="text-lg md:text-xl text-gray-300 font-semibold">
            AIML Undergrad · Full-Stack Developer · AI/ML Engineer
          </h2>
          <p className="text-base md:text-lg text-gray-400">
            Passionate about bridging research and real-world systems.
            Diving into Agentic AI, ML/DL, LLMs, and AWS.
          </p>
          <p className="text-base md:text-lg text-gray-400">
            Skilled in Python, Flask, Streamlit, Docker & NLP —  
            building tools that think, learn, and adapt autonomously.
          </p>
          <p className="text-lg font-semibold text-blue-400 italic">
            I don’t just build apps — I craft intelligent experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <a
              href="https://drive.google.com/file/d/1c2rcpzT1vCcleujwXQFneWGdgVOmfMTZ/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-full shadow transition"
            >
              Resume
            </a>
            <a
              href="https://wa.me/919837039028"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-600 hover:bg-slate-500 text-white px-5 py-2 rounded-full shadow transition"
            >
              WhatsApp
            </a>
            <a
              href="mailto:aryansinghjadaun@gmail.com"
              className="bg-neutral-700 hover:bg-neutral-600 text-white px-5 py-2 rounded-full shadow transition"
            >
              Email
            </a>
            <a
              href="https://github.com/jadaunaryansingh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-full shadow transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jadaunaryansingh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-700 hover:bg-indigo-600 text-white px-5 py-2 rounded-full shadow transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Floating Sparkle */}
      <div className="absolute top-10 right-10">
        <Sparkles className="text-blue-400 animate-float" size={28} />
      </div>
    </section>
  );
};

export default Hero;
