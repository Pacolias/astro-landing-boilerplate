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
    <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-[0_2px_8px_rgb(0,0,0,0.08)] dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col h-full transition-colors">
      <div className="flex gap-1 mb-6 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Lucide.Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'fill-current' : 'text-slate-200 dark:text-slate-700'}`}
          />
        ))}
      </div>
      
      <blockquote className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8 flex-grow">
        "{quote}"
      </blockquote>
      
      <div className="mt-auto flex items-center gap-4">
        <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0">
          <Lucide.User className="w-6 h-6" />
        </div>
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">{name}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{role}</p>
        </div>
      </div>
    </div>
  );
};