import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Get in Touch" 
          subtitle="Have a question or want to work together? Fill out the form below and we will get back to you as soon as possible."
          centered={true}
        />
        
        <div className="mt-12 bg-slate-50 dark:bg-slate-950 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition-colors">
          <form 
            action="https://formspree.io/f/YOUR_FORM_ID" 
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-100 focus:border-transparent outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-100 focus:border-transparent outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-100 focus:border-transparent outline-none transition-colors resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <div className="flex justify-end pt-2">
              <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};