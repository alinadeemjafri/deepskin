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
      className="relative h-[100svh] flex items-center overflow-hidden px-6"
      style={{
        background: 'linear-gradient(180deg, #FAF7F4 0%, #F5F0EB 60%, #EDE6DD 100%)',
      }}
    >
      {/* Subtle radial glow behind product */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full opacity-40 translate-x-[20%]"
          style={{
            background: 'radial-gradient(circle, rgba(200,185,168,0.35) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center relative z-10">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <h1 className="font-serif text-[2.6rem] md:text-[3.4rem] lg:text-[3.8rem] leading-[1.08] font-semibold text-near-black tracking-[-0.01em]">
            Your skin tells
            <br />
            <span className="italic font-light text-taupe">your story.</span>
            <br />
            Not your scars.
          </h1>
          <p className="mt-5 md:mt-6 text-[1.02rem] md:text-[1.1rem] leading-relaxed text-near-black/60 max-w-md mx-auto lg:mx-0 font-light">
            Medical-grade silicone tape that softens, flattens, and fades scars
            so you can feel comfortable in your own skin again.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
            <a
              href="#"
              className="bg-navy text-white text-[0.9rem] font-medium tracking-wide px-9 py-3.5 rounded-full hover:bg-navy-light transition-all duration-300 hover:shadow-lg hover:shadow-navy/20"
            >
              Shop on Amazon
            </a>
          </div>

          <p className="mt-5 text-[0.78rem] tracking-[0.08em] uppercase text-near-black/40 font-medium">
            Medical-Grade Silicone · Reusable · Latex-Free
          </p>
        </motion.div>

        {/* Product image */}
        <motion.div
          style={{ y, opacity }}
          className="flex justify-center order-1 lg:order-2"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative"
          >
            <div
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[85%] h-[50px] rounded-full blur-3xl opacity-30"
              style={{ background: 'rgba(200,185,168,0.5)' }}
            />
            <img
              src="/packaging.png"
              alt="Deep Skin Advanced Silicone Scar Tape packaging"
              className="w-[280px] md:w-[360px] lg:w-[420px] drop-shadow-[0_25px_70px_rgba(43,43,43,0.14)] relative z-10"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
