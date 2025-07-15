import React from 'react';
import { GraduationCap, School, Award, Briefcase } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      icon: GraduationCap,
      title: '👨‍🎓 GLA University, Mathura',
      institution: 'AIML Undergrad',
      year: '2024 - 2028',
      description: 'Bachelor of Technology in Artificial Intelligence & Machine Learning with focus on Deep Learning, NLP, Computer Vision, and MLOps',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: School,
      title: '🏫 RCS Memorial Sr. Sec. School, Agra',
      institution: 'Matriculation',
      year: '2020 - 2022',
      description: 'Secondary Education with excellent academic performance in Science and Mathematics',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: School,
      title: '🏫 St. Peter\'s College, Agra',
      institution: 'High School',
      year: '2022 - 2024',
      description: 'Senior Secondary Education with focus on Science & Mathematics',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const experiences = [
    {
      icon: Briefcase,
      title: '🤖 Agentic AI Intern',
      company: 'LinuxWorld Informatics Pvt Ltd',
      duration: '3 months',
      description: 'Built LangChain + Gemini AI agents with Docker, Flask, LLMs',
      achievements: [
        'Developed autonomous AI systems',
        'Implemented LangChain workflows',
        'Docker containerization expertise',
        'Flask API development'
      ]
    },
    {
      icon: Briefcase,
      title: '💼 E-Cell Member',
      company: 'GLA University',
      duration: '5 months',
      description: 'Hands-on startup ideation, pitch prep, entrepreneurship',
      achievements: [
        'Startup ideation workshops',
        'Business pitch preparation',
        'Entrepreneurship mentoring',
        'Innovation projects'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text animate-bounce">
            🎓 Education & Experience
          </h2>
          <p className="text-xl text-gray-400">
            My academic journey and professional growth
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8 text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text animate-bounce">
            Academic Background
          </h3>
          <div className="space-y-8">
            {educationItems.map((item, index) => (
              <div
                key={index}
                className="education-card flex items-center p-6 rounded-2xl bg-gray-900/80 backdrop-blur shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-bounce"
                data-aos="fade-right"
                data-aos-delay={index * 200}
              >
                <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white mr-6`}>
                  <item.icon size={32} />
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-bold mb-1">
                    {item.title}
                  </h4>
                  <p className="text-lg text-blue-400 font-semibold mb-1">
                    {item.institution}
                  </p>
                  <p className="text-gray-400 mb-2">{item.year}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8 text-transparent bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text animate-bounce">
            🧪 Internship & Leadership
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gray-900/80 backdrop-blur shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-bounce"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white mr-4">
                    <exp.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">
                      {exp.title}
                    </h4>
                    <p className="text-blue-400 font-semibold">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-400">
                      {exp.duration}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  {exp.description}
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Azure Certification */}
        <div className="text-center" data-aos="zoom-in">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-blue-800/50 to-purple-800/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-bounce">
            <Award size={48} className="mx-auto mb-4 text-blue-400" />
            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-2">
              📜 Azure Certification
            </h3>
            <p className="text-xl text-blue-400 font-semibold mb-4">
              Microsoft Certified: AZ-900 (Azure Fundamentals)
            </p>
            <a
              href="https://www.credly.com/badges/aa35e7f4-ae7e-4439-ab44-a6f29da85c24"
              target="_blank"
              rel="noreferrer"
              className="btn-bounce inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-xl transition-all duration-300"
            >
              🔗 Verify on Credly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
