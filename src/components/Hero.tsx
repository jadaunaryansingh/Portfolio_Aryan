import React from 'react';
import { Sparkles } from 'lucide-react';
import myPhoto from '../assets/profile.jpg'; // Adjust path if different

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
      <div className="z-10 md:w-1/2" data-aos="fade-right">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up">
          👋 Hi, I'm Aryan Singh Jadaun
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 animate-fade-in">
          Full-Stack Developer | AI/ML Enthusiast | DevOps | Cloud
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          🚀 View My Work
        </a>
      </div>

      {/* Profile Image */}
      <div
        className="z-10 mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-end"
        data-aos="fade-left"
      >
        <div className="relative w-64 h-80 border-4 border-blue-500 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500 animate-fade-in-up">
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
