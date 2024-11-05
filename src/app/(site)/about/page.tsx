'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/app/components/button';
import { LinkedinIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';

const teamMembers = [
  {
    name: "Spencer M.",
    role: "CEO & Founder",
    image: "/images/spencerm.jpg",
    description: "A visionary entrepreneur with a passion for digital innovation. Combines deep industry knowledge with technical expertise to help lawn care businesses thrive in the digital age. Personally oversees each client's growth strategy and maintains high standards across all projects.",
    expertise: ["Strategic Planning", "Business Development", "Digital Innovation", "Client Relations"],
    linkedin: "https://www.linkedin.com/in/spencermerrill",
    email: "spencer@lawnlogic.agency"
  },
  {
    name: "Sarah J.",
    role: "Lead Designer",
    image: "/images/SarahJ.jpg",
    description: "An accomplished UI/UX designer with an eye for creating beautiful, functional websites. Specializes in translating lawn care businesses' unique value propositions into compelling visual stories. Ensures every design element serves both aesthetics and user experience.",
    expertise: ["UI/UX Design", "Brand Identity", "Responsive Design", "User Research"],
    linkedin: "#",
    email: "design@lawnlogic.agency"
  },
  {
    name: "Michael R.",
    role: "Technical Lead",
    image: "/images/MichaelR.jpg",
    description: "A skilled developer with expertise in modern web technologies. Focuses on creating fast, secure, and scalable solutions. Ensures all websites are optimized for performance and maintain the highest technical standards while being easy to manage.",
    expertise: ["Full-Stack Development", "Performance Optimization", "Security", "API Integration"],
    linkedin: "#",
    email: "tech@lawnlogic.agency"
  },
  {
    name: "Emily H.",
    role: "Client Success Manager",
    image: "/images/EmilyH.jpg",
    description: "A dedicated relationship builder who ensures every client achieves their goals. Provides ongoing support and strategic guidance to help lawn care businesses maximize their digital presence. Transforms complex technical concepts into actionable business strategies.",
    expertise: ["Project Management", "Client Communication", "Strategy Implementation", "Training"],
    linkedin: "#",
    email: "success@lawnlogic.agency"
  },
  {
    name: "David L.",
    role: "Marketing Strategist",
    image: "/images/DavidL.jpg",
    description: "A data-driven marketing expert specialized in lawn care industry growth. Creates comprehensive digital marketing strategies that generate leads and drive business growth. Uses analytics to optimize campaigns and maximize ROI for clients.",
    expertise: ["SEO", "Content Strategy", "Lead Generation", "Analytics"],
    linkedin: "#",
    email: "marketing@lawnlogic.agency"
  }
];

interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    image: string;
    description: string;
    expertise: string[];
    linkedin: string;
    email: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative h-[400px] w-full">
      <div
        className="w-full h-full cursor-pointer"
        style={{ perspective: "1000px" }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 ease-in-out
            ${isFlipped ? '[transform:rotateY(180deg)]' : ''}
          `}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front of card */}
          <div
            className="absolute w-full h-full bg-gray-100 rounded-xl shadow-md p-6
              [backface-visibility:hidden] flex flex-col items-center
              border border-gray-200"
          >
            <div className="relative w-48 h-48 mb-6">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
            <p className="text-green-800 font-medium">{member.role}</p>
          </div>

          {/* Back of card */}
          <div
            className="absolute w-full h-full bg-gray-100 rounded-xl shadow-md p-6
              [backface-visibility:hidden] [transform:rotateY(180deg)]
              flex flex-col justify-between items-center
              border border-gray-200"
          >
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{member.role}</h3>
              <p className="text-gray-800 leading-relaxed text-sm">{member.description}</p>
              <div className="pt-4">
                <p className="text-green-800 font-medium mb-2">Expertise:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-green-800/10 text-green-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-4 pt-4">
              <Link 
                href={member.linkedin}
                className="text-gray-600 hover:text-green-800 transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
              </Link>
              <Link 
                href={`mailto:${member.email}`}
                className="text-gray-600 hover:text-green-800 transition-colors"
              >
                <MailIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AboutUsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-xl text-gray-600">
              To empower lawn care businesses, landscapers, and General Contractors with innovative digital solutions that drive growth, 
              enhance customer engagement, and streamline operations for greater revenue. 
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-8 py-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </section>

      {/* Mission Section */}
 
      {/* Team Section */}
      
      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help grow your lawn care business.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/services">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
                Our Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-white hover:bg-gray-50 text-green-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors border-2 border-green-600">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}