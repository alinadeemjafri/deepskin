import { motion } from 'framer-motion'

export default function BeforeAfter() {
  return (
    <section className="py-14 md:py-24 px-5 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-[0.75rem] md:text-[0.72rem] tracking-[0.15em] uppercase font-semibold text-taupe mb-3 md:mb-4">
            Results
          </p>
          <h2 className="font-serif text-[1.7rem] sm:text-[1.9rem] md:text-[2.4rem] leading-[1.12] font-semibold text-near-black">
            Visible difference, worn with confidence
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-[0_12px_48px_rgba(43,43,43,0.08)] border border-taupe/10">
            <img
              src="/before-after.png"
              alt="Before and after scar improvement with Deep Skin tape"
              loading="lazy"
              className="w-full"
            />
          </div>
          <div className="flex justify-center gap-8 sm:gap-12 mt-4 md:mt-5">
            <span className="text-[0.75rem] tracking-[0.1em] uppercase font-semibold text-near-black/35">
              Before
            </span>
            <span className="text-[0.75rem] tracking-[0.1em] uppercase font-semibold text-green/70">
              After
            </span>
          </div>
          <p className="text-center text-[0.75rem] text-near-black/35 font-light mt-2 md:mt-3">
            Results vary by individual and scar type. Consistent daily use recommended.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
