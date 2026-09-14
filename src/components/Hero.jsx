import { motion as Motion } from 'framer-motion'
import { Leaf, Rabbit, Shield } from 'lucide-react'
import { AMAZON_URL } from '../config'

const heroFeatures = [
  { icon: Shield, lines: ['Medical-grade', 'silicone'] },
  { icon: Rabbit, lines: ['Cruelty free'] },
  { icon: Leaf, lines: ['Discreet', 'everyday care'] },
]

function FeatureRow() {
  return (
    <div className="mt-10 flex w-[31rem] items-stretch">
      {heroFeatures.map((feature, index) => (
        <div
          key={feature.lines.join('-')}
          className={`relative flex flex-1 flex-col items-center justify-start px-3 text-center ${
            index > 0
              ? 'before:absolute before:inset-y-1 before:left-0 before:w-px before:bg-cocoa/65'
              : ''
          }`}
        >
          <feature.icon
            aria-hidden="true"
            strokeWidth={1.65}
            className="size-9 text-cocoa"
          />

          <p className="mt-2.5 text-[0.72rem] font-semibold uppercase leading-[1.25] tracking-[-0.01em] text-cocoa">
            {feature.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  )
}

function Eyebrow() {
  return (
    <div className="flex items-center gap-4">
      <p className="text-[0.76rem] font-semibold uppercase tracking-[0.28em] text-cocoa lg:text-[0.82rem]">
        Advanced scar care
      </p>

      <span
        aria-hidden="true"
        className="h-px w-20 bg-cocoa/65"
      />
    </div>
  )
}

export default function Hero() {
  return (
    <>
      {/* MOBILE HERO */}
      <section
        id="top"
        className="bg-cream pt-16 md:hidden"
      >
        <Motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
          src="/hero-mobile.jpg"
          alt="Deep Skin advanced silicone scar tape"
          fetchPriority="high"
          className="block h-auto w-full"
        />

        <div className="px-5 pb-7 pt-4">
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[56px] w-full items-center justify-center rounded-full bg-cocoa px-6 py-4 text-[1rem] font-semibold tracking-[0.01em] text-white transition-colors active:bg-cocoa-light"
          >
            Shop on Amazon
          </a>
        </div>
      </section>

      {/* DESKTOP HERO — unchanged */}
      <section className="relative isolate hidden h-[max(720px,100svh)] overflow-hidden bg-[#f3e2d9] md:block">
        <img
          src="/hero-desktop.jpg"
          alt="Deep Skin medical-grade silicone scar tape roll beside its product box"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55 }}
          className="absolute left-[5.7%] top-[14.5%] w-[43%] max-w-[43rem]"
        >
          <Eyebrow />

          <h1 className="mt-6 font-serif text-[clamp(4rem,6.15vw,6.4rem)] font-medium leading-[0.94] tracking-[-0.045em] text-cocoa">
            A more
            <span className="block">confident you.</span>
          </h1>

          <p className="mt-5 max-w-[32rem] text-[clamp(1rem,1.5vw,1.45rem)] font-medium leading-[1.42] tracking-[-0.015em] text-cocoa/88">
            Medical-grade silicone scar tape designed
            <br className="hidden lg:block" />
            for real care, visible progress and
            <br className="hidden lg:block" />
            a smoother tomorrow.
          </p>

          <FeatureRow />
        </Motion.div>
      </section>
    </>
  )
}