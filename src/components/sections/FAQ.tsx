import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import * as Lucide from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Most landing page projects are completed within 2 to 4 weeks, depending on the complexity of the design, the number of revisions, and how quickly you can provide the necessary content and feedback."
    },
    {
      question: "Do you provide web hosting services?",
      answer: "We focus exclusively on development and design. However, we will set up the initial deployment for you on fast, secure platforms like Vercel or Netlify, and guide you through the process of connecting your custom domain."
    },
    {
      question: "What is your payment structure?",
      answer: "We typically require a 50% deposit upfront to secure your spot in our schedule, with the remaining 50% due upon project completion and before the final handover of the source code or live deployment."
    },
    {
      question: "Can I update the website myself after it is finished?",
      answer: "Yes! Since the codebase is clean and well-structured, you or any developer can easily update the content. If you need a full Content Management System (CMS) to edit without touching code, let us know and we can integrate one."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Find answers to common questions about our process, pricing, and services."
          centered={true}
        />
        
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className="bg-slate-100 dark:bg-slate-950 p-6 rounded-xl shadow-sm border border-slate-200/80 dark:border-slate-800 transition-colors"
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center font-semibold cursor-pointer text-slate-900 dark:text-white text-left focus:outline-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className={`transform transition-transform duration-300 ease-in-out flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <Lucide.ChevronDown className="w-5 h-5 text-slate-400 dark:text-slate-500" />
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                  }`}
                >
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};