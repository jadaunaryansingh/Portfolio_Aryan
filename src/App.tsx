import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import MiniProjects from './components/MiniProjects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ThemeToggle from './components/ThemeToggle';
import './styles/animations.css';
import './styles/cursor.css';
import './styles/preloader.css';

declare global {
  interface Window {
    AOS: any;
  }
}

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      });
    }

    // Preloader
    const timer = setTimeout(() => {
      setLoading(false);
      document.getElementById('preloader')?.classList.add('fade-out');
    }, 2000);

    // Custom cursor
    const cursor = document.getElementById('custom-cursor');
    const follower = document.getElementById('cursor-follower');

    const moveCursor = (e: MouseEvent) => {
      if (cursor && follower) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
          follower.style.left = e.clientX + 'px';
          follower.style.top = e.clientY + 'px';
        }, 100);
      }
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode ? 'dark bg-gray-900' : 'bg-white'
    }`}>
      <ParticleBackground />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <MiniProjects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;