import { motion } from 'framer-motion'

export default function MidCTA() {
  return (
    <section className="py-10 md:py-14 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-[0.92rem] text-near-black/50 font-light mb-5">
          Ready to start your scar healing journey?
        </p>
        <a
          href="#"
          className="inline-block bg-navy text-white text-[0.9rem] font-medium tracking-wide px-9 py-3.5 rounded-full hover:bg-navy-light transition-all duration-300 hover:shadow-lg hover:shadow-navy/20"
        >
          Shop on Amazon
        </a>
      </motion.div>
    </section>
  )
}
