import React, { memo } from 'react';
import Image from 'next/image';
import { Button } from "@/app/components/button";
import { 
  ClipboardCheck, 
  Palette, 
  Gauge, 
  Headphones, 
  ShieldCheck, 
  Search 
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon; // Using LucideIcon type from lucide-react
}

const BenefitIcon = memo(({ Icon }: { Icon: LucideIcon }) => (
  <Icon size={20} style={{ color: '#16A349' }} />
));
BenefitIcon.displayName = 'BenefitIcon';

const BenefitCard = memo(({ benefit }: { benefit: Benefit }) => (
  <div className="bg-gray-50 p-6 rounded-xl">
    <div className="flex items-center gap-2 mb-3">
      <BenefitIcon Icon={benefit.icon} />
      <h3 className="text-base font-bold" style={{ color: '#16A349' }}>
        {benefit.title}
      </h3>
    </div>
    <p className="text-sm text-gray-500 leading-relaxed">
      {benefit.description}
    </p>
  </div>
));
BenefitCard.displayName = 'BenefitCard';

export function GuaranteesSection() {
  const baseUrl = "lawnlogic.agency"
  
  const benefits = [
    {
      title: "100% SECURE",
      description: "The hosting platforms, form submission pages, and code allow for minimal chances for your things to get hacked. We take your privacy and your customer's very seriously.",
      icon: ShieldCheck
    },
    {
      title: "CUSTOM DESIGNED",
      description: "Our designs are custom made by our in-house designers. We make sure to make your site look good on your phone and desktop.",
      icon: Palette
    },
    {
      title: "100 PAGESPEED SCORES",
      description: "Our sites have zero bloat, zero waste, and built with purpose so we get perfect 98-100/100 speed scores with Google.",
      icon: Gauge
    },
    {
      title: "UNMATCHED SUPPORT",
      description: "Call or text us anytime, no phone trees or robots. When you call us you get me - the owner and developer.",
      icon: Headphones
    },
    {
      title: "MONEY BACK GUARANTEE",
      description: "If at any point your google page speeds dip below 95, we promise you a month's payment free. Althought that should never happen.",
      icon: ClipboardCheck
    },
    {
      title: "WE KNOW SEO",
      description: "No snake oil, no tricks, no lies. We explain very clearly what SEO is, how it works, and what we can do to get you ranking.",
      icon: Search
    }
  ]

  return (
    <section className="py-8 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Owner Profile - Left Side */}
          <div className="lg:col-span-5 lg:sticky lg:top-8">
            <div className="flex flex-col">
              <div className="w-full aspect-square relative rounded-2xl overflow-hidden mb-6">
                <Image 
                  src="/images/Homepage_Picture.png"
                  alt="Owner Headshot" 
                  fill
                  className="object-cover"
                  priority // Since this is above the fold
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="bg-gray-50 p-6 rounded-xl relative">
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-16">
                    <h3 className="font-bold text-2xl md:text-3xl mb-2">Spencer Merrill</h3>
                    <p className="text-gray-600 text-lg">Owner, Developer</p>
                  </div>
                  <Image
                    src="/images/LAWNLOGICBLACKBACKGROUND.svg"
                    alt="LawnLogic logo" 
                    width={80}
                    height={80}
                    className="flex-shrink-0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Info Grid - Right Side */}
          <div className="lg:col-span-7">
            <div className="space-y-8">
              {/* Header Section */}
              <div>
                <p style={{ color: '#16A349' }} className="font-semibold text-xl mb-4">
                  WHAT WE OFFER
                </p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  WEBSITES STARTING AT $0 DOWN AND $149 PER MONTH
                </h2>
                <p className="text-base text-gray-600">
                  We offer $0 down for a standard 5 page small business website. If you need more than 
                  that then we have to do custom pricing based on the scope of work, number of additional 
                  pages, and time involved. 12 month minimum contract. Includes design, development, 
                  hosting, security, 24/7 support, and lifetime updates.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <BenefitCard key={index} benefit={benefit} />
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Button
                  variant="default"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                  onClick={() => window.location.href = `https://${baseUrl}#contact`}
                >
                  Schedule A Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}