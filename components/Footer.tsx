
import React from 'react';
import { Sparkles, Github, Twitter, Linkedin, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2.5 mb-8">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="text-white" size={18} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight dark:text-white">Lumina AI</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-xs mb-8 leading-relaxed">
              The world's first truly undetectable AI meeting assistant. Built for privacy, performance, and elite professionals.
            </p>
            <div className="flex items-center gap-3 text-xs text-emerald-500 font-bold bg-emerald-500/5 px-3 py-1.5 rounded-full w-fit border border-emerald-500/20">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              All systems operational
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-6 dark:text-white">Resources</h5>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-blue-600 transition-colors flex items-center gap-2" href="#">Mobile <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded font-black tracking-tighter">NEW</span></a></li>
              <li><a className="hover:text-blue-600 transition-colors" href="#">Manifesto</a></li>
              <li><a className="hover:text-blue-600 transition-colors" href="#">Press Kit</a></li>
              <li><a className="hover:text-blue-600 transition-colors" href="#">Bug Bounty</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-6 dark:text-white">Support</h5>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-blue-600 transition-colors" href="#">Help Center</a></li>
              <li><a className="hover:text-blue-600 transition-colors" href="#">Contact Us</a></li>
              <li><a className="hover:text-blue-600 transition-colors" href="#">Integrations</a></li>
              <li><a className="hover:text-blue-600 transition-colors" href="#">API Docs</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-6 dark:text-white">Legal</h5>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><a className="hover:text-blue-600 transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-blue-600 transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-blue-600 transition-colors" href="#">Security</a></li>
              <li><a className="hover:text-blue-600 transition-colors" href="#">Subprocessors</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-slate-200 dark:border-slate-800 gap-8">
          <p className="text-sm text-slate-400 dark:text-slate-500">
            © {currentYear} Lumina AI. Designed for modern builders.
          </p>
          <div className="flex items-center space-x-6 text-slate-400 dark:text-slate-500">
            <a className="hover:text-blue-600 transition-colors" href="#"><Twitter size={20} /></a>
            <a className="hover:text-blue-600 transition-colors" href="#"><Linkedin size={20} /></a>
            <a className="hover:text-blue-600 transition-colors" href="#"><Github size={20} /></a>
            <a className="hover:text-blue-600 transition-colors" href="#"><Terminal size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
