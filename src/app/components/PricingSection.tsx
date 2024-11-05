import React, { memo } from 'react';
import { Check, X } from 'lucide-react';
import Link from 'next/link';

interface Feature {
  name: string;
  included: boolean;
}

interface Package {
  name: string;
  price: string;
  title: string;
  subtitle: string;
  features: Feature[];
  featured?: boolean;
}

const FeatureItem = memo(
  ({ feature, featured }: { feature: Feature; featured: boolean }) => (
    <li className="flex items-center gap-3">
      {feature.included ? (
        <Check className={`w-5 h-5 ${featured ? 'text-white' : 'text-green-600'}`} />
      ) : (
        <X className="w-5 h-5 text-gray-500" />
      )}
      <span className={feature.included ? (featured ? 'text-white' : 'text-gray-800') : 'text-gray-400'}>
        {feature.name}
      </span>
    </li>
  )
);
FeatureItem.displayName = 'FeatureItem';

const PricingCard = memo(
  ({ pkg }: { pkg: Package }) => (
    <div
      className={`rounded-2xl p-8 ${
        pkg.featured ? 'bg-green-600 border-2 border-white' : 'bg-green-800'
      }`}
    >
      <h3 className="text-2xl font-bold text-white">{pkg.title}</h3>
      <p className="text-4xl font-extrabold text-white">{pkg.price}</p>
      <p className="text-lg text-white">{pkg.subtitle}</p>
      <ul className="mt-6 space-y-4">
        {pkg.features.map((feature, index) => (
          <FeatureItem key={index} feature={feature} featured={!!pkg.featured} />
        ))}
      </ul>
      
      {/* Contact Button */}
      <Link href="/contact">
        <button className="w-full mt-8 px-4 py-1.5 rounded-full font-semibold text-white  
          transition-colors duration-200
          bg-pink-500 hover:bg-pink-600">
          Get Started
        </button>

      </Link>
    </div>
  )
);
PricingCard.displayName = 'PricingCard';

export function PricingSection() {
  const packages: Package[] = [
    {
      name: "lump-sum",
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
      name: "monthly",
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
      name: "ecommerce",
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
            <PricingCard key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}