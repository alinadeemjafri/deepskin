import { motion } from 'framer-motion'
import { Feather, Droplets, Wind, RefreshCw, Stethoscope, Timer } from 'lucide-react'

const benefits = [
  {
    icon: Feather,
    title: 'Softens, flattens & fades',
    description:
      'Medical-grade silicone regulates collagen and hydrates scar tissue, visibly reducing thickness and texture over time.',
  },
  {
    icon: Droplets,
    title: 'Relieves redness & itching',
    description:
      'The silicone barrier calms irritation and reduces the redness and discomfort that accompany healing scars.',
  },
  {
    icon: Wind,
    title: 'Breathable all-day comfort',
    description:
      'Thin, flexible, and lightweight. Worn comfortably under clothing, even during sleep or exercise.',
  },
  {
    icon: RefreshCw,
    title: 'Washable & reusable',
    description:
      'Each piece can be washed and reapplied multiple times, making a single roll last far longer than alternatives.',
  },
  {
    icon: Stethoscope,
    title: 'Works on all scar types',
    description:
      'Effective on surgical, C-section, burn, and keloid scars on any area of the body.',
  },
  {
    icon: Timer,
    title: 'Results in weeks, not months',
    description:
      'Most users notice softer, flatter scars within 4\u20138 weeks of consistent daily wear.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-14"
        >
          <p className="text-[0.72rem] tracking-[0.15em] uppercase font-semibold text-taupe mb-4">
            Benefits
          </p>
          <h2 className="font-serif text-[1.9rem] md:text-[2.4rem] leading-[1.12] font-semibold text-near-black">
            Built for real results,<br className="hidden md:block" /> worn with real comfort
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-7 border border-taupe/10 hover:border-taupe/25 hover:shadow-[0_8px_40px_rgba(200,185,168,0.15)] transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-xl bg-cream-dark/50 flex items-center justify-center mb-4 group-hover:bg-cream-dark transition-colors duration-500">
                <benefit.icon
                  size={18}
                  className="text-near-black/45 group-hover:text-near-black/65 transition-colors duration-500"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-serif text-[1.1rem] font-semibold text-near-black mb-2">
                {benefit.title}
              </h3>
              <p className="text-[0.83rem] leading-relaxed text-near-black/50 font-light">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
