import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { TestimonialCard } from '../ui/TestimonialCard';
import * as Lucide from 'lucide-react';

export const Testimonials: React.FC = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [hasTapped, setHasTapped] = React.useState(false);

  const testimonials = [
    {
      quote: "The team delivered exceptional results ahead of schedule. Their attention to detail and technical expertise completely transformed our online presence.",
      name: "Sarah Jenkins",
      role: "CEO at TechStart"
    },
    {
      quote: "A seamless experience from start to finish. They understood our vision perfectly and built a highly optimized platform that our customers love.",
      name: "Michael Chen",
      role: "Founder at GrowthMetrics"
    },
    {
      quote: "Outstanding communication and top-tier code quality. The new architecture they implemented improved our site performance dramatically.",
      name: "Elena Rodriguez",
      role: "Marketing Director"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const firstChild = scrollContainerRef.current.firstElementChild as HTMLElement;
      if (firstChild) {
        const scrollAmount = firstChild.offsetWidth + 24;
        scrollContainerRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleTap = () => {
    setHasTapped(true);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-14 md:py-20 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Read how we have helped businesses scale and succeed."
          centered={true}
        />

        {/* Mobile: tap-to-advance single-card slider */}
        <div className="md:hidden mt-6">
          <button
            type="button"
            onClick={handleTap}
            className="relative block w-full text-left focus:outline-none"
          >
            <span className="sr-only">Tap this card to see the next review.</span>
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full shrink-0">
                    <TestimonialCard
                      quote={testimonial.quote}
                      name={testimonial.name}
                      role={testimonial.role}
                    />
                  </div>
                ))}
              </div>
            </div>

            {!hasTapped && (
              <span className="pointer-events-none absolute bottom-3 right-3 flex items-center justify-center">
                <span className="absolute inline-flex h-10 w-10 rounded-full bg-blue-500 opacity-40 animate-ping" />
                <span className="relative inline-flex items-center justify-center h-9 w-9 rounded-full bg-blue-600 text-white shadow-lg">
                  <Lucide.Pointer className="w-4 h-4" />
                </span>
              </span>
            )}
          </button>

          <div className="flex justify-center items-center gap-1.5 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to review ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-5 bg-blue-600' : 'w-1.5 bg-slate-300 dark:bg-slate-700'
                }`}
              />
            ))}
          </div>

          {!hasTapped && (
            <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-3">
              Tap the card to see more reviews
            </p>
          )}
        </div>

        {/* Desktop / tablet: scrollable multi-card carousel */}
        <div className="hidden md:block relative mt-12 max-w-[95%] mx-auto">
          <button
            onClick={() => scroll('left')}
            className="flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all focus:outline-none"
            aria-label="Previous testimonial"
          >
            <Lucide.ChevronLeft className="w-7 h-7" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-4 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="snap-center shrink-0 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all focus:outline-none"
            aria-label="Next testimonial"
          >
            <Lucide.ChevronRight className="w-7 h-7" />
          </button>
        </div>
      </div>
    </section>
  );
};