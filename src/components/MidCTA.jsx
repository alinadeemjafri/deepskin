import { motion } from 'framer-motion'

export default function MidCTA() {
  return (
    <section className="py-8 md:py-14 px-5 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-[0.9rem] md:text-[0.92rem] text-near-black/50 font-light mb-4 md:mb-5">
          Ready to start your scar healing journey?
        </p>
        <a
          href="#"
          className="inline-block w-full sm:w-auto text-center bg-navy text-white text-[0.9rem] font-medium tracking-wide px-9 py-3.5 rounded-full hover:bg-navy-light active:scale-[0.97] transition-all duration-300 hover:shadow-lg hover:shadow-navy/20"
        >
          Shop on Amazon
        </a>
      </motion.div>
    </section>
  )
}
