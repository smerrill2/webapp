'use client'

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    comment: "Best lawn care service I've ever used. My yard has never looked better!",
    rating: 5
  },
  {
    name: "Mike Thompson",
    role: "Business Owner",
    comment: "They transformed our commercial property. The native plants are thriving!",
    rating: 5
  },
  {
    name: "Emily Davis",
    role: "Resident",
    comment: "Professional, punctual, and perfect results every time.",
    rating: 5
  },
  {
    name: "Robert Wilson",
    role: "Property Manager",
    comment: "Outstanding service and attention to detail. Highly recommended!",
    rating: 5
  },
  {
    name: "Lisa Anderson",
    role: "Homeowner",
    comment: "Love how they've made our yard eco-friendly and beautiful!",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-24 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Join hundreds of satisfied customers who trust us with their lawn care needs
        </p>
      </div>

      <div className="relative">
        {/* Animated Container */}
        <div className="flex gap-6 animate-scroll">
          {/* First Set */}
          <div className="flex gap-6 shrink-0">
            {/* Lawn Mower SVG */}
            <div className="flex items-center shrink-0">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
                className="w-16 h-16 text-green-500 animate-mower"
                fill="currentColor"
              >
                <path d="M20.5 19H19V17H18V15H17V14H15V13H14V12H12V13H11V15H10V17H9V19H4.5C3.7 19 3 19.7 3 20.5S3.7 22 4.5 22H20.5C21.3 22 22 21.3 22 20.5S21.3 19 20.5 19M9.8 14L9 13.2 9.8 12.4 10.6 13.2 9.8 14M14.2 13.4L13.4 12.6 14.2 11.8 15 12.6 14.2 13.4M14.2 16.6L13.4 15.8 14.2 15 15 15.8 14.2 16.6M11.8 16L11 15.2 11.8 14.4 12.6 15.2 11.8 16M6 19C4.9 19 4 18.1 4 17S4.9 15 6 15 8 15.9 8 17 7.1 19 6 19M9 11H5V9L9 3L15 9V11H13L9 7L7 9L9 11Z"/>
              </svg>
            </div>
            
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg w-80 shrink-0 hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{testimonial.comment}</p>
                <div className="border-t pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicate Set for Seamless Loop */}
          <div className="flex gap-6 shrink-0">
            <div className="flex items-center shrink-0">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
                className="w-16 h-16 text-green-500 animate-mower"
                fill="currentColor"
              >
                <path d="M20.5 19H19V17H18V15H17V14H15V13H14V12H12V13H11V15H10V17H9V19H4.5C3.7 19 3 19.7 3 20.5S3.7 22 4.5 22H20.5C21.3 22 22 21.3 22 20.5S21.3 19 20.5 19M9.8 14L9 13.2 9.8 12.4 10.6 13.2 9.8 14M14.2 13.4L13.4 12.6 14.2 11.8 15 12.6 14.2 13.4M14.2 16.6L13.4 15.8 14.2 15 15 15.8 14.2 16.6M11.8 16L11 15.2 11.8 14.4 12.6 15.2 11.8 16M6 19C4.9 19 4 18.1 4 17S4.9 15 6 15 8 15.9 8 17 7.1 19 6 19M9 11H5V9L9 3L15 9V11H13L9 7L7 9L9 11Z"/>
              </svg>
            </div>
            {testimonials.map((testimonial, index) => (
              <div
                key={`duplicate-${index}`}
                className="bg-white p-6 rounded-xl shadow-lg w-80 shrink-0 hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{testimonial.comment}</p>
                <div className="border-t pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes mower {
          0%, 100% {
            transform: translateY(-2px);
          }
          50% {
            transform: translateY(2px);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-mower {
          animation: mower 0.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}