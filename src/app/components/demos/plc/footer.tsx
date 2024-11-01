// components/footer.tsx
import { HomeLink } from '@/app/components/demos/plc/HomeLink'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-500">ABOUT US</h3>
            <ul className="space-y-2">
              <li><HomeLink className="hover:text-green-500">About Porcupine</HomeLink></li>
              <li><HomeLink className="hover:text-green-500">Executive Staff</HomeLink></li>
              <li><HomeLink className="hover:text-green-500">Newsroom</HomeLink></li>
              <li><HomeLink className="hover:text-green-500">Careers</HomeLink></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-500">OUR SERVICES</h3>
            <ul className="space-y-2">
              <li><HomeLink className="hover:text-green-500">Lawn Care Plan Comparison</HomeLink></li>
              <li><HomeLink className="hover:text-green-500">Tree & Shrub Plan Overview</HomeLink></li>
              <li><HomeLink className="hover:text-green-500">Pest Control Plan Comparison</HomeLink></li>
              <li><HomeLink className="hover:text-green-500">Why Porcupine</HomeLink></li>
              <li><HomeLink className="hover:text-green-500">Branch Finder</HomeLink></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-500">RESOURCES</h3>
            <ul className="space-y-2">
              <li><HomeLink className="hover:text-green-500">FAQs</HomeLink></li>
              <li><HomeLink className="hover:text-green-500">Learning Center</HomeLink></li>
              <li><HomeLink className="hover:text-green-500">Blogs</HomeLink></li>
            </ul>
          </div>

          {/* For New Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-500">FOR NEW SERVICE</h3>
            <ul className="space-y-2">
              <li><a href="tel:1-844-567-9909" className="hover:text-green-500">1-844-567-9909</a></li>
              <li><HomeLink className="hover:text-green-500">Get a Call Back</HomeLink></li>
            </ul>
          </div>

          {/* For Our Customer */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-500">FOR OUR CUSTOMER</h3>
            <ul className="space-y-2">
              <li><HomeLink className="hover:text-green-500">Account Login & Register</HomeLink></li>
              <li><a href="tel:1-844-768-0421" className="hover:text-green-500">1-844-768-0421</a></li>
              <li><HomeLink className="hover:text-green-500">Customer Support</HomeLink></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}