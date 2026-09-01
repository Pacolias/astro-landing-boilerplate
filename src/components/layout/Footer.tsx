import React from 'react';
import { SITE_CONFIG } from '../../config.ts';
import * as Lucide from 'lucide-react';

const ICON_MAP: Record<string, Lucide.LucideIcon> = {
  instagram: Lucide.Instagram,
  whatsapp: Lucide.MessageCircle
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{SITE_CONFIG.siteName}</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              {SITE_CONFIG.siteDescription}
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>{SITE_CONFIG.contactEmail}</li>
              {SITE_CONFIG.contactPhone && <li>{SITE_CONFIG.contactPhone}</li>}
              {SITE_CONFIG.address && <li>{SITE_CONFIG.address}</li>}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Social</h4>
            <div className="flex space-x-4">
              {SITE_CONFIG.socials.map((social) => {
                const IconComponent = ICON_MAP[social.icon];
                
                return (
                  <a 
                    key={social.platform}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label={social.platform}
                  >
                    {IconComponent ? <IconComponent className="h-6 w-6" /> : <span>{social.platform}</span>}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          <p>&copy; {currentYear} {SITE_CONFIG.clientName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};