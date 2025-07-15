import React, { useState, useEffect } from 'react';
import { Heart, Code, Sparkles, Star, Zap } from 'lucide-react';

const Footer = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    "Build once, scale forever.",
    "Code is art. Automation is freedom.",
    "Innovation distinguishes between a leader and a follower.",
    "The future belongs to those who code it."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-blue-500/10 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-purple-500/10 rounded-full animate-float-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full animate-spin-slow"></div>
        
        {/* Floating stars */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-particle opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            <Star className="w-2 h-2 text-yellow-400" />
          </div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          {/* Animated Quote */}
          <div className="mb-12 animate-fade-in-up">
            <div className="text-3xl font-bold mb-6 h-20 flex items-center justify-center relative">
              <Sparkles className="absolute left-4 w-6 h-6 text-blue-400 animate-spin" />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x hover:scale-105 transition-transform duration-300 animate-pulse-glow">
                "{quotes[currentQuote]}"
              </span>
              <Zap className="absolute right-4 w-6 h-6 text-purple-400 animate-bounce" />
            </div>
          </div>

          {/* Divider */}
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-12 rounded-full animate-gradient-x hover:scale-110 transition-transform duration-300 animate-pulse-glow"></div>

          {/* Footer Content */}
          <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <p className="text-xl text-gray-300 hover:scale-105 transition-transform duration-300">
              Made with <Heart className="inline w-6 h-6 text-red-500 animate-pulse hover:animate-bounce" /> and <Code className="inline w-6 h-6 text-blue-500 animate-float hover:animate-spin" /> by
            </p>
            <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x hover:scale-110 transition-transform duration-300 animate-pulse-glow">
              Aryan Singh Jadaun
            </p>
            <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300 hover:scale-105 transform">
              © 2024 All rights reserved. Built with React, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mt-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            {[
              { name: 'GitHub', href: 'https://github.com/jadaunaryansingh?tab=repositories' },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aryan-singh-jadaun-4576aa23a' },
              { name: 'Email', href: 'mailto:aryansinghjadaun@gmail.com' },
              { name: 'WhatsApp', href: 'https://wa.me/919837039028' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="text-gray-400 hover:text-white transition-all duration-500 hover:scale-125 transform hover:-translate-y-2 animate-bounce-subtle hover:animate-pulse font-medium text-lg px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 backdrop-blur-sm"
                style={{animationDelay: `${social.name.length * 0.1}s`}}
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <div className="mt-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn-bounce px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-bold hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-3 animate-pulse-glow group relative overflow-hidden text-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
              <span className="relative z-10 animate-text-glow">
              ↑ Back to Top
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;