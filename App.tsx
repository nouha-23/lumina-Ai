
import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  Sparkles,
  Search,
  Zap,
  CheckCircle2,
  ChevronDown,
  Github,
  Twitter,
  Linkedin,
  ArrowRight,
  Sun,
  Moon,
  MessageSquare,
  Cpu,
  Loader2
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// Sub-components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { UndetectableSection } from './components/UndetectableSection';
import { TranscriptionStats } from './components/TranscriptionStats';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';

const InteractiveDemo: React.FC = () => {
  const [transcript, setTranscript] = useState("Alex: We need to increase our conversion rate on the checkout page.\nSarah: I agree. Let's A/B test a single-page checkout versus the current 3-step process.\nAlex: Good idea. Sarah, can you have a prototype ready by Friday?\nSarah: Sure thing. I'll also check with the engineering team about implementation hurdles.");
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const runDemo = async () => {
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as Lumina AI. Given this meeting transcript, provide a professional 'Lumina Insight' including 3 bulleted Action Items and a 1-sentence Summary. Format it beautifully with markdown. \n\nTranscript: ${transcript}`,
      });
      setResult(response.text);
    } catch (error) {
      console.error(error);
      setResult("Error generating insight. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-32 bg-white dark:bg-slate-950 overflow-hidden" id="demo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-6">
              <Cpu size={14} />
              <span>Experience Lumina AI</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 dark:text-white leading-tight">
              See the brain <br />behind the meeting.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg leading-relaxed">
              Paste a snippet of your meeting transcript here to see how Lumina extracts intelligence instantly.
            </p>
            <div className="relative group">
              <textarea 
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
                className="w-full h-48 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 text-sm text-slate-700 dark:text-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none shadow-inner"
                placeholder="Paste your meeting snippet..."
              />
              <button 
                onClick={runDemo}
                disabled={isLoading}
                className="absolute bottom-4 right-4 bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all disabled:opacity-50 shadow-xl shadow-blue-500/20 active:scale-95"
              >
                {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Zap size={18} />}
                {isLoading ? 'Processing...' : 'Generate Insight'}
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative">
               {/* Background Glow */}
               <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[3rem] opacity-20 blur-2xl -z-10"></div>
               
               <div className="min-h-[400px] bg-slate-900 rounded-[3rem] p-10 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col">
                  <div className="flex items-center justify-between mb-10">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                          <Sparkles size={20} />
                        </div>
                        <span className="text-white font-display font-bold">Lumina Lab</span>
                     </div>
                     <div className="flex gap-1.5">
                       <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                       <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                       <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                     </div>
                  </div>

                  <div className="flex-1 text-slate-300 space-y-6 leading-relaxed">
                    {!result && !isLoading && (
                      <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-slate-600 mb-2">
                           <MessageSquare size={32} />
                        </div>
                        <p className="text-slate-500 italic max-w-xs">Enter a transcript on the left to see the AI output here.</p>
                      </div>
                    )}
                    
                    {isLoading && (
                      <div className="space-y-6">
                        <div className="h-4 w-1/3 bg-slate-800 rounded-full animate-pulse"></div>
                        <div className="space-y-3">
                          <div className="h-3 w-full bg-slate-800 rounded-full animate-pulse"></div>
                          <div className="h-3 w-5/6 bg-slate-800 rounded-full animate-pulse delay-75"></div>
                          <div className="h-3 w-4/6 bg-slate-800 rounded-full animate-pulse delay-150"></div>
                        </div>
                        <div className="h-20 w-full bg-slate-800 rounded-3xl animate-pulse delay-300"></div>
                      </div>
                    )}

                    {result && !isLoading && (
                      <div className="animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="prose prose-invert prose-sm">
                           <div className="whitespace-pre-wrap">{result}</div>
                        </div>
                        <div className="mt-10 pt-6 border-t border-slate-800 flex items-center justify-between">
                           <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                             <Cpu size={12} />
                             Powered by Gemini 3 Flash
                           </div>
                           <button className="text-[10px] font-bold text-blue-500 uppercase tracking-widest hover:text-blue-400">
                             Copy Result
                           </button>
                        </div>
                      </div>
                    )}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-600/30">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <InteractiveDemo />
        <UndetectableSection />
        <TranscriptionStats />
        <FAQ />
        
        {/* Call to Action Banner */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto bg-blue-600 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-[0_20px_100px_rgba(37,99,235,0.4)]">
            <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
              <Sparkles size={400} strokeWidth={0.5} />
            </div>
            <div className="absolute -top-10 -left-10 opacity-10 pointer-events-none rotate-180">
              <Sparkles size={200} strokeWidth={0.5} />
            </div>
            
            <h2 className="text-3xl md:text-6xl font-display font-bold mb-8 leading-[1.1]">
              Elevate every conversation.
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
              Join 50,000+ elite professionals who use Lumina to stay invisible and indispensable.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl hover:bg-slate-50 active:scale-95">
                <Monitor size={20} />
                Download for Desktop
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-blue-700/30 border border-white/20 rounded-2xl font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                Talk to Sales
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default App;
