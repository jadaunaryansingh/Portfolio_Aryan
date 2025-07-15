import React from 'react';
import { Shield, Eye, Shirt, Github } from 'lucide-react';

const MiniProjects = () => {
  const miniProjects = [
    {
      icon: Shield,
      title: '🔐 Password Strength Detector',
      description: 'Real-time password security analysis with visual feedback',
      github: 'https://github.com/jadaunaryansingh?tab=repositories',
    },
    {
      icon: Eye,
      title: '🖱️ Pointing Device using OpenCV',
      description: 'Hand gesture-based mouse control using computer vision',
      github: 'https://github.com/jadaunaryansingh?tab=repositories',
    },
    {
      icon: Shirt,
      title: '👗 Clothing Recommendation App',
      description: 'AI-powered fashion recommendations based on user preferences',
      github: 'https://github.com/jadaunaryansingh?tab=repositories',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up" data-aos="fade-up">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 animate-gradient-text">
            🛠️ Mini Projects
          </h2>
          <p className="text-xl text-gray-400 animate-fade-in-up">
            Quick solutions to everyday problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {miniProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gray-900/90 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-float-card group relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Icon */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white mb-5 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 animate-float">
                  <project.icon size={32} className="animate-pulse" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300 animate-text-glow">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6">{project.description}</p>

                {/* GitHub CTA */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-bounce inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-full font-medium hover:shadow-xl transition-all duration-300 animate-pulse-glow group/btn relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 animate-shimmer" />
                  <span className="relative z-10 flex items-center">
                    <Github size={16} className="mr-2" />
                    💻 GitHub
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniProjects;
