'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const baseUrl = "lawnlogic.agency/portfolio/porcupinelawncare"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed w-full transition-all duration-300 z-50 ${
      isScrolled ? 'p-0' : 'p-4'
    }`}>
      <header className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-white/80 backdrop-blur-sm rounded-full shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-between items-center h-24">
            <Link href={`https://${baseUrl}`} className="flex-shrink-0">
              <img 
                src="/images/Porcupine-Logo.svg" 
                alt="Porcupine Lawn Care" 
                className="h-16 w-auto transition-all duration-300"
                style={{
                  height: isScrolled ? '3rem' : '4rem'
                }}
              />
            </Link>

            <nav className="hidden md:flex space-x-8">
              <Link href={`https://${baseUrl}`} className="text-gray-700 hover:text-green-500">Home</Link>
              <Link href={`https://${baseUrl}`} className="text-gray-700 hover:text-green-500">Services</Link>
              <Link href={`https://${baseUrl}`} className="text-gray-700 hover:text-green-500">About</Link>
              <Link href={`https://${baseUrl}`} className="text-gray-700 hover:text-green-500">Contact</Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link href={`https://${baseUrl}`} className="text-gray-700 hover:text-green-500">
                Branch Finder
              </Link>
              <Link href={`https://${baseUrl}`} className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
                See Pricing
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-between items-center h-20">
            <Link href={`https://${baseUrl}`} className="flex-shrink-0">
              <img 
                src="/images/Porcupine-Logo.svg" 
                alt="Porcupine Lawn Care" 
                className="h-12 w-auto"
              />
            </Link>

            <div className="flex items-center gap-4">
              <Link 
                href={`https://${baseUrl}`} 
                className="bg-green-500 text-white px-4 py-2 text-sm rounded-full"
              >
                Get Estimate
              </Link>
              <button 
                className="p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-20 bg-white shadow-lg rounded-b-3xl overflow-hidden">
            <nav className="flex flex-col">
              {[
                { text: 'Home', href: '' },
                { text: 'Our Services', href: '#services' },
                { text: 'About Us', href: '#about' },
                { text: 'Contact', href: '#contact' },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={`https://${baseUrl}}`}
                  className="py-4 px-8 text-right text-lg font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.text}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </div>
  )
}