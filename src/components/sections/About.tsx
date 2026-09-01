import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import * as Lucide from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading 
              title="About Us" 
              subtitle="We build digital experiences that drive growth and deliver measurable results for our partners."
              centered={false}
            />
            <p className="mt-6 text-slate-600 leading-relaxed">
              Founded with a vision to bridge the gap between design and performance, our team specializes in creating high-converting landing pages. We believe that a website should not only look stunning but also serve as a powerful engine for your business.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-4xl font-bold text-slate-900 mb-2">50+</h4>
                <p className="text-sm text-slate-500 font-medium">Projects Delivered</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-slate-900 mb-2">99%</h4>
                <p className="text-sm text-slate-500 font-medium">Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-slate-50 overflow-hidden flex items-center justify-center border border-slate-200 shadow-sm">
              <Lucide.Image className="w-24 h-24 text-slate-300" />
            </div>
            {/* Decorative background element for premium feel */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-slate-100 rounded-2xl border border-slate-200 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};