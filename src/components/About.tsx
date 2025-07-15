import React from 'react';
import { Sparkles, Zap, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float-slow"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/10 rounded-full animate-float-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full animate-float-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-pink-500/10 rounded-full animate-float-slow" style={{animationDelay: '0.5s'}}></div>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float-particle opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            <Sparkles className="inline w-12 h-12 mr-2 text-blue-500 animate-spin-slow" />
            📌 Snapshot of Me
            <Star className="inline w-8 h-8 ml-2 text-purple-500 animate-pulse" />
          </h2>
        </div>

        <div className="glow-card group relative p-8 rounded-3xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-2xl hover:shadow-4xl transition-all duration-700 hover:scale-105 hover:-translate-y-4 animate-float-card overflow-hidden" data-aos="zoom-in">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift"></div>
          
          {/* Floating elements inside card */}
          <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
            <Zap className="w-6 h-6 text-blue-500 animate-bounce" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
            <Star className="w-4 h-4 text-purple-500 animate-pulse" />
          </div>
          
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x hover:scale-110 transition-transform duration-300 animate-pulse-glow">
              👨‍💻 Engineer. Builder. Dreamer. Rider.
            </p>
            
            <p className="animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.2s'}}>
              Hey! I'm <span className="font-bold text-blue-600 dark:text-blue-400 animate-text-glow hover:scale-110 inline-block transition-transform duration-300">Aryan Singh Jadaun</span> — a tech-obsessed soul since childhood, raised in Agra, schooled at St. Peter's College, and now chasing AI dreams at GLA University (B.Tech AIML, Batch of 2028).
            </p>
            
            <p className="animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.4s'}}>
              📍 I break, build, and better everything I touch — currently exploring <span className="font-bold text-purple-600 dark:text-purple-400 animate-text-glow hover:scale-110 inline-block transition-transform duration-300">Agentic AI</span> as a 3-month intern at LinuxWorld Informatics, crafting autonomous systems that think, adapt, and execute like pros.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-2 animate-bounce hover:animate-spin transition-all duration-300">🚀</div>
                <div className="font-bold text-blue-600 dark:text-blue-400 animate-text-glow">Innovation</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Building tomorrow's tech today</div>
              </div>
              
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-2 animate-pulse hover:animate-bounce transition-all duration-300">🧠</div>
                <div className="font-bold text-purple-600 dark:text-purple-400 animate-text-glow">AI Expertise</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">ML/DL, LLMs & Automation</div>
              </div>
              
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-2 animate-float hover:animate-spin transition-all duration-300">💼</div>
                <div className="font-bold text-green-600 dark:text-green-400 animate-text-glow">Leadership</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">E-Cell member & entrepreneur</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;