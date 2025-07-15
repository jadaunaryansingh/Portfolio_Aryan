import React from 'react';
import { Sparkles } from 'lucide-react';
import myPhoto from '/profile.jpg'; // Adjust if needed

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center md:text-left md:flex-row md:justify-between px-6 lg:px-24 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black relative overflow-hidden"
    >
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>

      {/* Text Content */}
      <div className="z-10 md:w-1/2 space-y-4" data-aos="fade-right">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2 animate-slide-up">
          Aryan Singh Jadaun
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          AIML Undergrad @ GLA University (2028)
        </p>
        <p className="text-md text-gray-700 dark:text-gray-400">
          Intern @ LinuxWorld (Agentic AI, ML/DL, LLMs, AWS)
        </p>
        <p className="text-md text-gray-700 dark:text-gray-400">
          Python · Flask · Streamlit · Docker · NLP
        </p>
        <p className="text-md text-gray-700 dark:text-gray-400">
          Building <strong>BuildCraft</strong> & <strong>Legally</strong> · Based in Agra · <span className="text-green-600 font-semibold">#OpenToWork</span>
        </p>
        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
          Building the future with AI & Code
        </p>
        <p className="text-md font-medium text-gray-800 dark:text-gray-300 italic">
          I don’t just build apps — I build experiences powered by intelligence.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="https://drive.google.com/file/d/1c2rcpzT1vCcleujwXQFneWGdgVOmfMTZ/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
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
            className="bg-gray-900 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jadaunaryansingh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div
        className="z-10 mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-end"
        data-aos="fade-left"
      >
        <div className="relative w-64 h-80 border-4 border-blue-500 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500">
          <img
            src={myPhoto}
            alt="Aryan Singh Jadaun"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>

      {/* Floating Icon */}
      <div className="absolute top-10 right-10">
        <Sparkles className="text-purple-500 animate-float" size={32} />
      </div>
    </section>
  );
};

export default Hero;
