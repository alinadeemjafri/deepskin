
import { motion as Motion } from 'framer-motion'
import { Leaf, Rabbit, Shield } from 'lucide-react'

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

function MobileHeroCopy() {
  return (
    <div className="absolute inset-0 z-10 text-[#160e0c]">
      <div className="absolute left-[5.1%] top-[8.95%] flex items-center gap-[2.2cqw]">
        <p className="whitespace-nowrap text-[2.35cqw] font-medium uppercase leading-none tracking-[0.27em]">
          Advanced scar care
        </p>

        <span
          aria-hidden="true"
          className="h-px w-[12.6cqw] bg-[#160e0c]/80"
        />
      </div>

      <h1 className="absolute inset-x-0 top-[14.7%] text-center font-serif text-[12.7cqw] font-medium leading-[0.8] tracking-[-0.052em]">
        A <span className="font-semibold">more</span>
        <span className="block font-semibold">confident you.</span>
      </h1>

      <p className="absolute inset-x-[13%] top-[29.55%] text-center text-[3.05cqw] font-medium leading-[1.48] tracking-[-0.018em]">
        Medical-grade silicone scar tape designed
        <br />
        for real care, visible progress and
        <br />
        a smoother tomorrow.
      </p>

      <div className="absolute inset-x-[5.5%] top-[45.25%] grid grid-cols-3 text-center text-[2.35cqw] font-medium uppercase leading-[1.18] tracking-[-0.025em]">
        <p>
          Medical-grade
          <span className="block">silicone</span>
        </p>

        <p>Cruelty free</p>

        <p>
          Discreet
          <span className="block">everyday care</span>
        </p>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <>
      {/* MOBILE HERO */}
      <section
        id="top"
        className="relative overflow-hidden bg-[#d8c7bb] [container-type:inline-size] md:hidden"
      >
        <Motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
          src="/hero-2026-clean.webp"
          alt="Deep Skin medical-grade silicone scar tape roll beside its product box"
          fetchPriority="high"
          width="990"
          height="1589"
          className="block h-auto w-full"
        />

        <MobileHeroCopy />
      </section>

      {/* DESKTOP HERO */}
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
            A <span className="font-semibold">more</span>
            <span className="block font-semibold">confident you.</span>
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
