import React from 'react';
import { Phone, Mail, Linkedin, Instagram, MessageCircle, Github, FileText, Sparkles, Heart, Zap } from 'lucide-react';

const Contact = () => {
  const contactItems = [
    {
      icon: Phone,
      label: '📱 Phone',
      value: '+91 9837039028',
      href: 'tel:+919837039028',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      label: '📧 Email',
      value: 'aryansinghjadaun@gmail.com',
      href: 'mailto:aryansinghjadaun@gmail.com',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Linkedin,
      label: '💼 LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/aryan-singh-jadaun-4576aa23a',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Instagram,
      label: '📸 Instagram',
      value: 'Follow me',
      href: 'https://instagram.com/aryansinghjadaun',
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: MessageCircle,
      label: '💬 WhatsApp',
      value: 'Message me',
      href: 'https://wa.me/919837039028',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Github,
      label: '☁️ GitHub',
      value: 'View my code',
      href: 'https://github.com/jadaunaryansingh?tab=repositories',
      color: 'from-gray-700 to-gray-800'
    },
    {
      icon: FileText,
      label: '📄 Resume',
      value: 'Download CV',
      href: 'https://drive.google.com/file/d/1c2rcpzT1vCcleujwXQFneWGdgVOmfMTZ/view?usp=drivesdk',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-28 h-28 bg-blue-500/10 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-purple-500/10 rounded-full animate-float-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-pink-500/10 rounded-full animate-float-slow" style={{animationDelay: '2s'}}></div>
        
        {/* Floating hearts and sparkles */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-particle opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            {i % 2 === 0 ? (
              <Heart className="w-3 h-3 text-pink-400" />
            ) : (
              <Sparkles className="w-2 h-2 text-blue-400" />
            )}
          </div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            <Zap className="inline w-12 h-12 mr-2 text-blue-500 animate-bounce" />
            📬 Let's Connect
            <Heart className="inline w-10 h-10 ml-2 text-pink-500 animate-pulse" />
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.2s'}}>
            Ready to collaborate? Reach out through any of these channels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className="contact-card group block p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-4xl transition-all duration-700 hover:scale-110 hover:-translate-y-6 hover:rotate-2 animate-float-card relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{animationDelay: `${index * 0.15}s`}}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color.replace('from-', 'from-').replace('to-', 'to-')}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift`}></div>
              
              {/* Floating sparkles */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                <Sparkles className="w-4 h-4 text-yellow-400 animate-spin" />
              </div>
              
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${item.color} text-white mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-float shadow-2xl relative`}>
                  <item.icon size={36} className="animate-pulse group-hover:animate-bounce" />
                  <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-500 animate-text-glow">
                  {item.label}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm group-hover:scale-105 transition-transform duration-300 animate-fade-in-up">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" data-aos="fade-up" style={{animationDelay: '0.8s'}}>
          <div className="inline-block p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 shadow-2xl hover:shadow-4xl transition-all duration-700 hover:scale-105 hover:-translate-y-4 animate-float-card group relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift"></div>
            
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 animate-gradient-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              Ready to build something amazing together?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up">
              I'm always excited to work on innovative projects and collaborate with like-minded individuals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:aryansinghjadaun@gmail.com"
                className="btn-bounce px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 animate-pulse-glow group/btn relative overflow-hidden text-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
                <span className="relative z-10 animate-text-glow">
                📧 Let's Talk
                </span>
              </a>
              <a
                href="https://wa.me/919837039028"
                className="btn-bounce px-10 py-5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-bold hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 animate-pulse-glow group/btn relative overflow-hidden text-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
                <span className="relative z-10 animate-text-glow">
                💬 WhatsApp Me
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;