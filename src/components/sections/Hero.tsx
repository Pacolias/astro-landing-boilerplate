import React from 'react';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white dark:bg-slate-900 py-20 lg:py-32 border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">
          Launch Your Next <br className="hidden sm:block" />
          <span className="text-blue-600 dark:text-blue-400">Great Project</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          This is a generic sub-headline designed to capture attention. Clearly state the unique value proposition of the business here to engage visitors immediately.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-8.py-4 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/25 transition-all duration-300"
          >
            Get Started Today
          </button>
          
          <button 
            onClick={() => scrollToSection('services')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
          >
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
};