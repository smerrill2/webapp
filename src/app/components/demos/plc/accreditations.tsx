export function GuaranteesSection() {
    const baseUrl = "lawnlogic.agency/portfolio/porcupinelawncare"
    
    const features = [
      {
        title: "FULLY INSURED",
        description: "Your property is protected with our comprehensive insurance coverage for all services performed.",
        icon: (
          <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83c-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25l6 2.25v4.7z"/>
          </svg>
        )
      },
      {
        title: "CUSTOMIZED CARE",
        description: "Every lawn is unique. We create tailored maintenance plans specific to your property's needs.",
        icon: (
          <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm3.59 5.59L12 13.17 8.41 9.59 7 11l5 5 5-5z"/>
          </svg>
        )
      },
      {
        title: "SCHEDULE GUARANTEE",
        description: "We stick to our promised schedule or your next service is free. No excuses, just reliable service.",
        icon: (
          <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
          </svg>
        )
      },
      {
        title: "SATISFACTION GUARANTEED",
        description: "Not happy with our service? We'll make it right or you don't pay. Your satisfaction is our priority.",
        icon: (
          <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59-8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
          </svg>
        )
      },
      {
        title: "RESPONSIVE SUPPORT",
        description: "Direct line to our team for all your needs. No automated systems - speak directly with our staff.",
        icon: (
          <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>
          </svg>
        )
      },
      {
        title: "WEATHER PROTECTION",
        description: "Bad weather? We automatically reschedule within 24 hours at no extra cost. Your service is guaranteed.*",
        icon: (
          <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        )
      }
    ]
  
    return (
      <section className="py-8 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-24">
          {/* Profile and Pricing Section */}
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            {/* Owner Profile */}
            <div className="lg:col-span-4">
              <div className="flex md:block items-center gap-4 mb-8 md:mb-6">
                <div className="w-24 h-24 md:w-auto md:h-auto md:aspect-square relative rounded-2xl md:rounded-3xl overflow-hidden mb-0 md:mb-6 shrink-0">
                  <img 
                    src="/images/plc-owner.png"
                    alt="Owner Headshot" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-xl flex-1 md:block">
                  <h3 className="font-bold text-xl md:text-2xl">Dave Liechner</h3>
                  <p className="text-gray-600">Owner, Developer</p>
                </div>
              </div>
            </div>
  
            {/* Pricing Section */}
            <div className="lg:col-span-8">
              <div className="mb-8 md:mb-12">
                {/* Main Pricing Header */}
                <div className="space-y-2 mb-6">
                  <p className="text-green-500 font-semibold text-lg md:text-xl">
                    STARTING FROM
                  </p>
                  <div className="space-y-1">
                    <h2 className="text-4xl md:text-6xl font-bold">
                      $0 DOWN
                    </h2>
                    <p className="text-2xl md:text-4xl font-bold text-gray-700">
                      $249 PER MONTH
                    </p>
                  </div>
                </div>
  
                {/* Description Section */}
                <div className="space-y-6">
                  {/* Main Package Description */}
                  <div className="prose prose-lg text-gray-600 max-w-3xl">
                    We offer $0 down for standard residential lawn maintenance packages. For larger properties or commercial spaces, we provide custom pricing based on square footage, service frequency, and additional landscaping needs.
                  </div>
  
                  {/* Contract Details */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <p className="font-semibold text-gray-900 mb-2">
                      6 Month Minimum Contract Includes:
                    </p>
                    <ul className="grid gap-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Weekly Mowing
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Edging & Trimming
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Blowing & Clean Up
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Seasonal Maintenance
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        24/7 Customer Support
                      </li>
                    </ul>
                    <p className="text-gray-600 text-sm mt-4">
                      Monthly billing with no hidden fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Features Section - 3x2 Grid */}
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-green-100 rounded-full p-3">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
  
            {/* CTA Button */}
            <div className="text-center mt-12">
              <a 
                href={`https://${baseUrl}#contact`}
                className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors"
              >
                Schedule A Call
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }