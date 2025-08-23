import React from 'react';
import { ExternalLink, Github, Bot, Wrench, Sparkles, Zap, Star, Rocket,Car } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Bot,
      title: '🏥 MediBot — Smart Hospital Chatbot',
      description: 'LLM + Web Scraping + Appointment/Prescription System',
      features: [
        'Advanced NLP for medical queries',
        'Real-time appointment booking',
        'Prescription management system',
        'Multi-language support'
      ],
      liveDemo: 'https://huggingface.co/spaces/jadaunaryansingh/ChatHospital',
      github: 'https://github.com/jadaunaryansingh?tab=repositories',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Wrench,
      title: '📲 OpsSuite — Menu-Based AI Toolkit',
      description: 'Tools: Twilio, WhatsApp, Email, SSH, Docker, Google Search, Face Swap',
      features: [
        'Integrated Jenkins CI/CD pipeline',
        'Multi-platform communication',
        'Docker containerization',
        'AI-powered face swap technology'
      ],
      liveDemo: 'https://github.com/jadaunaryansingh?tab=repositories',
      github: 'https://github.com/jadaunaryansingh?tab=repositories',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Rocket,
      title: '🔁 AutoDeploy Pro — CI/CD Pipeline on RHEL',
      description: 'Jenkins + GitHub + Docker Hub | Full CI/CD Pipeline on Red Hat Linux',
      features: [
        'GitHub-triggered Jenkins pipeline',
        'Dockerized build and push to Docker Hub',
        'Auto-deployment on container/server',
        'Secure, modular, and scalable RHEL setup'
      ],
      liveDemo: 'https://drive.google.com/file/d/1e0BnSPnM1VQZrpanRCEhNHhvRoZYfUE6/view?usp=drive_link',
      github: 'https://github.com/jadaunaryansingh?tab=repositories',
      gradient: 'from-red-600 to-yellow-500'
    }
    {
    icon: Car,
    title: '🚖 CAB-I-NET — Smart Cab Fare Comparison',
    description: 'Compare Uber, Ola, Rapido & more | Save time, money, and effort',
    features: [
    'Real-time fare comparison across multiple cab providers',
    'Smart filters: cheapest, fastest, premium rides',
    'Seamless booking with integrated APIs',
    'Dark + yellow glowing UI with premium glassmorphism design'
  ],
  liveDemo: 'https://drive.google.com/file/d/your-demo-link/view?usp=drive_link',
  github: 'https://github.com/jadaunaryansingh?tab=repositories',
  gradient: 'from-black to-yellow-500'
}

    
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500/10 rounded-full animate-float-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-cyan-500/5 to-pink-500/5 rounded-full animate-spin-slow"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float-particle opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up" data-aos="fade-up">
          <h2 className="text-5xl font-bold animate-gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            <Rocket className="inline w-12 h-12 mr-2 text-blue-500 animate-bounce" />
            🧱 Major Projects
            <Sparkles className="inline w-8 h-8 ml-2 text-purple-500 animate-spin-slow" />
          </h2>
          <p className="text-xl text-gray-400 animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.2s'}}>
            Building solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative overflow-hidden rounded-3xl bg-gray-900/90 shadow-2xl hover:shadow-4xl transition-all duration-700 hover:scale-110 hover:-translate-y-4 animate-bounce-subtle"
              data-aos="fade-up"
              data-aos-delay={index * 200}
              style={{animationDelay: `${index * 0.3}s`}}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-gradient-shift`}></div>
              <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} style={{animationDelay: '0.2s'}}></div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                <Star className="w-6 h-6 text-yellow-400 animate-spin" />
              </div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                <Zap className="w-4 h-4 text-blue-400 animate-bounce" />
              </div>
              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} text-white mr-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-float shadow-lg`}>
                    <project.icon size={36} className="animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-500 animate-text-glow">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 text-lg group-hover:scale-105 transition-transform duration-300 animate-fade-in-up">
                  {project.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 hover:scale-105 transition-transform duration-300 animate-slide-in-left" style={{animationDelay: `${featureIndex * 0.1}s`}}>
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse group-hover:animate-bounce"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-bounce flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 animate-pulse-glow group/btn overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
                    <ExternalLink size={20} className="mr-2 animate-bounce relative z-10" />
                    <span className="relative z-10">🔗 Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-bounce flex items-center px-8 py-4 bg-gray-800 dark:bg-gray-700 text-white rounded-full font-medium hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 animate-pulse-glow group/btn overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
                    <Github size={20} className="mr-2 animate-spin-slow relative z-10" />
                    <span className="relative z-10">💻 GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
