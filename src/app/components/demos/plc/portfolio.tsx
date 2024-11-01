'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface PortfolioItem {
    id: number
    title: string
    description: string
    image: string
    size: string
    duration: string
    results: string
  }
  
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Complete Yard Transformation",
      description: "Transformed an overgrown yard into a pristine landscape with modern design elements",
      image: "/images/plc-portfolio1.jpg",
      size: "1/4 Acre",
      duration: "2 Weeks",
      results: "Increased property value by 15%"
    },
    {
      id: 2,
      title: "Commercial Property Makeover",
      description: "Full-scale renovation of office complex grounds with sustainable features",
      image: "/images/plc-portfolio2.jpg",
      size: "2 Acres",
      duration: "1 Month",
      results: "Reduced water usage by 40%"
    },
    {
      id: 3,
      title: "Drought-Resistant Design",
      description: "Reimagined the front yard with new grass and shrub area!",
      image: "/images/plc-portfolio3.jpg",
      size: "5,000 sq ft",
      duration: "2 Weeks",
      results: "Almost irrigation needed with new grass"
    }
  ]
  
  export function PortfolioSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
  
    const next = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
      )
    }
  
    const prev = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
      )
    }
  
    return (
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Transformations
          </h2>
  
          <div className="relative max-w-5xl mx-auto">
            {/* Navigation Buttons */}
            <button 
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
  
            {/* Portfolio Item */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* Project Image */}
                <div className="relative">
                  <Image 
                    src={portfolioItems[currentIndex].image}
                    alt={portfolioItems[currentIndex].title}
                    width={800} 
                    height={500}
                    className="w-full h-[500px] object-cover rounded-lg"
                    priority={true}
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg backdrop-blur-sm">
                    <p className="font-semibold">After Completion</p>
                  </div>
                </div>
  
                {/* Project Details */}
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      {portfolioItems[currentIndex].title}
                    </h3>
                    <p className="text-gray-600">
                      {portfolioItems[currentIndex].description}
                    </p>
                  </div>
  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="font-semibold mr-2">Property Size:</span>
                      {portfolioItems[currentIndex].size}
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold mr-2">Project Duration:</span>
                      {portfolioItems[currentIndex].duration}
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold mr-2">Results:</span>
                      {portfolioItems[currentIndex].results}
                    </div>
                  </div>
                  
                  {/* Progress Indicator */}
                  <div className="flex justify-center space-x-2 mt-auto">
                    {portfolioItems.map((_, index) => (
                      <div 
                        key={index}
                        className={`h-2 rounded-full transition-all ${
                          index === currentIndex 
                            ? 'w-8 bg-green-500' 
                            : 'w-2 bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }