import React from 'react';
import { SITE_CONFIG } from '../../config.ts';
import * as Lucide from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'ABOUT', href: '/#about' },
    { name: 'SERVICES', href: '/#services' },
    { name: 'PRICING', href: '/#pricing' },
    { name: 'CONTACT', href: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-100/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-900 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <a href="/" className="flex items-center gap-2 flex-shrink-0 group focus:outline-none">
            {SITE_CONFIG.showLogo && (
              <div className="w-8 h-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                <Lucide.Hexagon className="w-5 h-5" />
              </div>
            )}
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white transition-all duration-300 group-hover:scale-105 origin-left">
              {SITE_CONFIG.siteName}
            </span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="relative text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium text-sm tracking-wide uppercase after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/booking"
              className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all duration-200 shadow-sm"
            >
              Booking
            </a>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg bg-slate-200 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {isDark ? <Lucide.Sun className="w-5 h-5" /> : <Lucide.Moon className="w-5 h-5" />}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg bg-slate-200 dark:bg-slate-900 text-slate-600 dark:text-slate-300"
            >
              {isDark ? <Lucide.Sun className="w-5 h-5" /> : <Lucide.Moon className="w-5 h-5" />}
            </button>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <Lucide.X className="h-6 w-6" /> : <Lucide.Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 transition-colors">
          <div className="px-4 pt-3 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-900 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-blue-600 hover:bg-blue-500 rounded-full text-center transition-all"
            >
              Booking
            </a>
          </div>
        </div>
      )}
    </header>
  );
};