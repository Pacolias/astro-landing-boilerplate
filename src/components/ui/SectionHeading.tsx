import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false
}) => {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};