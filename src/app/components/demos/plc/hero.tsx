import { HomeButton } from "@/app/components/demos/plc/HomeLink"

export function HeroSection() {
    return (
      <div className="relative min-h-[90vh] md:min-h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url("/images/plc-bg.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
  
        {/* Added mt-8 for small screens, mt-16 for medium, and mt-24 for large screens */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-24 py-16 md:py-0 mt-8 md:mt-16 lg:mt-24">
          {/* Added more vertical spacing with larger screens */}
          <div className="max-w-3xl space-y-6 md:space-y-8 pt-4 md:pt-8 lg:pt-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Transform Your Lawn Into 
              <span className="block text-green-400 mt-2">A Natural Paradise</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90">
              Professional lawn care services that bring out the best in your outdoor space. 
              Trusted by homeowners across Louisiana.
            </p>
  
            <div className="flex flex-col sm:flex-row gap-3">
              <HomeButton className="bg-green-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-green-600 transition-colors">
                Get Free Estimate
              </HomeButton>
              <HomeButton className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-white/20 transition-colors">
                Our Services
              </HomeButton>
            </div>
  
            {/* Added more margin-top for larger screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:flex gap-4 md:gap-6 items-start md:items-center text-white/90 mt-8 md:mt-12 lg:mt-16">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span className="text-sm md:text-base">4.9/5 Rating (500+ Reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20M10 17L15 12L10 7V17Z" />
                </svg>
                <span className="text-sm md:text-base">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z" />
                </svg>
                <span className="text-sm md:text-base">100% Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
  
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            className="w-5 h-5 md:w-6 md:h-6 text-white"
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    )
}