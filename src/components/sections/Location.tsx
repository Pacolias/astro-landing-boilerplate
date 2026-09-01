import React from 'react';
import { SITE_CONFIG } from '../../config.ts';
import * as Lucide from 'lucide-react';

export const Location: React.FC = () => {
  // Structured JSON-LD Schema so Google understands exactly what this business is and where it operates
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": SITE_CONFIG.siteName,
    "image": "https://your-domain.com/logo.svg",
    "description": SITE_CONFIG.siteDescription,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE_CONFIG.address,
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "postalCode": "33101",
      "addressCountry": "US"
    },
    "telephone": SITE_CONFIG.contactPhone,
    "email": SITE_CONFIG.contactEmail,
    "openingHours": "Mo-Fr 09:00-18:00",
    "url": "https://your-domain.com"
  };

  return (
    <section id="location" className="py-24 bg-slate-100 dark:bg-slate-950 transition-colors border-b border-slate-200 dark:border-slate-800">
      {/* Invisible Schema injection for search engines */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight sm:text-4xl mb-4">
                We are in the heart of Miami
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Come visit us or contact us to schedule a meeting. We are ready to boost your next project.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <Lucide.MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Address</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">{SITE_CONFIG.address}</p>
                  <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">33101 Miami, FL, United States</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <Lucide.Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Business Hours</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">Monday - Friday: 09:00 AM - 06:00 PM</p>
                  <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">Saturday and Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <Lucide.Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Contact</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">{SITE_CONFIG.contactPhone}</p>
                  <p className="text-slate-600 dark:text-slate-400">{SITE_CONFIG.contactEmail}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl shadow-slate-900/5 dark:shadow-none border border-slate-200/80 dark:border-slate-800 relative bg-slate-200 dark:bg-slate-800">
            <iframe 
              src="https://maps.google.com/maps?q=Miami,%20FL,%20USA&t=&z=12&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', inset: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Miami Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};