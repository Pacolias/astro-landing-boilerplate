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
    <section id="services" className="py-20 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Our Services" 
          subtitle="Comprehensive digital solutions tailored to accelerate your growth and maximize conversion."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {offerings.map((service, index) => (
            <div 
              key={index}
              className="p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-800 flex flex-col transition-all hover:-translate-y-1 duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
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