'use client'

import { useState } from 'react'
import Image from 'next/image';

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  bio: string
  experience: string
  specialties: string[]
  education: string
  certifications: string[]
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Lavender",
    role: "Lead Landscaper",
    image: "/images/plc-team1.jpg",
    bio: "With over 15 years of experience in landscape design and maintenance, John leads our team with passion and expertise.",
    experience: "15+ years in landscape design",
    specialties: [
      "Landscape Design",
      "Hardscape Installation",
      "Irrigation Systems",
      "Native Plant Selection"
    ],
    education: "B.S. in Horticulture from Kansas State University",
    certifications: [
      "Certified Landscape Professional",
      "Licensed Pesticide Applicator",
      "Irrigation Association Certified"
    ]
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Maintenance Supervisor",
    image: "/images/plc-team2.jpg",
    bio: "Sarah ensures every property receives the highest quality care through her meticulous attention to detail.",
    experience: "10+ years in lawn care",
    specialties: [
      "Turf Management",
      "Plant Health Care",
      "Team Leadership",
      "Customer Relations"
    ],
    education: "Associates in Turf Management",
    certifications: [
      "Certified Lawn Care Manager",
      "First Aid and Safety Certified",
      "Green Industry Professional"
    ]
  },
  {
    id: 3,
    name: "Mike Williams",
    role: "Tree Care Specialist",
    image: "/images/plc-team3.jpg",
    bio: "Mike's expertise in arboriculture ensures the health and longevity of your trees and shrubs.",
    experience: "12+ years in arboriculture",
    specialties: [
      "Tree Health Assessment",
      "Pruning Techniques",
      "Disease Management",
      "Emergency Response"
    ],
    education: "Certified Arborist Training",
    certifications: [
      "ISA Certified Arborist",
      "Tree Risk Assessment Qualified",
      "Safety and Operations Certified"
    ]
  }
]

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember>(teamMembers[0])

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meet Our Team
        </h2>

        <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-12 gap-8 p-8">
            {/* Left Column - Team Member Selection */}
            <div className="md:col-span-4 flex flex-col">
              <h3 className="text-2xl font-bold mb-6">Our Professionals</h3>
              
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    onClick={() => setSelectedMember(member)}
                    className={`group relative cursor-pointer transition-all ${
                      selectedMember.id === member.id
                        ? 'scale-105'
                        : 'hover:scale-105'
                    }`}
                  >
                    <div className="relative rounded-xl overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                      />
                      <div className={`absolute inset-0 transition-opacity ${
                        selectedMember.id === member.id
                          ? 'bg-green-500/20'
                          : 'bg-black/0 group-hover:bg-green-500/10'
                      }`} />
                    </div>
                    <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all ${
                      selectedMember.id === member.id
                        ? 'bg-green-500 text-white'
                        : 'bg-white/80 group-hover:bg-green-500/90 group-hover:text-white'
                    }`}>
                      <p className="font-bold">{member.name}</p>
                      <p className="text-sm">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Member Details */}
            <div className="md:col-span-8 flex flex-col">
              <div className="bg-white p-8 rounded-xl h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{selectedMember.name}</h3>
                  <p className="text-green-500 font-semibold">{selectedMember.role}</p>
                </div>

                <p className="text-gray-600 mb-6">
                  {selectedMember.bio}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3">Specialties</h4>
                    <ul className="space-y-2">
                      {selectedMember.specialties.map((specialty, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-5 h-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-3">Certifications</h4>
                    <ul className="space-y-2">
                      {selectedMember.certifications.map((cert, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-5 h-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                          </svg>
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-bold mb-2">Education</h4>
                  <p className="text-gray-600">{selectedMember.education}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}