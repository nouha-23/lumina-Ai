
import React, { useState } from 'react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] glass p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl z-[100] animate-in slide-in-from-bottom-4 duration-500">
      <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
        We use cookies to enhance your experience, analyze site traffic, and serve targeted marketing. Some cookies are essential for our service to work correctly. You can accept or manage your preferences below.
      </p>
      <div className="flex items-center justify-between gap-4">
        <button 
          onClick={() => setIsVisible(false)}
          className="text-[11px] font-bold text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
        >
          Manage preferences
        </button>
        <button 
          onClick={() => setIsVisible(false)}
          className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
        >
          Accept all cookies
        </button>
      </div>
    </div>
  );
};
