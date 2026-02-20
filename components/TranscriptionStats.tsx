
import React from 'react';
import { StatItemProps } from '../types';

const StatItem: React.FC<StatItemProps> = ({ value, label, description }) => (
  <div className="flex items-start gap-8">
    <div className="text-4xl md:text-5xl font-extrabold text-blue-600 w-32 tabular-nums">
      {value}
    </div>
    <div className="flex-1">
      <h4 className="text-xl font-bold mb-2 dark:text-white">{label}</h4>
      <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  </div>
);

export const TranscriptionStats: React.FC = () => {
  return (
    <section className="py-32" id="stats">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="bg-slate-100 dark:bg-slate-900 p-8 md:p-14 rounded-[3.5rem] border border-slate-200 dark:border-slate-800">
              <div className="bg-white dark:bg-slate-950 p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between mb-10">
                  <div className="h-4 w-32 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <h5 className="text-2xl font-bold mb-6 dark:text-white leading-snug">
                  Strategic Growth and Client Relationship Management
                </h5>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                      JD
                    </div>
                    <div className="space-y-2 w-full pt-1.5">
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                      <div className="h-2 w-5/6 bg-slate-100 dark:bg-slate-800 rounded-full opacity-50"></div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-600/10 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                      AS
                    </div>
                    <div className="space-y-2 w-full pt-1.5">
                      <div className="h-2 w-3/4 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 dark:text-white">
              Real-time transcription
            </h2>
            <div className="space-y-16">
              <StatItem 
                value="12+" 
                label="Languages" 
                description="We support over 12 different languages, including English, Chinese, Spanish, French, German and more."
              />
              <StatItem 
                value="300ms" 
                label="Response time" 
                description="We have the fastest live transcription available. Test us against any other competitor on the market."
              />
              <StatItem 
                value="95%" 
                label="Transcription accuracy" 
                description="Trusted by thousands of teams for reliable transcription. All processed with industry-leading precision."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
