import React from 'react';
import { SITE_CONFIG } from '../../config.ts';
import * as Lucide from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Location', href: '/#location' },
    { name: 'Booking', href: '/booking' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <a href="/" className="flex items-center gap-2 flex-shrink-0 group focus:outline-none">
            {SITE_CONFIG.showLogo && (
              <div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                <Lucide.Hexagon className="w-5 h-5" />
              </div>
            )}
            <span className="font-bold text-xl tracking-tight text-slate-900 group-hover:text-slate-700 transition-colors">
              {SITE_CONFIG.siteName}
            </span>
          </a>
          
          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <Lucide.X className="h-6 w-6" /> : <Lucide.Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};