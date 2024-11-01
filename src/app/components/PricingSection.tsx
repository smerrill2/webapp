import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from "@/app/components/button";
import Link from 'next/link';

export function PricingSection() {
  const packages = [
    {
      title: "LUMP SUM",
      price: "$1,500",
      subtitle: "+$25/mo Hosting",
      features: [
        { name: "Design And Development", included: true },
        { name: "$25/mo Hosting", included: true },
        { name: "$100 fee Per Page after 5", included: true },
        { name: "+$50/mo Unlimited Edits Add-on", included: true },
        { name: "+$250 To Add A Blog", included: true },
        { name: "24/7 Support", included: false },
        { name: "Lifetime Updates", included: false },
      ]
    },
    {
      title: "MONTHLY",
      price: "$149",
      subtitle: "Per Month",
      featured: true,
      features: [
        { name: "Design And Development", included: true },
        { name: "Includes Hosting", included: true },
        { name: "$100 fee Per Page After 5", included: true },
        { name: "+$250 To Add A Blog", included: true },
        { name: "Unlimited Edits", included: true },
        { name: "24/7 Support", included: true },
        { name: "Lifetime Updates", included: true },
      ]
    },
    {
      title: "ECOMMERCE",
      price: "$3k",
      subtitle: "Starting",
      features: [
        { name: "Custom Shopify Store", included: true },
        { name: "Configure Any And All Apps", included: true },
        { name: "Integrated Shipping", included: true },
        { name: "Shopify Tutorial Walkthrough", included: true },
        { name: "Fully Editable In Shopify CMS", included: true },
        { name: "+$50/mo Unlimited Edits", included: false },
        { name: "24/7 Support", included: false },
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#0A2416]"> {/* Dark green background */}
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#16A349] font-semibold text-lg mb-4">OUR PRICING</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            PRICING PACKAGES FOR<br />EVERY BUDGET
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 ${
                pkg.featured 
                  ? 'bg-[#16A349] border-2 border-white relative' // Bright green for featured
                  : 'bg-[#133420]' // Darker green for others
              }`}
            >
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${
                  pkg.featured ? 'text-white' : 'text-white'
                }`}>{pkg.title}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">{pkg.price}</span>
                  <span className={`ml-2 ${
                    pkg.featured ? 'text-white/90' : 'text-gray-400'
                  }`}>{pkg.subtitle}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className={`w-5 h-5 ${
                        pkg.featured ? 'text-white' : 'text-[#16A349]'
                      } flex-shrink-0`} />
                    ) : (
                      <X className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${
                      feature.included 
                        ? pkg.featured ? 'text-white' : 'text-white'
                        : 'text-gray-400'
                    }`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <Button 
                  variant="default"
                  className={`w-full font-semibold rounded-full ${
                    pkg.featured
                      ? 'bg-white text-[#16A349] hover:bg-gray-100'
                      : 'bg-[#16A349] text-white hover:bg-[#138A3F]'
                  }`}
                >
                  GET STARTED
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}