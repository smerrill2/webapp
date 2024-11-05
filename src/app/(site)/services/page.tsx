import React from 'react';
import { Globe, Code, Search, BarChart, Smartphone, Settings } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/app/components/button';

interface ServiceCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
      {/* Icon Circle */}
      <div className="w-24 h-24 rounded-full bg-pink-500 flex items-center justify-center mb-4 transform transition-all duration-300 hover:scale-105">
        <Icon className="w-10 h-10 text-white" />
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold mb-3 text-black">{title}</h3>
      
      {/* Description */}
      <p className="text-black mb-4 px-4">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Lawn Care Lead Generation & Marketing Funnels",
      icon: Globe,
      description: "Convert high-value lawn care leads with proven marketing funnels, automated lead capture systems, and local digital marketing strategies designed specifically for lawn service businesses."
    },
    {
      title: "High-Converting Lawn Service Website Development",
      icon: Code,
      description: "Custom lawn care website design optimized for lead generation, featuring automated booking systems, client testimonials, and service area optimization to maximize local customer conversions."
    },
    {
      title: "Local Lawn Care SEO & Google Business Optimization",
      icon: Search,
      description: "Dominate local search results with specialized lawn care SEO strategies, Google Business Profile optimization, and targeted local service area marketing to attract qualified lawn maintenance leads."
    },
    {
      title: "Lawn Business Analytics & ROI Tracking",
      icon: BarChart,
      description: "Track lawn service leads, measure marketing ROI, and analyze business growth with our comprehensive dashboard designed for lawn care professionals and landscaping companies."
    },
    {
      title: "24/7 Lawn Service Booking Platform",
      icon: Smartphone,
      description: "Increase lawn care bookings with our mobile-optimized scheduling system, featuring automated quote calculators, service area verification, and instant appointment confirmation for lawn maintenance clients."
    },
    {
      title: "Lawn Care Business Technology Solutions",
      icon: Settings,
      description: "Complete lawn care business management system including CRM integration, automated follow-up sequences, and customer retention tools specifically designed for lawn service companies."
    }
  ];

  return (
    <section className="py-20">
      {/* Hero Section with Dark Overlay */}
      <div className="relative h-64 mb-16 bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/ServicesPage.jpg')] bg-cover bg-center" />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">Lawn Care Marketing & Lead Generation Services</h1>
            <p className="text-xl text-gray-200">
              Professional lawn care business growth solutions: Lead generation, website development, and digital marketing
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      {/* Enhanced Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-black mb-4">Ready to Grow Your Lawn Care Business?</h2>
        <p className="text-black mb-6">Start generating qualified lawn care leads today with our proven marketing system</p>
        <Link href="/contact">
          <Button className="bg-pink-500 text-white hover:bg-pink-600 px-8 py-3 rounded-full text-lg">
            Start Generating Lawn Care Leads
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;