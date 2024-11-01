import { Header } from '@/app/components/demos/plc/header'
import { HeroSection } from '@/app/components/demos/plc/hero'
import { ServicesSection } from '@/app/components/demos/plc/services'
import { GuaranteesSection } from '@/app/components/demos/plc/accreditations'
import { PortfolioSection  } from '@/app/components/demos/plc/portfolio'
import { TeamSection } from '@/app/components/demos/plc/TeamSection'
import { EcoPerformanceSection } from '@/app/components/demos/plc/proof-gallery'
import { TestimonialsSection } from '@/app/components/demos/plc/testimonials'
import { Footer } from '@/app/components/demos/plc/footer'


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <GuaranteesSection />
        <PortfolioSection />
         <TeamSection />
         <TestimonialsSection /> 
        <EcoPerformanceSection />
      </main>
      <Footer />
    </>
  )
}