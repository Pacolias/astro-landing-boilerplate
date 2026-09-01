import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import * as Lucide from 'lucide-react';

export const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$999',
      period: 'one-time',
      description: 'Perfect for small businesses needing a professional online presence quickly.',
      features: [
        'Custom Landing Page',
        'Mobile Responsive Design',
        'Basic SEO Setup',
        'Contact Form Integration',
        '1 Revision Round'
      ],
      isPopular: false,
      ctaText: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: 'one-time',
      description: 'Ideal for growing companies requiring advanced integrations and higher conversions.',
      features: [
        'Multi-page Setup (Up to 5)',
        'Advanced Animations & Interactions',
        'CMS Integration (Contentful/Sanity)',
        'Comprehensive Technical SEO',
        '3 Revision Rounds',
        'Google Analytics Setup'
      ],
      isPopular: true,
      ctaText: 'Start Building'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'tailored',
      description: 'Full-scale digital platforms for established brands demanding the absolute best.',
      features: [
        'Unlimited Pages & CMS Models',
        'Custom Web Application Logic',
        'E-commerce Capabilities',
        'A/B Testing Setup',
        'Priority 24/7 Support',
        'Unlimited Revisions'
      ],
      isPopular: false,
      ctaText: 'Contact Us'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Transparent Pricing" 
          subtitle="Choose the perfect package for your business. No hidden fees, just predictable, high-quality development."
          centered={true}
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-8 rounded-2xl border transition-colors ${
                plan.isPopular 
                  ? 'border-2 border-blue-600 dark:border-blue-500 bg-white dark:bg-slate-950 text-slate-900 dark:text-white shadow-xl md:-translate-y-4' 
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="text-sm leading-relaxed h-10 text-slate-500 dark:text-slate-400">
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">{plan.price}</span>
                  {plan.period !== 'tailored' && (
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      / {plan.period}
                    </span>
                  )}
                </div>
              </div>
              
              <ul className="mb-8 space-y-4 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Lucide.Check className={`w-5 h-5 shrink-0 ${plan.isPopular ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}`} />
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`block w-full py-3.5 px-6 rounded-full font-bold text-xs uppercase tracking-widest text-center transition-all duration-200 shadow-sm ${
                  plan.isPopular
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700'
                }`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};