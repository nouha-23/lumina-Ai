
import React from 'react';
import { Eye, EyeOff, Sparkles } from 'lucide-react';

export const UndetectableSection: React.FC = () => {
  return (
    <section className="py-32 bg-slate-100/50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 dark:text-white leading-tight">
          No meeting bots. <br />100% undetectable.
        </h2>
        <p className="text-blue-600 font-bold mb-20 cursor-pointer hover:underline inline-flex items-center gap-2">
          How does Lumina stay undetectable?
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Competitor Box */}
          <div className="relative bg-white dark:bg-slate-800 p-10 rounded-[3rem] border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden">
            <h4 className="text-slate-400 dark:text-slate-500 mb-10 font-bold text-xs uppercase tracking-widest">Other AI Notetakers</h4>
            <div className="relative aspect-video rounded-3xl bg-slate-50 dark:bg-slate-900 border-2 border-dashed border-red-200 dark:border-red-900/20 flex flex-col items-center justify-center">
              <div className="bg-white dark:bg-slate-800 px-6 py-5 rounded-2xl shadow-2xl border border-red-50 dark:border-red-900/30 flex items-center gap-4 scale-90 md:scale-100">
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-extrabold text-red-500 uppercase tracking-tighter">Warning</p>
                  <p className="text-base font-bold dark:text-white">AI Notetaker joined the call</p>
                </div>
              </div>
              <p className="mt-6 text-xs text-slate-400 font-medium italic">Joins as an invasive participant</p>
            </div>
          </div>

          {/* Lumina Box */}
          <div className="relative bg-slate-900 p-10 rounded-[3rem] border border-blue-500/30 shadow-2xl shadow-blue-500/10 overflow-hidden">
            <div className="flex justify-center mb-10">
              <div className="flex items-center gap-2 text-white font-display font-bold">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <Sparkles size={14} />
                </div>
                Lumina AI
              </div>
            </div>
            
            <div className="relative aspect-video rounded-3xl bg-slate-950 overflow-hidden group">
              <div className="grid grid-cols-2 w-full h-full">
                <div className="bg-blue-600/5 flex flex-col items-center justify-center border-r border-white/5 transition-colors group-hover:bg-blue-600/10">
                  <Eye className="text-blue-500 mb-3" size={32} />
                  <p className="text-[10px] font-black text-white uppercase tracking-widest">Visible to you</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-slate-950">
                  <EyeOff className="text-slate-600 mb-3" size={32} />
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Invisible to others</p>
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                    <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 16L3 12L7 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="mt-6 text-xs text-slate-500 font-medium">Undetectable screen-share, visible only to you</p>
          </div>
        </div>
      </div>
    </section>
  );
};
