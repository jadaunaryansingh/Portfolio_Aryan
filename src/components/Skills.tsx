import React, { useState, useEffect } from 'react';
import { Brain, Code, Settings, Cloud, Bot, Database, FileText, Terminal, GitBranch, Link, Palette } from 'lucide-react';

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);

  const skills = [
    { name: 'AI/ML', icon: Brain, percentage: 95, color: 'from-purple-500 to-pink-500', glowColor: 'shadow-purple-500/50', description: 'Deep Learning, NLP, Computer Vision' },
    { name: 'Full-Stack Dev', icon: Code, percentage: 80, color: 'from-blue-500 to-cyan-500', glowColor: 'shadow-blue-500/50', description: 'React, Python, Flask, APIs' },
    { name: 'DevOps', icon: Settings, percentage: 85, color: 'from-green-500 to-teal-500', glowColor: 'shadow-green-500/50', description: 'CI/CD, Automation, Monitoring' },
    { name: 'Cloud (AWS)', icon: Cloud, percentage: 95, color: 'from-orange-500 to-red-500', glowColor: 'shadow-orange-500/50', description: 'EC2, S3, Lambda, Docker' },
    { name: 'Automation/Scripting', icon: Bot, percentage: 80, color: 'from-indigo-500 to-purple-500', glowColor: 'shadow-indigo-500/50', description: 'Python Scripts, Workflow Automation' },
    { name: 'Database Management', icon: Database, percentage: 85, color: 'from-yellow-500 to-orange-500', glowColor: 'shadow-yellow-500/50', description: 'SQL, NoSQL, Data Modeling' },
    { name: 'Prompt Engineering', icon: FileText, percentage: 90, color: 'from-pink-500 to-rose-500', glowColor: 'shadow-pink-500/50', description: 'LLM Optimization, AI Prompting' },
    { name: 'Linux', icon: Terminal, percentage: 95, color: 'from-gray-600 to-gray-800', glowColor: 'shadow-gray-500/50', description: 'System Admin, Shell Scripting' },
    { name: 'Version Control (Git)', icon: GitBranch, percentage: 95, color: 'from-red-500 to-pink-500', glowColor: 'shadow-red-500/50', description: 'Git, GitHub, Collaboration' },
    { name: 'API Integration', icon: Link, percentage: 80, color: 'from-teal-500 to-cyan-500', glowColor: 'shadow-teal-500/50', description: 'REST APIs, GraphQL, Webhooks' },
    { name: 'UI/UX & Web Design', icon: Palette, percentage: 85, color: 'from-violet-500 to-purple-500', glowColor: 'shadow-violet-500/50', description: 'Design Systems, User Experience' }
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

  const getSkillLevel = (percentage: number) => {
    if (percentage >= 90) return { level: 'Expert', color: 'text-green-500', bg: 'bg-green-500/10' };
    if (percentage >= 80) return { level: 'Advanced', color: 'text-blue-500', bg: 'bg-blue-500/10' };
    if (percentage >= 70) return { level: 'Intermediate', color: 'text-yellow-500', bg: 'bg-yellow-500/10' };
    return { level: 'Beginner', color: 'text-gray-500', bg: 'bg-gray-500/10' };
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full animate-spin-slow"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-bold animate-gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            🚀 Technical Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mastering cutting-edge technologies to build innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => {
            const skillLevel = getSkillLevel(skill.percentage);
            const isAnimated = animatedSkills.includes(index);
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl bg-gray-900/90 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 ${isAnimated ? 'animate-slide-up opacity-100' : 'opacity-0'} animate-bounce-subtle`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards'}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
                <div className="relative p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${skill.color} text-white shadow-lg group-hover:scale-110 transition-all duration-500 animate-float`}>
                      <skill.icon size={32} />
                    </div>
                    <div className="text-right">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${skillLevel.bg} ${skillLevel.color} mb-2`}>
                        {skillLevel.level}
                      </div>
                      <div className="text-3xl font-bold text-white">
                        {isAnimated ? skill.percentage : 0}%
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-500">
                      {skill.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                  <div className="relative">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Progress</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700"></div>
                      <div
                        className={`relative h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 ease-out overflow-hidden`}
                        style={{width: isAnimated ? `${skill.percentage}%` : '0%'}}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                        <div className="absolute right-0 top-0 h-full w-4 bg-white/50 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-4 space-x-1">
                    {[...Array(10)].map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${dotIndex < Math.floor(skill.percentage / 10) ? `bg-gradient-to-r ${skill.color}` : 'bg-gray-700'}`}
                        style={{animationDelay: `${dotIndex * 0.1}s`}}
                      ></div>
                    ))}
                  </div>
                </div>
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
