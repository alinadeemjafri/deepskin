import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ComplianceTrust from './components/ComplianceTrust'
import Problem from './components/Problem'
import Science from './components/Science'
import HowItWorks from './components/HowItWorks'
import RecommendedTime from './components/RecommendedTime'
import Reviews from './components/Reviews'
import ScarCareDaily from './components/ScarCareDaily'
import Footer from './components/Footer'
import StickyMobileCTA from './components/StickyMobileCTA'
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      <main>
        <Hero />

        <ComplianceTrust />

        <Problem />

        <Science />

        <HowItWorks />

        <RecommendedTime />

        <Reviews />

        <ScarCareDaily />
      </main>

      <Footer />

      <StickyMobileCTA />

      <Analytics />
    </div>
  )
}
