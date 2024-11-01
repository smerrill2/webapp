import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const TestimonialHeader = () => (
  <div className="text-center mb-8 md:mb-16 px-4">
    <p className="text-xl text-gray-600 mb-4">TESTIMONIALS</p>
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 md:mb-12 text-gray-900">
      <span className="block">TRUSTED WEB DESIGNER</span>
      <span className="block">ACROSS NORTH AMERICA</span>
    </h1>
    <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
      We have helped lawn care professionals all over the US transform their businesses with modern digital solutions. 
      We are invested in our clients' success just as much as they are in growing their companies. 
      When you work with LawnLogic, you aren't just working with a service provider, you're working with a dedicated growth partner.
    </p>
  </div>
);

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

const TestimonialCard = ({ name, role, content, image }: TestimonialCardProps) => (
  <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md min-w-[300px] md:min-w-[500px] h-[250px] md:h-[300px] flex flex-col">
    <div className="flex items-center mb-4">
      <div className="w-16 h-16 relative"> {/* Add fixed container */}
        <Image
          src={image}
          alt={`${name}'s testimonial`}
          width={64}
          height={64}
          className="rounded-full object-cover" // Add object-cover
          style={{ width: '64px', height: '64px' }} // Force consistent dimensions
          priority
        />
      </div>
      <div className="ml-4"> {/* Add margin for spacing */}
        <h3 className="font-semibold text-xl md:text-2xl text-gray-900">{name}</h3>
        <p className="text-base md:text-lg text-gray-600">{role}</p>
      </div>
    </div>
    <p className="text-base md:text-lg text-gray-700 leading-relaxed overflow-hidden">{content}</p>
  </div>
);

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

interface SlidingTestimonialsProps {
  testimonials: Testimonial[];
}

const SlidingTestimonials: React.FC<SlidingTestimonialsProps> = ({ testimonials }) => {
  const [position, setPosition] = useState(0);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const cardWidth = isMobile ? 300 : 500;
  const totalCards = testimonials.length;
  const gap = isMobile ? 16 : 32;
  const fullWidth = (cardWidth + gap) * totalCards;

  useEffect(() => {
    const animate = () => {
      setPosition((prevPos) => {
        if (prevPos <= -fullWidth) {
          return 0;
        }
        return prevPos - 1;
      });
    };

    const animationFrame = setInterval(animate, 30);
    return () => clearInterval(animationFrame);
  }, [fullWidth]);

  return (
    <section className="py-12 md:py-24 overflow-hidden bg-white">
      <div className="container mx-auto">
        <TestimonialHeader />
        
        <div className="relative mt-8 md:mt-16">
          <div 
            className="flex gap-4 md:gap-8"
            style={{ 
              transform: `translateX(${position}px)`,
              transition: 'transform 0.05s linear'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlidingTestimonials;
export type { SlidingTestimonialsProps };