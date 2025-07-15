import React from 'react';

const Navbar = () => {
  const navItems = [
    { label: '🏠 Home', href: '#home' },
    { label: '👤 About', href: '#about' },
    { label: '📁 Projects', href: '#projects' },
    { label: '🧠 Skills', href: '#skills' },
    { label: '🎓 Education', href: '#education' },
    { label: '📬 Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold text-white">
          <span className="text-blue-400 text-2xl animate-bounce">✨</span>
          <span className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">ASJ</span>
        </div>

        {/* Navigation Buttons */}
        <nav className="flex gap-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-sm md:text-base px-4 py-2 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 text-white hover:from-blue-600 hover:to-purple-600 hover:shadow-md transition-all duration-300 font-medium border border-white/10 hover:scale-105"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
