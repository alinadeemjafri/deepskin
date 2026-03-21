import Navigation from './components/Navigation'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import ProblemSolution from './components/ProblemSolution'
import Science from './components/Science'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import ProductDetails from './components/ProductDetails'
import BeforeAfter from './components/BeforeAfter'
import MidCTA from './components/MidCTA'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import StickyMobileCTA from './components/StickyMobileCTA'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <Science />
      <HowItWorks />
      <Benefits />
      <ProductDetails />
      <BeforeAfter />
      <MidCTA />
      <Reviews />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
