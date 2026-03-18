import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: "How long until I see results?",
    a: "Most people notice their scar becoming softer and less raised within 4\u20138 weeks of consistent daily use. For the best results (significant flattening, fading, and smoothing) continue wearing the tape for 3\u20136 months. Older scars may take longer to respond.",
  },
  {
    q: "Can I use this on old scars?",
    a: "Yes. While silicone tape is most effective on newer scars (under two years old), many people see meaningful improvement on older scars as well. The key is consistent, extended wear over several months.",
  },
  {
    q: "How do I clean and reuse the tape?",
    a: "Gently wash the adhesive side with mild soap and warm water. Pat it dry or let it air-dry completely before reapplying. Avoid using alcohol or harsh cleansers, as these can break down the silicone. Each piece can typically be reused for 7\u201314 days depending on wear conditions.",
  },
  {
    q: "Is it safe for sensitive skin?",
    a: "Deep Skin tape is made from 100% medical-grade silicone, which is latex-free, hypoallergenic, and well-tolerated by most skin types. If you have extremely reactive skin, we recommend a short patch test on healthy skin before applying it to your scar.",
  },
  {
    q: "What types of scars does it work on?",
    a: "Deep Skin is designed for use on surgical scars, C-section scars, burn scars, and keloid or hypertrophic scars. It should only be applied to closed, fully healed skin, not open wounds or freshly sutured incisions.",
  },
  {
    q: "How long does one roll last?",
    a: "Each roll is 60 inches (150 cm) long. Depending on the size of your scar and how much tape you cut per application, a single roll typically lasts 2\u20134 months. Because the tape is reusable, you'll cut new pieces far less often than you might expect.",
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-taupe/12">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 md:py-5 text-left gap-4 group cursor-pointer"
      >
        <span className="text-[0.9rem] md:text-[0.95rem] font-medium text-near-black group-hover:text-near-black/80 transition-colors">
          {faq.q}
        </span>
        <ChevronDown
          size={16}
          className={`text-taupe shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[0.85rem] leading-relaxed text-near-black/50 font-light pr-8">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-16 md:py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <p className="text-[0.72rem] tracking-[0.15em] uppercase font-semibold text-taupe mb-4">
            FAQ
          </p>
          <h2 className="font-serif text-[1.9rem] md:text-[2.4rem] leading-[1.12] font-semibold text-near-black">
            Common questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
