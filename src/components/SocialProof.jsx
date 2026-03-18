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
      <div className="max-w-5xl mx-auto px-6 py-4 md:py-5">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 md:gap-x-14">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-center gap-2"
            >
              <item.icon size={14} className="text-green shrink-0" strokeWidth={2} />
              <span className="text-[0.73rem] font-medium tracking-[0.02em] text-near-black/50 whitespace-nowrap">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
