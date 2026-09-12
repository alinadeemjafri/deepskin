import { motion as Motion } from 'framer-motion'

const steps = [
  {
    title: 'Clean and prepare',
    text: 'Clean the area and make sure fully healed skin is dry. Cut the tape to the size you need.',
    image: '/how-step-clean.jpg',
    alt: 'Cleaning dry, fully healed skin before applying silicone scar tape',
  },
  {
    title: 'Apply and press',
    text: 'Place the tape over the scar and press gently so the silicone sits smoothly against the skin.',
    image: '/how-step-apply.jpg',
    alt: 'Applying a cut strip of silicone scar tape over healed skin',
  },
  {
    title: 'Wear consistently',
    text: 'Build up gradually, then aim to wear the tape for at least 12 hours each day.',
    image: '/how-step-wear.jpg',
    alt: 'Silicone scar tape lying flat against the skin',
  },
  {
    title: 'Remove and reuse',
    text: 'Gently remove and clean the tape with mild soap and water. Let it air dry before reapplying.',
    image: '/how-step-reuse.jpg',
    alt: 'Gently removing reusable silicone scar tape from healed skin',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-to-use" className="scroll-mt-16 bg-white/45 px-5 py-20 sm:px-7 md:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-label">How to use</p>
          <h2 className="section-title mt-4">Simple steps. Real consistency.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-cocoa/60">
            A straightforward daily routine designed to make scar care easier to maintain.
          </p>
        </Motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Motion.article
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="group overflow-hidden rounded-[1.6rem] border border-cocoa/8 bg-cream-light shadow-[0_18px_50px_rgba(74,45,34,0.06)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={step.image}
                  alt={step.alt}
                  loading="lazy"
                  width="286"
                  height="326"
                  className="aspect-[286/326] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                />
                <span className="absolute bottom-4 left-4 flex size-10 items-center justify-center rounded-full border border-white/40 bg-white/80 font-serif text-lg font-semibold text-cocoa shadow-sm backdrop-blur-sm">
                  {index + 1}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-[1.55rem] font-semibold leading-tight text-cocoa">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-cocoa/60">{step.text}</p>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
