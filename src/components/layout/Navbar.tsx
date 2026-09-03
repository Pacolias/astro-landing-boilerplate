import React from 'react';
import { SITE_CONFIG } from '../../config.ts';
import * as Lucide from 'lucide-react';

const BASE_URL = import.meta.env.BASE_URL;

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'ABOUT', hash: '#about' },
    { name: 'SERVICES', hash: '#services' },
    { name: 'PRICING', hash: '#pricing' },
    { name: 'REVIEWS', hash: '#testimonials' },
    { name: 'LOCATION', hash: '#location' },
  ];

  // Corrige la ruta del botón Booking añadiendo BASE_URL y la barra final (/)
  const ctaHref = SITE_CONFIG.cta.href.startsWith('/') 
    ? `${BASE_URL}${SITE_CONFIG.cta.href.slice(1)}/` 
    : SITE_CONFIG.cta.href;

  // Intercepta el clic en los enlaces del menú para hacer scroll sin recargar
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (window.location.pathname === BASE_URL || window.location.pathname === BASE_URL.slice(0, -1)) {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-100/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-900 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <a href={BASE_URL} className="flex items-center gap-2 flex-shrink-0 group focus:outline-none">
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
                href={`${BASE_URL}${link.hash}`}
                onClick={(e) => handleNavClick(e, link.hash)}
                className="relative text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium text-sm tracking-wide uppercase after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}

            <a
              href={ctaHref}
              className="font-bold uppercase text-xs bg-blue-600 duration-200 hover:bg-blue-500 hover:scale-105 px-4 py-2 rounded-full text-white text-center tracking-widest transition-all inline-block shadow-sm"
            >
              {SITE_CONFIG.cta.text}
            </a>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:scale-105 transition-all duration-200 shadow-sm shrink-0"
            >
              {isDark ? <Lucide.SunMedium className="w-4 h-4" /> : <Lucide.MoonStar className="w-4 h-4" />}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:scale-105 transition-all duration-200 shadow-sm shrink-0"
            >
              {isDark ? <Lucide.SunMedium className="w-4 h-4" /> : <Lucide.MoonStar className="w-4 h-4" />}
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
                href={`${BASE_URL}${link.hash}`}
                onClick={(e) => handleNavClick(e, link.hash)}
                className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-900 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href={ctaHref}
              onClick={() => setIsOpen(false)}
              className="block font-bold uppercase text-xs bg-blue-600 duration-200 hover:bg-blue-500 hover:scale-[1.02] px-4 py-2.5 rounded-full text-white text-center tracking-widest transition-all mt-4 mx-2"
            >
              {SITE_CONFIG.cta.text}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};