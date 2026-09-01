import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { SITE_CONFIG } from '../../config.ts';
import * as Lucide from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Visit Our Office" 
          subtitle="Find us in the heart of the city. We would love to meet you in person to discuss your next project."
          centered={true}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact & Hours</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Lucide.MapPin className="w-6 h-6 text-slate-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Address</h4>
                  <p className="text-slate-600 mt-1 leading-relaxed">
                    {SITE_CONFIG.address || '123 Generic Street, City, Country'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Lucide.Phone className="w-6 h-6 text-slate-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Phone</h4>
                  <p className="text-slate-600 mt-1">
                    {SITE_CONFIG.contactPhone || '+1 234 567 8900'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Lucide.Clock className="w-6 h-6 text-slate-400 shrink-0 mt-1" />
                <div className="w-full">
                  <h4 className="font-semibold text-slate-900">Business Hours</h4>
                  <ul className="text-slate-600 mt-2 space-y-2 text-sm">
                    <li className="flex justify-between border-b border-slate-50 pb-2">
                      <span>Monday - Friday:</span> 
                      <span className="font-medium text-slate-900">9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-50 pb-2">
                      <span>Saturday:</span> 
                      <span className="font-medium text-slate-900">10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between pb-2">
                      <span>Sunday:</span> 
                      <span className="font-medium text-slate-400">Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="h-96 lg:h-auto min-h-[300px] w-full rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-200">
            {/* Replace the src URL with your client's actual Google Maps embed link */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.096538466657!2d-122.3950293844075!3d37.79461147975618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c3984d7d%3A0xc6659c943cb9e9d!2sFerry%20Building!5e0!3m2!1sen!2sus!4v1614710156930!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
              className="w-full h-full object-cover"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};