import { useState, useEffect } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { AMAZON_URL } from '../config'

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (roughly 100vh)
      setVisible(window.scrollY > window.innerHeight * 0.85)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <Motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-cocoa/10 bg-cream/92 px-5 py-3 backdrop-blur-xl md:hidden safe-bottom"
        >
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-cocoa py-3.5 text-[0.9rem] font-semibold tracking-wide text-white transition-colors duration-200 active:bg-cocoa-light"
          >
            Shop on Amazon
          </a>
        </Motion.div>
      )}
    </AnimatePresence>
  )
}
