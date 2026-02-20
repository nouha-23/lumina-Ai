
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 dark:border-slate-800 py-2">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-6 text-left group"
      >
        <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
          {question}
        </span>
        <ChevronDown 
          className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          size={24} 
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Why real-time vs. a regular AI notetaker?",
      answer: "Traditional AI notetakers join as a 'bot' participant which can be distracting and invasive. Lumina works directly on your desktop, allowing it to provide live assistance and notes without anyone else knowing it's there. No bot in the participant list means 100% focus on the conversation."
    },
    {
      question: "Who is Lumina for?",
      answer: "Lumina is perfect for Sales professionals who need to answer complex product questions on the fly, Executives who want high-fidelity summaries without manual effort, and Recruiters who need to stay focused on candidates while capturing details."
    },
    {
      question: "Is Lumina free?",
      answer: "We offer a 'Free Forever' tier that includes 5 meetings per month. For heavy users and teams, we have Pro and Enterprise plans with unlimited meetings, advanced transcription, and team collaboration features."
    },
    {
      question: "How is it undetectable in meetings?",
      answer: "Lumina uses a proprietary desktop capture method that captures system audio and screen pixels directly from your OS. It doesn't use the standard WebRTC 'share screen' APIs that trigger indicators in Zoom, Microsoft Teams, or Google Meet."
    }
  ];

  return (
    <section className="py-32 bg-white dark:bg-slate-950 transition-colors" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center font-display text-4xl md:text-5xl font-bold mb-20 dark:text-white">
          Frequently asked questions
        </h2>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};
