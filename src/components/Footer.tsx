import React from 'react';
import { Heart, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-10 px-6 text-center relative overflow-hidden animate-fade-in-up">
      {/* Floating Glows */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-float-slow"></div>
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none animate-float-slow" style={{ animationDelay: '2s' }}></div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="text-lg text-gray-400">
          Built with passion by <span className="text-blue-400 font-semibold">Aryan Singh Jadaun</span>
        </p>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://www.instagram.com/jadaun_aryansingh?igsh=MWh3em1xOW1nYTkxNg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-transform duration-300 hover:scale-125"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/aryan-singh-jadaun-4576aa23a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-transform duration-300 hover:scale-125"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/jadaunaryansingh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-125"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Made with <Heart className="inline w-4 h-4 text-pink-500 animate-pulse mx-1" /> in India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
