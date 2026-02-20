
import React from 'react';
import { Monitor, Sparkles, Play, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <header className="relative pt-32 pb-20 md:pt-48 md:pb-40 hero-gradient overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-bold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <ShieldCheck size={16} />
          <span>Voted #1 for Privacy 2024</span>
        </div>
        
        <h1 className="font-display text-5xl md:text-8xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-slate-200 dark:to-slate-400 leading-[1.1]">
          The Meeting AI <br className="hidden md:block" />
          <span className="text-blue-600">You Can't See.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
          Lumina works directly on your desktop, capturing meetings invisibly to provide real-time answers and perfect notes without intrusive bots.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24">
          <button className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-2xl shadow-blue-600/40 hover:bg-blue-700 active:scale-95">
            <Monitor size={20} />
            Download for Desktop
          </button>
          <button className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all backdrop-blur-sm flex items-center justify-center gap-2">
            <Play size={18} fill="currentColor" />
            Watch Demo
          </button>
        </div>

        {/* CSS App Window Visual */}
        <div className="relative max-w-5xl mx-auto perspective-1000">
          <div className="relative rounded-[2.5rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-[0_0_100px_rgba(37,99,235,0.15)] bg-slate-50 dark:bg-slate-950 p-2 group">
            {/* Window Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-t-[2.2rem]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <Sparkles size={14} className="text-blue-500" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lumina Active</span>
              </div>
              <div className="w-10"></div>
            </div>
            
            {/* Mock App Content */}
            <div className="bg-white dark:bg-slate-900 aspect-[16/9] flex items-stretch">
              <div className="w-64 border-r border-slate-100 dark:border-slate-800 p-6 hidden md:block">
                <div className="h-4 w-32 bg-slate-100 dark:bg-slate-800 rounded-full mb-8"></div>
                <div className="space-y-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className={`h-10 w-full rounded-xl ${i === 1 ? 'bg-blue-600/10' : 'bg-slate-50 dark:bg-slate-800/50'}`}></div>
                  ))}
                </div>
              </div>
              <div className="flex-1 p-8 text-left relative overflow-hidden">
                <div className="flex items-center gap-4 mb-10">
                   <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-bold">L</div>
                   <div>
                     <h3 className="text-xl font-bold dark:text-white">Product Strategy Sync</h3>
                     <p className="text-sm text-slate-400">14:02 elapsed • Live Transcription</p>
                   </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex-shrink-0"></div>
                    <div className="space-y-2 max-w-lg">
                      <div className="h-3 w-40 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                      <div className="h-20 w-full bg-slate-50 dark:bg-slate-800/40 rounded-2xl"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Insight Overlay */}
                <div className="absolute top-1/2 right-12 w-64 glass p-6 rounded-2xl border border-blue-100 dark:border-blue-900/50 shadow-2xl animate-bounce-slow">
                   <div className="flex items-center gap-2 mb-3 text-blue-600">
                     <Sparkles size={16} />
                     <span className="text-xs font-bold uppercase tracking-wider">Smart Answer</span>
                   </div>
                   <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                     "Based on our Q2 goals, this initiative could potentially reduce churn by 12% in the enterprise segment."
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
