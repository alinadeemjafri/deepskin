import { motion } from 'framer-motion'
import { Shield, Award, Heart, RefreshCw } from 'lucide-react'

const items = [
  { icon: Shield, label: 'Medical-Grade Silicone' },
  { icon: Award, label: 'ISO 13485 Certified' },
  { icon: Heart, label: 'Latex & Cruelty Free' },
  { icon: RefreshCw, label: 'Reusable & Washable' },
]

export default function SocialProof() {
  return (
    <section className="bg-white/50 border-y border-taupe/12">
      <div className="max-w-5xl mx-auto px-5 md:px-6 py-4 md:py-5">
        <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-14 sm:gap-y-3">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-center gap-2.5 sm:gap-2 justify-center sm:justify-start"
            >
              <item.icon size={16} className="text-green shrink-0 sm:w-[14px] sm:h-[14px]" strokeWidth={2} />
              <span className="text-[0.8rem] sm:text-[0.73rem] font-medium tracking-[0.02em] text-near-black/50 whitespace-nowrap">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
