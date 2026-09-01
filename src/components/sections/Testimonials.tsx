import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { TestimonialCard } from '../ui/TestimonialCard';
import * as Lucide from 'lucide-react';

export const Testimonials: React.FC = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

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

  return (
    <section id="testimonials" className="py-20 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Don't just take our word for it. Read how we have helped businesses scale and succeed."
          centered={true}
        />
        
        <div className="relative mt-12 max-w-[95%] mx-auto">
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 shadow-md text-slate-600 hover:text-slate-900 transition-all focus:outline-none"
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
                className="snap-center shrink-0 w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
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
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 shadow-md text-slate-600 hover:text-slate-900 transition-all focus:outline-none"
            aria-label="Next testimonial"
          >
            <Lucide.ChevronRight className="w-7 h-7" />
          </button>
        </div>
      </div>
    </section>
  );
};