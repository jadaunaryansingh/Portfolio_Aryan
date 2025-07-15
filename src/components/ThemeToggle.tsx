import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-20 right-4 z-50 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <Sun size={24} className="text-yellow-500" />
      ) : (
        <Moon size={24} className="text-gray-700" />
      )}
    </button>
  );
};

export default ThemeToggle;