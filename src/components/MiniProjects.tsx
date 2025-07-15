import React from 'react';
import { Shield, Eye, Shirt, Github } from 'lucide-react';

const MiniProjects = () => {
  const miniProjects = [
    {
      icon: Shield,
      title: '🔐 Password Strength Detector',
      description: 'Real-time password security analysis with visual feedback',
      github: 'https://github.com/jadaunaryansingh?tab=repositories'
    },
    {
      icon: Eye,
      title: '🖱️ Pointing Device using OpenCV',
      description: 'Hand gesture-based mouse control using computer vision',
      github: 'https://github.com/jadaunaryansingh?tab=repositories'
    },
    {
      icon: Shirt,
      title: '👗 Clothing Recommendation App',
      description: 'AI-powered fashion recommendations based on user preferences',
      github: 'https://github.com/jadaunaryansingh?tab=repositories'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🛠️ Mini Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Quick solutions to everyday problems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {miniProjects.map((project, index) => (
            <div
              key={index}
              className="mini-project-card group p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  <project.icon size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                
                <a
                  href={project.github}
                 target="_blank"
                 rel="noopener noreferrer"
                  className="btn-bounce inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
                >
                  <Github size={16} className="mr-2" />
                  💻 GitHub
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