import { motion as Motion } from 'framer-motion'
import { Leaf, Rabbit, Shield } from 'lucide-react'

const heroFeatures = [
  { icon: Shield, lines: ['Medical-grade', 'silicone'] },
  { icon: Rabbit, lines: ['Cruelty free'] },
  { icon: Leaf, lines: ['Discreet', 'everyday care'] },
]

function FeatureRow({ mobile = false }) {
  return (
    <div className={`flex items-stretch ${mobile ? 'mx-auto mt-5 w-[92%] max-w-[23rem]' : 'mt-10 w-[31rem]'}`}>
      {heroFeatures.map((feature, index) => (
        <div
          key={feature.lines.join('-')}
          className={`relative flex flex-1 flex-col items-center justify-start px-3 text-center ${
            index > 0 ? 'before:absolute before:inset-y-1 before:left-0 before:w-px before:bg-cocoa/65' : ''
          }`}
        >
          <feature.icon
            aria-hidden="true"
            strokeWidth={1.65}
            className={`${mobile ? 'size-8' : 'size-9'} text-cocoa`}
          />
          <p className={`${mobile ? 'mt-2 text-[0.68rem] leading-[1.25]' : 'mt-2.5 text-[0.72rem] leading-[1.25]'} font-semibold uppercase tracking-[-0.01em] text-cocoa`}>
            {feature.lines.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </p>
        </div>
      ))}
    </div>
  )
}

function Eyebrow({ centred = false }) {
  return (
    <div className={`flex items-center gap-4 ${centred ? 'justify-center' : ''}`}>
      <p className="text-[0.69rem] font-semibold uppercase tracking-[0.28em] text-cocoa sm:text-[0.76rem] lg:text-[0.82rem]">
        Advanced scar care
      </p>
      <span aria-hidden="true" className="h-px w-14 bg-cocoa/65 sm:w-20" />
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate h-[820px] overflow-hidden bg-[#f3e2d9] md:h-[max(720px,100svh)]">
      <picture className="absolute inset-0 -z-20">
        <source media="(max-width: 767px)" srcSet="/hero-mobile.jpg" />
        <img
          src="/hero-desktop.jpg"
          alt="Deep Skin medical-grade silicone scar tape roll beside its product box"
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
      </picture>

      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55 }}
        className="absolute inset-x-0 top-[4.2rem] px-4 text-center md:hidden"
      >
        <Eyebrow centred />
        <h1 className="mt-4 font-serif text-[4rem] font-medium leading-[0.84] tracking-[-0.045em] text-cocoa">
          A more
          <span className="block">confident you.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-[22rem] text-[0.93rem] font-medium leading-[1.45] tracking-[-0.012em] text-cocoa/88">
          Medical-grade silicone scar tape designed<br className="hidden min-[365px]:block" />
          for real care, visible progress and<br className="hidden min-[365px]:block" />
          a smoother tomorrow.
        </p>
        <FeatureRow mobile />
      </Motion.div>

      <div className="absolute inset-0 hidden md:block">
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
            Medical-grade silicone scar tape designed<br className="hidden lg:block" />
            for real care, visible progress and<br className="hidden lg:block" />
            a smoother tomorrow.
          </p>
          <FeatureRow />
        </Motion.div>
      </div>
    </section>
  )
}
