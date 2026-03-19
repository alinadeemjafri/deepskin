import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="py-16 md:py-24 px-6"
        style={{
          background: 'linear-gradient(135deg, #3C2415 0%, #4A3020 50%, #3C2415 100%)',
        }}
      >
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)' }}
        />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-[1.9rem] md:text-[2.5rem] leading-[1.12] font-semibold text-white">
              The skin you're comfortable
              <br className="hidden md:block" />
              in is waiting.
            </h2>
            <p className="mt-4 text-[0.92rem] leading-relaxed text-white/45 font-light max-w-md mx-auto">
              Start seeing results in as little as four weeks. One roll. No
              prescriptions. No complicated routines.
            </p>
            <div className="mt-7">
              <a
                href="#"
                className="inline-block bg-cream text-navy text-[0.9rem] font-semibold tracking-wide px-9 py-3.5 rounded-full hover:bg-white transition-all duration-300 hover:shadow-lg hover:shadow-black/20"
              >
                Shop on Amazon
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
