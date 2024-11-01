import { Header } from '@/app/components/demos/plc/header'
import { Footer } from 'src/app/components/demos/plc/footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mx-4 md:mx-6 lg:mx-24">
        {children}
      </main>
      <Footer />
    </div>
  )
}