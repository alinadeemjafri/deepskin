import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Science from './components/Science'
import HowItWorks from './components/HowItWorks'
import RecommendedTime from './components/RecommendedTime'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import StickyMobileCTA from './components/StickyMobileCTA'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <main>
        <Hero />
        <Science />
        <HowItWorks />
        <RecommendedTime />
        <Reviews />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
