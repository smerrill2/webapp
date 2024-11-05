import React, { useState } from 'react';
import {
  Smartphone,
  BarChart2,
  Code,
  Timer,
  Shield,
  Headphones,
  ChevronRight
} from 'lucide-react';


const GrassSVG = () => (
  <svg 
    className="w-full h-24"
    viewBox="0 0 400 96" 
    preserveAspectRatio="none"
  >
    {Array.from({ length: 30 }).map((_, i) => (
      <path
        key={`grass-${i}`}
        d={`M${i * 13 - 5},96 
          C${i * 13},${70 + Math.random() * 10} 
          ${i * 13 + 5},${80 + Math.random() * 10} 
          ${i * 13 + 10},96`}
        fill={`hsl(142, ${60 + Math.random() * 20}%, ${30 + Math.random() * 10}%)`}
        opacity={0.5 + Math.random() * 0.5}
      />
    ))}
  </svg>
);

interface ServiceCardProps {
  title: string;
  icon: React.ElementType;
  description: string;
  extendedInfo: string[];
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  icon: Icon, 
  description, 
  extendedInfo, 
  link 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    if (window.innerWidth >= 768) {
      setIsHovered(!isHovered);
    }
  };

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setIsHovered(!isHovered);
    }
  };

  return (
    <div 
      className="relative overflow-hidden group
        bg-white hover:!bg-black
        transition-all duration-500 hover:shadow-xl rounded-lg
        aspect-square lg:aspect-square cursor-pointer"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={handleClick}
     >
      {/* Content Container */}
      <div className="relative p-6 h-full z-10 flex flex-col">
        {/* Icon */}
        <div 
          className="absolute top-6 left-6 w-14 h-14 rounded-xl
            bg-green-600 group-hover:bg-white
            flex items-center justify-center transition-all duration-300
            group-hover:scale-110 group-hover:rotate-3"
        >
          <Icon 
            size={24} 
            className="transition-colors duration-300
              text-white group-hover:text-black" 
          />
        </div>

        {/* Initial Content */}
        <div className="pt-20 flex-grow">
          <h3 className="text-xl font-bold mb-4 transition-colors duration-300
            text-gray-900 group-hover:text-white">
            {title}
          </h3>
          
          {/* Main Description - Fades out on hover */}
          <p className="mb-4 transition-all duration-300 
            text-gray-600 group-hover:opacity-0 group-hover:translate-y-[-1rem]">
            {description}
          </p>

          {/* Extended Info - Fades in on hover */}
          <div className="absolute inset-x-6 transition-all duration-500 
            opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
            <ul className="space-y-2 text-gray-100">
                {extendedInfo.map((info: string, index: number) => (
                <li key={index} className="flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  {info}
                </li>
                ))}
            </ul>
          </div>

          {/* Link */}
          <a 
            href={link}
            className="absolute bottom-6 left-6 right-6 text-sm font-semibold 
              transition-all duration-300
              text-green-600 group-hover:text-white
              flex items-center gap-2
              after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:w-full after:h-px after:bg-current 
              after:origin-right after:scale-x-0 group-hover:after:scale-x-100 
              after:transition-transform after:duration-300"
          >
            Learn More
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Grass SVG */}
      <div className="absolute inset-x-0 bottom-0 transition-all duration-500 
        translate-y-full group-hover:translate-y-0">
        <GrassSVG />
      </div>
    </div>
  );
};

// Update service item type
interface ServiceItem {
  title: string;
  icon: React.ElementType;
  description: string;
  extendedInfo: string[];
  link: string;
}

// Services data
const services: ServiceItem[] = [
  {
    title: "MOBILE FIRST",
    icon: Smartphone,
    description: "We start building your site for mobile devices first making sure the code is as lean and optimized with no bloated waste.",
    extendedInfo: [
      "Optimized for all screen sizes",
      "Fast loading on mobile networks",
      "Touch-friendly interface design",
      "Progressive web app capable"
    ],
    link: "/services"
  },
  {
    title: "SEO OPTIMIZATION",
    icon: BarChart2,
    description: "We make sure you're on the top page. Our proven SEO strategies keep you ranking high.",
    extendedInfo: [
      "Keyword research and analysis",
      "On-page SEO optimization",
      "Technical SEO implementation",
      "Monthly performance reports"
    ],
    link: "/services"
  },
  {
    title: "HAND CODED",
    icon: Code,
    description: "Every website is custom coded from scratch ensuring the highest quality and performance.",
    extendedInfo: [
      "Clean, semantic HTML5",
      "Modern CSS3 techniques",
      "Optimized JavaScript",
      "Best coding practices"
    ],
    link: "/services"
  },
  {
    title: "OPTIMIZED SPEED",
    icon: Timer,
    description: "Lightning-fast load times under 1 second, ensuring you never lose visitors to slow loading.",
    extendedInfo: [
      "Image optimization",
      "Code minification",
      "Browser caching",
      "Content delivery networks"
    ],
    link: "/services"
  },
  {
    title: "SECURE HOSTING",
    icon: Shield,
    description: "Enterprise-grade security and reliable hosting keep your site safe and fast.",
    extendedInfo: [
      "SSL certificate included",
      "Daily backups",
      "Firewall protection",
      "24/7 monitoring"
    ],
    link: "/services"
  },
  {
    title: "24/7 SUPPORT",
    icon: Headphones,
    description: "Round-the-clock support ensures your website runs smoothly at all times.",
    extendedInfo: [
      "Immediate response time",
      "Direct phone support",
      "Email ticket system",
      "Emergency assistance"
    ],
    link: "/services"
  }
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Quote and Stars */}
        <div className="text-center mb-16">
          <div className="flex justify-center gap-2 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={i} 
                className="text-green-500 text-2xl transform transition-transform hover:scale-110"
              >
                ★
              </div>
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our 5-Star Design
          </h2>
          <p className="text-xl text-gray-600 italic">
            "We offer best in class service without anything holding us back"
          </p>
          <p className="text-green-600 mt-2">- Spencer M. </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;