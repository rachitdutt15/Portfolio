import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-dark-border bg-slate-50/50 dark:bg-dark-bg/50 backdrop-blur-sm py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          © {new Date().getFullYear()} Built by Rachit Dutt. All rights reserved.
        </p>
        
        <button 
          onClick={scrollToTop}
          className="p-3 rounded-full glass hover:bg-slate-200 dark:hover:bg-dark-card/80 transition-colors group flex items-center justify-center cursor-pointer shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
