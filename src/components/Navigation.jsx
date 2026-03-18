import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const links = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/70 backdrop-blur-xl shadow-[0_1px_0_0_rgba(200,185,168,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-2xl md:text-[1.65rem] font-semibold tracking-[0.04em] text-near-black"
        >
          DEEP SKIN
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.82rem] font-medium tracking-[0.03em] text-near-black/70 hover:text-near-black transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="bg-navy text-white text-[0.82rem] font-medium tracking-[0.02em] px-6 py-2.5 rounded-full hover:bg-navy-light transition-colors duration-300"
          >
            Shop on Amazon
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-near-black"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 top-16 bg-cream/95 backdrop-blur-2xl z-40"
          >
            <div className="flex flex-col items-center pt-12 gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-serif font-medium text-near-black/80 hover:text-near-black transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                className="bg-navy text-white text-sm font-medium tracking-wide px-8 py-3 rounded-full mt-4"
              >
                Shop on Amazon
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
