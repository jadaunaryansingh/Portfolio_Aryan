import React, { useEffect, useState } from 'react';
import { FileText, MessageCircle, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = "Building the future with AI & Code";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const buttons = [
    { icon: FileText, text: 'Resume', href: 'https://drive.google.com/file/d/1c2rcpzT1vCcleujwXQFneWGdgVOmfMTZ/view?usp=drivesdk', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: MessageCircle, text: 'WhatsApp', href: 'https://wa.me/919837039028', color: 'bg-green-600 hover:bg-green-700' },
    { icon: Mail, text: 'Email', href: 'mailto:aryansinghjadaun@gmail.com', color: 'bg-red-600 hover:bg-red-700' },
    { icon: Github, text: 'GitHub', href: 'https://github.com/jadaunaryansingh?tab=repositories', color: 'bg-gray-800 hover:bg-gray-900' },
    { icon: Linkedin, text: 'LinkedIn', href: 'https://www.linkedin.com/in/aryan-singh-jadaun-4576aa23a', color: 'bg-blue-700 hover:bg-blue-800' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Photo */}
          <div className="flex justify-center lg:justify-end" data-aos="fade-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl transition-all duration-500 hover:scale-110 animate-float relative">
                {/* Animated border rings */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow opacity-75"></div>
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse"></div>
                
                {/* Main photo container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-inner">
                <img
                  src="/profile.jpg"
                  alt="Aryan Singh Jadaun"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400';
                  }}
                />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-purple-500/20 animate-pulse"></div>
                </div>
                
                {/* Floating particles around photo */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 -left-4 w-2 h-2 bg-cyan-500 rounded-full animate-ping"></div>
                <div className="absolute top-1/4 -right-4 w-2 h-2 bg-pink-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8" data-aos="fade-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                👨‍💻 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Aryan Singh Jadaun
                </span>
              </h1>
              
              <div className="text-xl text-gray-600 dark:text-gray-300 space-y-2">
                <p>AIML Undergrad @ GLA University (2028)</p>
                <p>💼 Intern @ LinuxWorld (Agentic AI, ML/DL, LLMs, AWS)</p>
                <p>🧠 Python • Flask • Streamlit • Docker • NLP</p>
                <p>🚀 Building BuildCraft & Legally</p>
                <p>📍 Based in Agra | <span className="text-green-600 font-semibold">#OpenToWork</span></p>
              </div>

              <div className="text-2xl font-semibold text-blue-600 dark:text-blue-400 h-8">
                {typewriterText}<span className="animate-pulse">|</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  target={button.href.startsWith('http') ? '_blank' : '_self'}
                  rel={button.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`btn-bounce inline-flex items-center px-6 py-3 rounded-full text-white font-medium transition-all duration-300 ${button.color} hover:shadow-lg hover:scale-105`}
                >
                  <button.icon size={20} className="mr-2" />
                  {button.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;