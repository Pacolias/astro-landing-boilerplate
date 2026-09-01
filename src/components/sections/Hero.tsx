import React from 'react';
import { Button } from '../ui/Button';

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
          <Button 
            variant="primary" 
            size="lg" 
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto"
          >
            Get Started Today
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => scrollToSection('services')}
            className="w-full sm:w-auto"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
};