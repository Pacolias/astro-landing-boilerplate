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
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-300 py-12 border-t border-slate-200 dark:border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            {/* Brand section updated with Logo */}
            <div className="flex items-center gap-2 mb-4">
              {SITE_CONFIG.showLogo && (
                <div className="w-8 h-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg flex items-center justify-center transition-colors">
                  <Lucide.Hexagon className="w-5 h-5" />
                </div>
              )}
              <h3 className="text-slate-900 dark:text-white font-bold text-lg tracking-tight">
                {SITE_CONFIG.siteName}
              </h3>
            </div>
            
            <p className="text-sm leading-relaxed max-w-xs text-slate-500 dark:text-slate-400">
              {SITE_CONFIG.siteDescription}
            </p>
          </div>
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>{SITE_CONFIG.contactEmail}</li>
              {SITE_CONFIG.contactPhone && <li>{SITE_CONFIG.contactPhone}</li>}
              {SITE_CONFIG.address && <li>{SITE_CONFIG.address}</li>}
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Social</h4>
            <div className="flex space-x-4">
              {SITE_CONFIG.socials.map((social) => {
                const IconComponent = ICON_MAP[social.icon];
                
                return (
                  <a 
                    key={social.platform}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    aria-label={social.platform}
                  >
                    {IconComponent ? <IconComponent className="h-6 w-6" /> : <span>{social.platform}</span>}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-900 text-sm text-center text-slate-500 dark:text-slate-400">
          <p>&copy; {currentYear} {SITE_CONFIG.clientName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};