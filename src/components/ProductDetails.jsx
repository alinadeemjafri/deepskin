import { motion } from 'framer-motion'

const specs = [
  { label: 'Size', value: '1.6 in × 60 in Roll (4 cm × 150 cm)' },
  { label: 'Material', value: 'Medical-grade silicone (Polydimethylsiloxane)' },
  {
    label: 'Suitable for',
    value: 'Surgical scars, C-section scars, burn scars, keloid scars',
  },
  { label: 'Use on', value: 'Closed, fully healed skin only' },
]

export default function ProductDetails() {
  return (
    <section className="py-14 md:py-24 px-5 md:px-6 bg-white/40">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Unboxing image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(43,43,43,0.06)]">
            <img
              src="/flat-lay.png"
              alt="Deep Skin scar tape flat lay"
              loading="lazy"
              className="w-full max-w-[440px]"
            />
          </div>
        </motion.div>

        {/* Specs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[0.75rem] md:text-[0.72rem] tracking-[0.15em] uppercase font-semibold text-taupe mb-3 md:mb-4">
            Product details
          </p>
          <h2 className="font-serif text-[1.7rem] sm:text-[1.9rem] md:text-[2.2rem] leading-[1.15] font-semibold text-near-black mb-5 md:mb-7">
            What's in the box
          </h2>

          <div>
            {specs.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6 py-3 md:py-3.5 ${
                  i < specs.length - 1 ? 'border-b border-taupe/12' : ''
                }`}
              >
                <span className="text-[0.75rem] font-semibold tracking-[0.04em] uppercase text-near-black/35 sm:w-28 shrink-0">
                  {spec.label}
                </span>
                <span className="text-[0.88rem] text-near-black/65 font-light">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
