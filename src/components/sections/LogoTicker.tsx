import React from 'react';
import * as Lucide from 'lucide-react';

export const LogoTicker: React.FC = () => {
  // Generic placeholder logos using Lucide icons and text
  const logos = [
    { name: 'Acme Corp', icon: Lucide.Briefcase },
    { name: 'Quantum', icon: Lucide.Cpu },
    { name: 'Globex', icon: Lucide.Globe },
    { name: 'Stark Ind.', icon: Lucide.Zap },
    { name: 'Initech', icon: Lucide.Printer },
    { name: 'Soylent', icon: Lucide.Leaf },
  ];

  return (
    <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-8">
          Trusted by innovative companies worldwide
        </p>
        
        {/* Mask image creates a smooth fade effect on the left and right edges */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* The container that animates. We pause it on hover for better UX. */}
          <div className="flex flex-none animate-marquee hover:[animation-play-state:paused]">
            
            {/* First set of logos */}
            <div className="flex flex-none gap-16 pr-16 items-center">
              {logos.map((logo, index) => {
                const Icon = logo.icon;
                return (
                  <div key={`logo-1-${index}`} className="flex items-center gap-2 text-slate-400 dark:text-slate-500 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:text-slate-900 dark:hover:text-white transition-all duration-300">
                    <Icon className="w-8 h-8" />
                    <span className="text-xl font-bold">{logo.name}</span>
                  </div>
                );
              })}
            </div>
            
            {/* Second set (exact duplicate required for the seamless loop) */}
            <div className="flex flex-none gap-16 pr-16 items-center" aria-hidden="true">
              {logos.map((logo, index) => {
                const Icon = logo.icon;
                return (
                  <div key={`logo-2-${index}`} className="flex items-center gap-2 text-slate-400 dark:text-slate-500 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:text-slate-900 dark:hover:text-white transition-all duration-300">
                    <Icon className="w-8 h-8" />
                    <span className="text-xl font-bold">{logo.name}</span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};