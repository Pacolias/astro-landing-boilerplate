import React from 'react';
import * as Lucide from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  rating?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  rating = 5
}) => {
  return (
    <div className="p-8 bg-slate-50 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full transition-transform hover:-translate-y-1 duration-300">
      <div className="flex gap-1 mb-6 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Lucide.Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'fill-current' : 'text-slate-200'}`}
          />
        ))}
      </div>
      
      <blockquote className="text-slate-700 leading-relaxed mb-8 flex-grow">
        "{quote}"
      </blockquote>
      
      <div className="mt-auto flex items-center gap-4">
        {/* Placeholder avatar, can be replaced with an actual image tag later */}
        <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 shrink-0">
          <Lucide.User className="w-6 h-6" />
        </div>
        <div>
          <p className="font-semibold text-slate-900">{name}</p>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
};