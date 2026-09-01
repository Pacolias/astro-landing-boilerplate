import React from 'react';
import * as Lucide from 'lucide-react';

export const LogoTicker: React.FC = () => {
  const logos = [
    { name: 'ACME CORP', icon: Lucide.Briefcase },
    { name: 'QUANTUM', icon: Lucide.Cpu },
    { name: 'GLOBEX', icon: Lucide.Globe },
    { name: 'STARK IND.', icon: Lucide.Zap },
    { name: 'INITECH', icon: Lucide.Printer },
    { name: 'SOYLENT', icon: Lucide.Leaf },
  ];

  const renderLogos = (copy: number) =>
    logos.map((logo, index) => {
      const Icon = logo.icon;

      return (
        <div
          key={`${copy}-${index}`}
          className="flex items-center gap-3.5 px-12 shrink-0 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default select-none"
        >
          <Icon className="w-8 h-8 shrink-0" />
          <span className="text-xl font-bold tracking-wider font-mono whitespace-nowrap">
            {logo.name}
          </span>
        </div>
      );
    });

  return (
    <section className="flex flex-col justify-center min-h-[20vh] lg:min-h-[25vh] py-8 bg-white dark:bg-slate-950 border-b border-slate-200/60 dark:border-slate-900 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 w-full">
        <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Trusted by innovative companies worldwide
        </p>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div 
          className="flex w-max ticker hover:[animation-play-state:paused]"
          style={{ animationDuration: '45s' }}
        >
          <div className="flex shrink-0">
            {renderLogos(1)}
          </div>

          <div className="flex shrink-0" aria-hidden="true">
            {renderLogos(2)}
          </div>

          <div className="flex shrink-0" aria-hidden="true">
            {renderLogos(3)}
          </div>

          <div className="flex shrink-0" aria-hidden="true">
            {renderLogos(4)}
          </div>
        </div>
      </div>
    </section>
  );
};