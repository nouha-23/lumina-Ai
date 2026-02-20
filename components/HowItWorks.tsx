
import React from 'react';
import { Play, Square, CheckCircle2 } from 'lucide-react';
import { StepProps } from '../types';

const Step: React.FC<StepProps> = ({ number, icon, title, description, showArrow = true }) => (
  <div className="relative group">
    <div className="aspect-video bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all mb-8 overflow-hidden flex items-center justify-center border border-slate-100 dark:border-slate-800">
      <div className="transform group-hover:scale-110 transition-transform">
        {icon}
      </div>
    </div>
    <div className="text-center">
      <h4 className="text-xl font-bold mb-3 dark:text-white flex items-center justify-center gap-3">
        <span className="flex items-center justify-center w-7 h-7 bg-blue-600/10 text-blue-600 rounded-full text-sm font-bold">
          {number}
        </span>
        {title}
      </h4>
      <p className="text-slate-500 dark:text-slate-400 text-sm max-w-[240px] mx-auto leading-relaxed">
        {description}
      </p>
    </div>
    {showArrow && (
      <div className="hidden lg:block absolute top-[25%] -right-8 text-slate-200 dark:text-slate-800">
        <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
          <path d="M1 10H39M39 10L30 1M39 10L30 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    )}
  </div>
);

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-32" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            Meeting notes in 3 steps
          </h2>
          <p className="text-slate-500 dark:text-slate-400">The easiest way to get beautiful, shareable meeting notes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 md:gap-8">
          <Step 
            number={1}
            icon={<Play size={48} className="text-blue-600" fill="currentColor" />}
            title="Start Lumina"
            description="Simply launch Lumina before your meeting begins. No invites needed."
          />
          <Step 
            number={2}
            icon={<Square size={40} className="text-slate-400" fill="currentColor" />}
            title="End Meeting"
            description="Click stop when you're done. No bots to kick out, just close the window."
          />
          <Step 
            number={3}
            icon={<CheckCircle2 size={48} className="text-emerald-500" />}
            title="Get Notes"
            description="Lumina uses what it heard and saw to generate high-fidelity notes."
            showArrow={false}
          />
        </div>
      </div>
    </section>
  );
};
