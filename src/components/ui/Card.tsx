import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  icon, 
  className = '' 
}) => {
  return (
    <div className={`p-6 bg-white rounded-xl shadow-sm border border-slate-100 transition-shadow hover:shadow-md ${className}`}>
      {icon && (
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-lg bg-slate-50 text-slate-900 mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-slate-900 mb-2">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};