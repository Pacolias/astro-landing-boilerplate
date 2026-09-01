import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import * as Lucide from 'lucide-react';

export const Services: React.FC = () => {
  const offerings = [
    {
      title: 'Core Service One',
      description: 'A detailed description of the first main service or value pillar. Explain how it solves a problem for the client.',
      icon: <Lucide.Rocket className="w-6 h-6" />
    },
    {
      title: 'Core Service Two',
      description: 'A detailed description of the second main service or value pillar. Focus on the benefits and concrete outcomes.',
      icon: <Lucide.Target className="w-6 h-6" />
    },
    {
      title: 'Core Service Three',
      description: 'A detailed description of the third main service or value pillar. Highlight what makes this specific approach unique.',
      icon: <Lucide.Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Our Services" 
          subtitle="Discover how we can help you achieve your goals with our specialized offerings and professional approach."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {offerings.map((offering, index) => (
            <Card 
              key={index}
              title={offering.title}
              description={offering.description}
              icon={offering.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};