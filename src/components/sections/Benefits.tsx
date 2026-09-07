import React from 'react';
import * as Lucide from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Fast Response',
      description: 'We assist you without unnecessary delays so your project can start today.',
      icon: Lucide.Zap
    },
    {
      title: 'Personalized Service',
      description: 'We adapt to what you truly need, designing tailor-made solutions.',
      icon: Lucide.Target
    },
    {
      title: 'Guaranteed Quality',
      description: 'We work with the highest standards to ensure flawless and lasting results.',
      icon: Lucide.ShieldCheck
    }
  ];

  return (
    <section className="py-14 md:py-24 bg-white dark:bg-slate-900 transition-colors border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-16">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
            Why choose us?
          </h2>
          <p className="mt-2 md:mt-4 text-sm md:text-lg text-slate-600 dark:text-slate-400">
            We provide real value from day one, prioritizing your success above all else.
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-4 sm:-mx-6 px-4 sm:px-6 pb-1 md:grid md:grid-cols-3 md:gap-8 md:mx-0 md:px-0 md:pb-0 md:overflow-visible md:snap-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="snap-center shrink-0 w-[78vw] sm:w-[55vw] md:w-auto md:shrink flex flex-col items-center text-center p-6 md:p-8 rounded-3xl bg-slate-100 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-sm transition-all duration-300 md:hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3 md:mb-6 text-blue-600 dark:text-blue-400">
                  <Icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};