import React from 'react';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative py-28 lg:py-40 bg-cover bg-center border-b border-slate-200/60 dark:border-slate-900 overflow-hidden transition-colors"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80')" }}
    >
      {/* Balanced gradient overlay to ensure text contrast across light and dark modes */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/90 to-white/95 dark:from-slate-950/90 dark:via-slate-950/85 dark:to-slate-950/95 transition-colors"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
          Launch Your Next <br className="hidden sm:block" />
          <span className="text-blue-600 dark:text-blue-400">Great Project</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          This is a generic sub-headline designed to capture attention. Clearly state the unique value proposition of the business here to engage visitors immediately.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-blue-500/25 transition-all duration-200"
          >
            Booking
          </button>
          
          <button 
            onClick={() => scrollToSection('services')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs uppercase tracking-widest bg-white/50 dark:bg-slate-900/50 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-200 backdrop-blur-sm"
          >
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
};