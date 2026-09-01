import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading 
              title="About Us" 
              subtitle="We build digital experiences that drive growth and deliver measurable results for our partners."
              centered={false}
            />
            <p className="mt-6 text-slate-600 dark:text-slate-300 leading-relaxed">
              Founded with a vision to bridge the gap between design and performance, our team specializes in creating high-converting landing pages. We believe that a website should not only look stunning but also serve as a powerful engine for your business.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">50+</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Projects Delivered</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">99%</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-500/10 rounded-2xl border border-blue-500/20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};