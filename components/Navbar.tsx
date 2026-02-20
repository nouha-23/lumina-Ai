
import React from 'react';
import { Sparkles, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Sparkles className="text-white" size={20} />
          </div>
          <span className="font-display font-bold text-xl tracking-tight dark:text-white">Lumina AI</span>
        </div>

        <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-slate-600 dark:text-slate-400">
          <a className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#features">Features</a>
          <a className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#how-it-works">How it works</a>
          <a className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#stats">Stats</a>
          <a className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#faq">FAQ</a>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-600 dark:text-slate-400"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-500/20 active:scale-95">
            Download
          </button>
        </div>
      </div>
    </nav>
  );
};
