import React from 'react';
import Image from 'next/image';
import { Button } from '@/app/components/button';
import Link from 'next/link';

interface TestimonialCardProps {
  logo: string;
  companyName: string;
  image: string;
  quote: string;
  author: string;
  position: string;
  caseStudyLink: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  logo,
  companyName,
  image,
  quote,
  author,
  position,
  caseStudyLink
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-black">
      <div className="h-12 mb-6">
        <Image
          src={logo}
          alt={`${companyName} logo`}
          width={150}
          height={48}
          className="h-full w-auto object-contain"
        />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{companyName}</h2>
      
      <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={`${companyName} case study`}
          fill
          className="object-cover"
        />
      </div>
      
      <blockquote className="text-gray-600 italic mb-4">
        "{quote}"
      </blockquote>
      
      <p className="text-gray-800 font-medium mb-6">
        — {author}, <span className="text-gray-600">{position}</span>
      </p>
      
      <Link href={caseStudyLink}>
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
          READ THE CASE STUDY
        </Button>
      </Link>
    </div>
  );
};

const TestimonialsSection = () => {
  // You can replace these with your actual testimonial data
  const testimonials = [
    {
      logo: "/images/HedgeHoglawncare.png",
      companyName: "HedgeHog Lawn Care",
      image: "/images/PLC-Success.png",
      quote: "Spencer and his team delivered a beautiful MVP in a week. They're fast, quick, and easy to work with for pushing out real time websites.",
      author: "David L",
      position: "Owner/ Operator",
      caseStudyLink: "/hedgehoglawncare"
    },
    {
      logo: "/images/standard.png",
      companyName: "Wichita State University",
      image: "/images/CaseStudy.png",
      quote: "Spencer increased our graduate applications by way more than we anticipated! It was nearly double than it was last year! His expertise is second to no one.",
      author: "Margaret Dawe",
      position: "Associate Director of Fairmount Arts and Sciences College",
      caseStudyLink: "/wsu"
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            See how we've helped businesses achieve their goals
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;