import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { TestimonialCard } from '../ui/TestimonialCard';

export const Testimonials: React.FC = () => {
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

  return (
    <section id="testimonials" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Don't just take our word for it. Read how we have helped businesses scale and succeed."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};