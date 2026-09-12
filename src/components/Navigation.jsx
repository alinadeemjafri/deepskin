import { useEffect, useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { AMAZON_URL } from '../config'

const links = [
  { label: 'The science', href: '#science' },
  { label: 'How to use', href: '#how-to-use' },
  { label: 'Routine', href: '#recommended-time' },
  { label: 'Reviews', href: '#reviews' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'border-b border-cocoa/8 bg-cream/90 shadow-[0_8px_30px_rgba(62,42,34,0.04)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-7 lg:h-20 lg:px-10">
        <a
          href="#top"
          aria-label="Deep Skin home"
          className="font-serif text-[1.45rem] font-semibold tracking-[0.08em] text-cocoa transition-opacity hover:opacity-70"
        >
          DEEP SKIN
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm px-1 py-2 text-[0.78rem] font-medium tracking-[0.025em] text-cocoa/65 transition-colors duration-200 hover:text-cocoa"
            >
              {link.label}
            </a>
          ))}
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cocoa px-6 py-3 text-[0.8rem] font-semibold tracking-[0.02em] text-white transition-colors duration-200 hover:bg-cocoa-light"
          >
            Shop on Amazon
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-cocoa transition-colors hover:bg-white/50 lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <Motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 min-h-[calc(100svh-4rem)] border-t border-cocoa/8 bg-cream/98 px-5 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-sm flex-col items-stretch gap-2 pt-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 font-serif text-2xl text-cocoa transition-colors hover:bg-white/55"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 rounded-full bg-cocoa px-7 py-4 text-center text-sm font-semibold text-white"
              >
                Shop on Amazon
              </a>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
