import React, { useState, useEffect } from 'react';
import { Brain, Code, Settings, Cloud, Bot, Database, FileText, Terminal, GitBranch, Link, Palette } from 'lucide-react';

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);

  const skills = [
    { name: 'ML', icon: Brain, color: 'from-purple-500 to-pink-500', glowColor: 'shadow-purple-500/50', description: 'Deep Learning, NLP, Computer Vision' },
    { name: 'Full-Stack Dev', icon: Code, color: 'from-blue-500 to-cyan-500', glowColor: 'shadow-blue-500/50', description: 'React, Python, Flask, APIs' },
    { name: 'DevOps', icon: Settings, color: 'from-green-500 to-teal-500', glowColor: 'shadow-green-500/50', description: 'CI/CD, Automation, Monitoring' },
    { name: 'Cloud (AWS)', icon: Cloud, color: 'from-orange-500 to-red-500', glowColor: 'shadow-orange-500/50', description: 'EC2, S3, Lambda, Docker' },
    { name: 'Automation/Scripting', icon: Bot, color: 'from-indigo-500 to-purple-500', glowColor: 'shadow-indigo-500/50', description: 'Python Scripts, Workflow Automation' },
    { name: 'Database Management', icon: Database, color: 'from-yellow-500 to-orange-500', glowColor: 'shadow-yellow-500/50', description: 'SQL, NoSQL, Data Modeling' },
    { name: 'Prompt Engineering', icon: FileText, color: 'from-pink-500 to-rose-500', glowColor: 'shadow-pink-500/50', description: 'LLM Optimization, AI Prompting' },
    { name: 'Linux', icon: Terminal, color: 'from-gray-600 to-gray-800', glowColor: 'shadow-gray-500/50', description: 'System Admin, Shell Scripting' },
    { name: 'Version Control (Git)', icon: GitBranch, color: 'from-red-500 to-pink-500', glowColor: 'shadow-red-500/50', description: 'Git, GitHub, Collaboration' },
    { name: 'API Integration', icon: Link, color: 'from-teal-500 to-cyan-500', glowColor: 'shadow-teal-500/50', description: 'REST APIs, GraphQL, Webhooks' },
    { name: 'UI/UX & Web Design', icon: Palette, color: 'from-violet-500 to-purple-500', glowColor: 'shadow-violet-500/50', description: 'Design Systems, User Experience' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      skills.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => [...prev, index]);
        }, index * 150);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white relative overflow-hidden">

      {/* Background effects */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full animate-spin-slow"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold animate-gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            🚀 Technical Expertise
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mastering cutting-edge technologies to build innovative solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => {

            const isAnimated = animatedSkills.includes(index);

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl bg-gray-900/90 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 ${isAnimated ? 'animate-slide-up opacity-100' : 'opacity-0'} animate-bounce-subtle`}
                style={{animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards'}}
              >

                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>

                {/* Content */}
                <div className="relative p-8">

                  {/* Icon */}
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${skill.color} text-white shadow-lg group-hover:scale-110 transition-all duration-500 animate-float`}>
                      <skill.icon size={32} />
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-500">
                    {skill.name}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {skill.description}
                  </p>

                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-1/2 right-8 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
};

export default Skills;
