import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-xl border-t border-taupe/20 px-5 py-3 safe-bottom"
        >
          <a
            href="#"
            className="flex items-center justify-center gap-2 w-full bg-navy text-white text-[0.9rem] font-medium tracking-wide py-3.5 rounded-full active:scale-[0.97] transition-transform duration-150"
          >
            Shop on Amazon
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
