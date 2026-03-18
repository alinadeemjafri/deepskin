import { motion } from 'framer-motion'
import { Scissors, Hand, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: Scissors,
    title: 'Clean & Cut',
    description:
      'Wash and dry the scarred area. Cut a piece of tape to fit comfortably over the scar with a small margin on each side.',
    image: '/close-up.png',
    imageAlt: 'Close-up of silicone scar tape showing thin flexible texture',
  },
  {
    icon: Hand,
    title: 'Apply & Wear',
    description:
      'Place the tape smoothly over the scar, pressing gently from the centre outward. Start with a few hours a day and build up gradually.',
    image: '/tape-application.png',
    imageAlt: 'Applying silicone scar tape to skin',
  },
  {
    icon: Sparkles,
    title: 'See Results',
    description:
      'With consistent daily use, scars begin to soften and flatten within 4\u20138 weeks. Best results come at 3\u20136 months of continued wear.',
    image: '/before-after.png',
    imageAlt: 'Before and after scar improvement results',
  },
]

const schedule = [
  { days: 'Days 1\u20132', hours: '4 hrs', progress: 'w-[20%]' },
  { days: 'Days 3\u20134', hours: '8 hrs', progress: 'w-[40%]' },
  { days: 'Days 5\u20136', hours: '12 hrs', progress: 'w-[60%]' },
  { days: 'Days 7\u201311', hours: '16\u201320 hrs', progress: 'w-[80%]' },
  { days: 'Day 12+', hours: '24 hrs', progress: 'w-[100%]' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 px-6 bg-white/40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="text-[0.72rem] tracking-[0.15em] uppercase font-semibold text-taupe mb-4">
            How it works
          </p>
          <h2 className="font-serif text-[1.9rem] md:text-[2.4rem] leading-[1.12] font-semibold text-near-black">
            Three simple steps to visible change
          </h2>
        </motion.div>

        {/* Steps — alternating layout */}
        <div className="space-y-12 md:space-y-6 mb-16 md:mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                i % 2 === 1 ? 'md:direction-rtl' : ''
              }`}
            >
              {/* Image */}
              <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="rounded-2xl overflow-hidden bg-cream-light shadow-[0_8px_40px_rgba(43,43,43,0.06)]">
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="w-full h-[240px] md:h-[280px] object-cover object-center"
                  />
                </div>
              </div>

              {/* Copy */}
              <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cream-dark/60 flex items-center justify-center">
                    <step.icon size={18} className="text-near-black/50" strokeWidth={1.5} />
                  </div>
                  <span className="text-[0.7rem] tracking-[0.1em] uppercase font-semibold text-taupe">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="font-serif text-[1.5rem] md:text-[1.7rem] font-semibold text-near-black mb-3">
                  {step.title}
                </h3>
                <p className="text-[0.9rem] leading-relaxed text-near-black/55 font-light max-w-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Usage schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-taupe/10"
        >
          <h3 className="font-serif text-[1.2rem] font-semibold text-near-black text-center mb-8">
            Recommended wear schedule
          </h3>
          <div className="space-y-4">
            {schedule.map((item, i) => (
              <motion.div
                key={item.days}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-4"
              >
                <span className="text-[0.75rem] font-medium text-near-black/45 w-20 shrink-0">
                  {item.days}
                </span>
                <div className="flex-1 h-7 bg-cream-dark/40 rounded-full overflow-hidden relative">
                  <div
                    className={`h-full bg-gradient-to-r from-taupe/40 to-taupe/60 rounded-full ${item.progress} transition-all`}
                  />
                </div>
                <span className="text-[0.75rem] font-semibold text-near-black/60 w-16 text-right shrink-0">
                  {item.hours}
                </span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[0.75rem] text-near-black/35 mt-6 font-light">
            Gradually increase wear time. Remove and wash every 1\u20132 days.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
