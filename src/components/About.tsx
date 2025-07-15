import React from 'react';
import { Sparkles, Zap, Star } from 'lucide-react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white relative overflow-hidden"
    >
      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/10 rounded-full animate-float-slow"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-sky-500/10 rounded-full animate-float-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-cyan-400/10 rounded-full animate-float-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-blue-300/10 rounded-full animate-float-slow" style={{ animationDelay: '0.5s' }}></div>

        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-white mb-4 animate-gradient-text bg-gradient-to-r from-gray-200 via-blue-400 to-gray-100 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            <Sparkles className="inline w-12 h-12 mr-2 text-blue-500 animate-spin-slow" />
            Snapshot of Me
            <Star className="inline w-8 h-8 ml-2 text-blue-400 animate-pulse" />
          </h2>
        </div>

        <div className="group relative p-8 rounded-3xl bg-black/80 backdrop-blur-md shadow-2xl hover:shadow-blue-500/30 transition-all duration-700 hover:scale-105 hover:-translate-y-4 animate-fade-in-up overflow-hidden">
          {/* Glowing inner background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-gray-600/5 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift"></div>

          {/* Floating icons */}
          <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity duration-300">
            <Zap className="w-6 h-6 text-blue-400 animate-bounce" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-10 group-hover:opacity-30 transition-opacity duration-300">
            <Star className="w-4 h-4 text-white animate-pulse" />
          </div>

          {/* Main Text */}
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p className="text-3xl font-bold text-center bg-gradient-to-r from-sky-400 via-gray-100 to-slate-300 bg-clip-text text-transparent animate-gradient-x hover:scale-110 transition-transform duration-300 animate-pulse-glow">
              Engineer. Builder. Dreamer. Rider.
            </p>

            <p className="animate-fade-in-up transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
              Hey! I'm{' '}
              <span className="font-bold text-sky-400 animate-text-glow inline-block">
                Aryan Singh Jadaun
              </span>{' '}
              — a tech-obsessed soul since childhood, raised in Agra, schooled at St. Peter's College, now pushing limits at GLA University (AIML, 2028).
            </p>

            <p className="animate-fade-in-up transition-transform duration-300" style={{ animationDelay: '0.4s' }}>
              I break, build, and better everything I touch — currently crafting autonomous systems during my internship at{' '}
              <span className="font-bold text-indigo-400 animate-text-glow inline-block">
                LinuxWorld Informatics
              </span>{' '}
              with focus on Agentic AI, ML/DL, and cloud tech.
            </p>

            {/* Traits Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center p-4 rounded-xl bg-gray-800/70 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-2 animate-bounce">🚀</div>
                <div className="font-bold text-white">Innovation</div>
                <div className="text-sm text-gray-400">Building tomorrow’s tech today</div>
              </div>

              <div className="text-center p-4 rounded-xl bg-gray-800/70 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-2 animate-pulse">🧠</div>
                <div className="font-bold text-white">AI Expertise</div>
                <div className="text-sm text-gray-400">ML/DL, LLMs & Automation</div>
              </div>

              <div className="text-center p-4 rounded-xl bg-gray-800/70 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-2 animate-float">💼</div>
                <div className="font-bold text-white">Leadership</div>
                <div className="text-sm text-gray-400">E-Cell & entrepreneurial vision</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
