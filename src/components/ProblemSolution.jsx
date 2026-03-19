import { motion } from 'framer-motion'

export default function ProblemSolution() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white/40">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[0.72rem] tracking-[0.15em] uppercase font-semibold text-taupe mb-4">
            The problem
          </p>
          <h2 className="font-serif text-[1.9rem] md:text-[2.4rem] leading-[1.12] font-semibold text-near-black">
            Scars don't just sit on your skin. They get into your head.
          </h2>
          <div className="mt-5 space-y-3.5 text-[0.92rem] leading-relaxed text-near-black/55 font-light">
            <p>
              You cover up at the beach. You catch yourself adjusting your
              collar. Every glance in the mirror is a reminder of something
              you'd rather move past.
            </p>
            <p>
              Most scar products promise the world and deliver nothing. Sticky
              sheets that peel off after an hour. Creams that feel greasy and
              do very little.
            </p>
            <p>
              Deep Skin is different. Our medical-grade silicone creates the
              ideal healing environment, maintaining hydration, regulating
              collagen, and protecting the scar from tension. The same approach
              recommended by dermatologists and plastic surgeons worldwide.
            </p>
          </div>
        </motion.div>

        {/* Flat lay lifestyle image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_64px_rgba(43,43,43,0.08)]">
            <img
              src="/scar.png"
              alt="Scar on skin"
              className="w-full max-w-[480px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
