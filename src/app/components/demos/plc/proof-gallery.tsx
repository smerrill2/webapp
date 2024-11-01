'use client'
import { HomeButton } from '@/app/components/demos/plc/HomeLink'

export function EcoPerformanceSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-24">
        {/* Header */}
        <div className="mb-12">
          <span className="text-lg text-green-400 mb-4 block">SUSTAINABILITY</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            WE CREATE <span className="text-green-500">BETTER</span> LANDSCAPES
            <br />
            THAT THRIVE
          </h2>
          
          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-black/30 p-8 rounded-2xl">
              <div className="text-6xl md:text-7xl font-bold text-green-500 mb-2">90%</div>
              <div className="text-xl">
                Water Usage
                <br />
                Reduction
              </div>
            </div>
            <div className="text-center bg-black/30 p-8 rounded-2xl">
              <div className="text-6xl md:text-7xl font-bold text-green-500 mb-2">100</div>
              <div className="text-xl">
                Native Plant
                <br />
                Species
              </div>
            </div>
            <div className="text-center bg-black/30 p-8 rounded-2xl">
              <div className="text-6xl md:text-7xl font-bold text-green-500 mb-2">5/5</div>
              <div className="text-xl">
                Environmental
                <br />
                Impact Rating
              </div>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
            When it comes to sustainable landscaping, our native plant selections create thriving ecosystems that support local wildlife while requiring minimal maintenance and water.
          </p>

          {/* Benefits List */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4 bg-black/20 p-6 rounded-xl hover:bg-black/30 transition-colors">
              <div className="flex-shrink-0 p-2 bg-green-500/10 rounded-lg">
                <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L4 9V21H20V9L12 3M12 7.7C14.1 7.7 15.8 9.4 15.8 11.5C15.8 13.6 14.1 15.3 12 15.3C9.9 15.3 8.2 13.6 8.2 11.5C8.2 9.4 9.9 7.7 12 7.7M12 6C9 6 6.6 8.4 6.6 11.4C6.6 14.4 9 16.8 12 16.8C15 16.8 17.4 14.4 17.4 11.4C17.4 8.4 15 6 12 6Z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Natural Water Conservation</h3>
                <p className="text-gray-400">Native plants require up to 90% less water than traditional landscaping, naturally adapting to local rainfall patterns.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-black/20 p-6 rounded-xl hover:bg-black/30 transition-colors">
              <div className="flex-shrink-0 p-2 bg-green-500/10 rounded-lg">
                <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2 22 6.5 22 12 17.5 22 12 22M12 4C7.6 4 4 7.6 4 12S7.6 20 12 20 20 16.4 20 12 16.4 4 12 4M12 7C13.7 7 15 8.3 15 10S13.7 13 12 13 9 11.7 9 10 10.3 7 12 7Z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Better Wildlife Support</h3>
                <p className="text-gray-400">Our landscapes create natural habitats that attract beneficial insects, birds, and pollinators.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-black/20 p-6 rounded-xl hover:bg-black/30 transition-colors">
              <div className="flex-shrink-0 p-2 bg-green-500/10 rounded-lg">
                <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15,12H12V3H3V12H0L7.5,19.5L15,12M3,13V21H21V13H19V19H5V13H3Z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Lower Maintenance Needs</h3>
                <p className="text-gray-400">Native plants thrive with minimal intervention, reducing the need for fertilizers and frequent maintenance.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-black/20 p-6 rounded-xl hover:bg-black/30 transition-colors">
              <div className="flex-shrink-0 p-2 bg-green-500/10 rounded-lg">
                <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18V21Z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Year-Round Resilience</h3>
                <p className="text-gray-400">Native ecosystems maintain their beauty through all seasons with natural resistance to local conditions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
        <HomeButton 
  className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors"
>
  GET STARTED TODAY
</HomeButton>
        </div>
      </div>
    </section>
  )
}