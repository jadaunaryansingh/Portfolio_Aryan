import React from 'react';
import { Sparkles } from 'lucide-react';
import myPhoto from '/profile.jpg'; // Ensure correct path

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center md:text-left md:flex-row md:justify-between px-6 lg:px-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 relative overflow-hidden"
    >
      {/* Floating Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>

      {/* Dark Card Box */}
      <div className="z-10 md:w-1/2 max-w-2xl bg-black bg-opacity-90 backdrop-blur-md text-white p-10 rounded-3xl shadow-2xl space-y-6 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Aryan Singh Jadaun
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-300 font-semibold">
          AIML Undergrad · Full-Stack Developer · AI/ML Engineer
        </h2>

        <p className="text-base md:text-lg text-gray-400">
          Intern at LinuxWorld Informatics — exploring Agentic AI, ML/DL, LLMs, and AWS.  
          Turning research into real-world tools.
        </p>

        <p className="text-base md:text-lg text-gray-400">
          Skilled in Python, Flask, Streamlit, Docker & NLP.  
          Currently crafting intelligent tools that think, learn, and adapt.
        </p>

        <p className="text-lg md:text-xl font-semibold text-blue-400 italic">
          I don’t just build apps — I build experiences powered by intelligence.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="https://drive.google.com/file/d/1c2rcpzT1vCcleujwXQFneWGdgVOmfMTZ/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            Resume
          </a>
          <a
            href="https://wa.me/919837039028"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            WhatsApp
          </a>
          <a
            href="mailto:aryansinghjadaun@gmail.com"
            className="bg-red-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            Email
          </a>
          <a
            href="https://github.com/jadaunaryansingh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jadaunaryansingh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-700 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div
        className="z-10 mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-end animate-fade-in-up"
        data-aos="fade-left"
      >
        <div className="relative w-64 h-80 border-4 border-blue-500 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500">
          <img
            src={myPhoto}
            alt="Aryan Singh Jadaun"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Floating Sparkle */}
      <div className="absolute top-10 right-10">
        <Sparkles className="text-purple-400 animate-float" size={32} />
      </div>
    </section>
  );
};

export default Hero;
