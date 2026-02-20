
import React from 'react';
import { Zap, Mail, Search, FileText, CheckCircle2 } from 'lucide-react';
import { FeatureCardProps } from '../types';

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, variant, children }) => {
  const styles = {
    blue: 'bg-blue-50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/40',
    slate: 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/50',
    dark: 'bg-slate-900 dark:bg-black border-slate-800 dark:border-slate-900 text-white'
  };

  const iconStyles = {
    blue: 'bg-blue-600 text-white',
    slate: 'bg-white dark:bg-slate-800 text-blue-600 shadow-sm',
    dark: 'bg-blue-600 text-white'
  };

  return (
    <div className={`${styles[variant]} p-10 rounded-[2.5rem] border flex flex-col justify-between transition-all hover:shadow-2xl hover:-translate-y-1 group h-full`}>
      <div>
        <div className={`${iconStyles[variant]} w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:rotate-6`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className={`${variant === 'dark' ? 'text-slate-400' : 'text-slate-600 dark:text-slate-400'} leading-relaxed mb-10`}>
          {description}
        </p>
      </div>
      <div className="mt-auto">
        {children}
      </div>
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-slate-950 transition-colors" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            Intelligence that <br />lives in your workflow
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Stop worrying about manual note-taking. Focus on your goals while Lumina handles the logistics.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-2">
          <FeatureCard 
            variant="blue"
            icon={<Zap size={28} />}
            title="Real-time Answers"
            description="Lumina uses the screen, transcript, and AI to answer questions for you, live. No more 'I'll get back to you on that.'"
          >
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-xl border border-blue-100 dark:border-blue-900/50">
               <div className="flex items-center gap-3 mb-4">
                 <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold">AI</div>
                 <div className="h-3 w-24 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
               </div>
               <div className="space-y-3">
                 <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                 <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                 <div className="h-2 w-4/5 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
               </div>
            </div>
          </FeatureCard>

          <FeatureCard 
            variant="slate"
            icon={<Mail size={28} />}
            title="Instant Follow-up"
            description="Draft perfectly contextualized follow-up emails seconds after your meeting ends. Automatically extracts action items and key takeaways."
          >
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="flex items-center justify-between mb-6">
                 <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-red-400"></div>
                   <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                   <div className="w-2 h-2 rounded-full bg-green-400"></div>
                 </div>
                 <div className="text-[10px] font-bold text-slate-400">Draft saved</div>
              </div>
              <div className="space-y-4">
                <div className="h-2.5 w-1/3 bg-blue-600/10 rounded-full"></div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-slate-50 dark:bg-slate-700/50 rounded-full"></div>
                  <div className="h-2 w-full bg-slate-50 dark:bg-slate-700/50 rounded-full"></div>
                </div>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard 
            variant="slate"
            icon={<Search size={28} />}
            title="Smart Context"
            description="Instantly search the web to provide context about anyone in your meeting. See their role, recent posts, and company news."
          >
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-6 border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 font-bold">JS</div>
                <div>
                  <div className="h-3.5 w-24 bg-slate-100 dark:bg-slate-700 rounded-full mb-2"></div>
                  <div className="h-2 w-32 bg-slate-50 dark:bg-slate-700/50 rounded-full"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-10 bg-slate-50 dark:bg-slate-700/30 rounded-xl"></div>
                <div className="h-10 bg-slate-50 dark:bg-slate-700/30 rounded-xl"></div>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard 
            variant="dark"
            icon={<FileText size={28} />}
            title="Structured Notes"
            description="Lumina creates beautifully formatted, actionable notes that you can export to Notion, Slack, or Salesforce instantly."
          >
            <div className="bg-slate-800 rounded-3xl p-6 space-y-4">
              <div className="h-4 w-32 bg-slate-700 rounded-full mb-2"></div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={14} className="text-blue-500" />
                  <div className="h-2 w-3/4 bg-slate-700 rounded-full"></div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={14} className="text-blue-500" />
                  <div className="h-2 w-1/2 bg-slate-700 rounded-full"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3.5 h-3.5 border border-slate-700 rounded"></div>
                  <div className="h-2 w-2/3 bg-slate-700 rounded-full opacity-40"></div>
                </div>
              </div>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};
