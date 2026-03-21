import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FAF7F4 0%, #F5F0EB 60%, #EDE6DD 100%)',
      }}
    >
      {/* Full-width background image */}
      <div className="absolute inset-0">
        {/* Desktop: parallax enabled */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 60]) }}
          className="hidden md:block w-full h-full"
        >
          <img
            src="/main-image.jpg"
            alt="Deep Skin scar tape product and application"
            className="w-full h-full object-cover object-right"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, #FAF7F4 0%, #FAF7F4 25%, rgba(250,247,244,0.85) 40%, transparent 65%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, #EDE6DD 0%, transparent 15%)',
            }}
          />
        </motion.div>

        {/* Mobile: no parallax (prevents jank), portrait image, center-positioned */}
        <div className="md:hidden w-full h-full">
          <img
            src="/main-image-mobile.png"
            alt="Deep Skin scar tape product and application"
            className="w-full h-full object-cover object-center"
          />
          {/* Mobile gradient - transparent at top, fades to cream at bottom for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, transparent 45%, rgba(245,240,235,0.5) 60%, rgba(245,240,235,0.85) 75%, #EDE6DD 100%)',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-5 md:px-6 flex items-end md:items-center min-h-[100svh] pb-12 md:pb-0">
        <motion.div
          style={{ opacity }}
          className="w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left max-w-xl"
          >
            <h1
              className="font-serif text-[2.1rem] sm:text-[2.6rem] md:text-[3.4rem] lg:text-[3.8rem] leading-[1.08] font-semibold text-near-black tracking-[-0.01em]"
              style={{ textShadow: '0 1px 20px rgba(250,247,244,0.8), 0 0px 40px rgba(250,247,244,0.6)' }}
            >
              Your skin tells
              <br />
              <span className="italic font-light text-taupe">your story.</span>
              <br />
              Not your scars.
            </h1>
            <p
              className="mt-4 md:mt-6 text-[0.95rem] md:text-[1.1rem] leading-relaxed text-near-black/70 max-w-md mx-auto lg:mx-0 font-light"
              style={{ textShadow: '0 1px 16px rgba(250,247,244,0.9)' }}
            >
              Medical-grade silicone tape that softens, flattens, and fades scars
              so you can feel comfortable in your own skin again.
            </p>

            <div className="mt-7 md:mt-10 flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
              <a
                href="#"
                className="w-full sm:w-auto text-center bg-navy text-white text-[0.9rem] font-medium tracking-wide px-9 py-3.5 rounded-full hover:bg-navy-light active:scale-[0.97] transition-all duration-300 hover:shadow-lg hover:shadow-navy/20"
              >
                Shop on Amazon
              </a>
            </div>

            <p
              className="mt-4 md:mt-5 text-[0.75rem] md:text-[0.78rem] tracking-[0.08em] uppercase text-near-black/50 font-medium"
              style={{ textShadow: '0 1px 12px rgba(250,247,244,0.9)' }}
            >
              Medical-Grade Silicone · Reusable · Latex-Free
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-taupe/50 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-taupe/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
