import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import * as Lucide from 'lucide-react';

export const Services: React.FC = () => {
  const offerings = [
    {
      title: 'Core Service One',
      description: 'A detailed description of the first main service or value pillar. Explain how it solves a problem for the client.',
      icon: <Lucide.Rocket className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      title: 'Core Service Two',
      description: 'A detailed description of the second main service or value pillar. Focus on the benefits and concrete outcomes.',
      icon: <Lucide.Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      title: 'Core Service Three',
      description: 'A detailed description of the third main service or value pillar. Highlight what makes this specific approach unique.',
      icon: <Lucide.Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    }
  ];

  return (
    <section id="services" className="min-h-[calc(100svh-4rem)] flex flex-col justify-center py-10 md:min-h-0 md:block md:py-20 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive digital solutions tailored to accelerate your growth and maximize conversion."
          centered={true}
        />

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-4 sm:-mx-6 px-4 sm:px-6 pb-1 mt-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-3 md:gap-8 md:mt-12 md:mx-0 md:px-0 md:pb-0 md:overflow-visible md:snap-none">
          {offerings.map((service, index) => (
            <div
              key={index}
              className="snap-center shrink-0 w-[78vw] sm:w-[55vw] md:w-auto md:shrink p-5 md:p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-800 flex flex-col transition-all md:hover:-translate-y-1 duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center mb-3 md:mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};