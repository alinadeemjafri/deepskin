import { motion } from 'framer-motion'

export default function Science() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(43,43,43,0.05)] border border-taupe/10 bg-cream-light">
            <img
              src="/science-diagram.png"
              alt="How silicone tape works on scar tissue"
              className="w-full max-w-[420px]"
            />
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-[0.72rem] tracking-[0.15em] uppercase font-semibold text-taupe mb-4">
            The science
          </p>
          <h2 className="font-serif text-[1.9rem] md:text-[2.4rem] leading-[1.12] font-semibold text-near-black mb-5">
            Why silicone works when nothing else does
          </h2>
          <div className="space-y-3.5 text-[0.92rem] leading-relaxed text-near-black/55 font-light">
            <p>
              Silicone is the gold standard in clinical scar management. When
              applied to the skin, it creates a semi-occlusive barrier that locks
              in moisture and regulates collagen production at the scar site.
            </p>
            <p>
              Over time, this environment signals your body to produce less excess
              collagen, allowing raised, discoloured scars to gradually flatten,
              soften, and fade.
            </p>
            <p>
              This is the same approach used in hospitals and recommended by
              dermatologists and plastic surgeons after surgery, burns, and injury.
              Deep Skin simply makes it accessible, comfortable, and easy to use
              at home.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
