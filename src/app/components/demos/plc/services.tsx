// components/services/services-section.tsx
'use client'

import { useState } from 'react'
import { HomeButton } from '@/app/components/demos/plc/HomeLink'

interface ServiceItem {
  title: string
  description: string
  icon: string
  benefits: string[]
}

const residentialServices: ServiceItem[] = [
  {
    title: "Lawn Maintenance",
    description: "Regular care to keep your lawn healthy and beautiful year-round",
    icon: "🌱",
    benefits: ["Weekly mowing", "Edging & trimming", "Fertilization", "Weed control"]
  },
  {
    title: "Landscaping",
    description: "Transform your outdoor space with professional landscaping",
    icon: "🌿",
    benefits: ["Design services", "Plant installation", "Hardscape features", "Garden beds"]
  },
  {
    title: "Seasonal Care",
    description: "Specialized care for every season",
    icon: "🍂",
    benefits: ["Spring cleanup", "Fall preparation", "Leaf removal", "Winter protection"]
  }
]

const commercialServices: ServiceItem[] = [
  {
    title: "Property Maintenance",
    description: "Complete commercial property care solutions",
    icon: "🏢",
    benefits: ["Large area mowing", "Property beautification", "Snow removal", "Regular maintenance"]
  },
  {
    title: "Commercial Landscaping",
    description: "Professional landscaping for business properties",
    icon: "🌳",
    benefits: ["Design planning", "Installation", "Irrigation systems", "Seasonal color"]
  },
  {
    title: "Grounds Management",
    description: "Comprehensive grounds keeping services",
    icon: "📋",
    benefits: ["Site assessment", "Maintenance plans", "Safety compliance", "Quality control"]
  }
]

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial'>('residential')

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive lawn care solutions for both residential and commercial properties
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full p-1 bg-gray-100">
            <button
              onClick={() => setActiveTab('residential')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'residential'
                  ? 'bg-green-500 text-white'
                  : 'text-gray-700 hover:text-green-500'
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'commercial'
                  ? 'bg-green-500 text-white'
                  : 'text-gray-700 hover:text-green-500'
              }`}
            >
              Commercial
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeTab === 'residential' ? residentialServices : commercialServices).map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <HomeButton className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors">
            Get a Free Quote
          </HomeButton>
        </div>
      </div>
    </section>
  )
}