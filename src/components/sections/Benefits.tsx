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
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Why choose us?
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            We provide real value from day one, prioritizing your success above all else.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-100 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
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