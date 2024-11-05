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
    <div className="flex flex-col items-center text-center">
      {/* Icon Circle */}
      <div className="w-24 h-24 rounded-full bg-pink-500 flex items-center justify-center mb-4 transform transition-all duration-300 hover:scale-105">
        <Icon className="w-10 h-10 text-white" />
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      
      {/* Description */}
      <p className="text-gray-300 mb-4 px-4">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Growth Marketing",
      icon: Globe,
      description: "Get more lawn care clients with targeted local marketing strategies that bring in high-value customers."
    },
    {
      title: "Lead Generation Website",
      icon: Code,
      description: "Convert visitors into booking requests with our proven lawn care website designs."
    },
    {
      title: "Local SEO",
      icon: Search,
      description: "Show up when homeowners search for lawn care services in your area. Dominate Google Maps."
    },
    {
      title: "Performance Tracking",
      icon: BarChart,
      description: "Track leads, analyze growth, and measure ROI with our easy-to-understand dashboard."
    },
    {
      title: "Mobile Booking",
      icon: Smartphone,
      description: "Let customers book your services 24/7 right from their phones - never miss a lead!"
    },
    {
      title: "Tech Support",
      icon: Settings,
      description: "We handle all the techy stuff so you can focus on growing your lawn care business."
    }
  ];

  return (
    <section className="py-20">
      {/* Hero Section */}
      <div className="relative h-64 mb-16 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/ServicesPage.jpg')] bg-cover bg-center opacity-80" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-200">
              Professional web development and digital marketing solutions
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

      {/* Call to Action */}
      <div className="text-center mt-16">
        <Link href="/contact">
          <Button className="bg-green-600 text-white hover:bg-green-700 px-8 py-3 rounded-full text-lg">
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;