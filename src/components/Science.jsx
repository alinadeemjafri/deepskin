import { motion as Motion } from 'framer-motion'
import { Droplet, Leaf, Shield, Waves, Wind } from 'lucide-react'

const layerCallouts = [
  {
    icon: Shield,
    title: 'Medical-grade silicone',
    text: 'Clinically proven scar care.',
    desktopClass: 'left-[81.5%] top-[6.8%] w-[16%]',
    iconClass: 'bg-[#ead9d0]',
  },
  {
    icon: Waves,
    title: 'Ultra-thin & flexible',
    text: 'Moves with you discreetly.',
    desktopClass: 'left-[81.5%] top-[28.6%] w-[17%]',
    iconClass: 'border border-white/55 bg-white/16',
  },
  {
    icon: Wind,
    title: 'Breathable outer layer',
    text: 'Keeps dirt out.',
    desktopClass: 'left-[5.8%] top-[49.1%] w-[26%]',
    iconClass: 'bg-[#ead9d0]',
  },
  {
    icon: Droplet,
    title: 'Silicone core',
    text: 'Locks in moisture for optimal healing.',
    desktopClass: 'left-[5.8%] top-[59.3%] w-[27%]',
    iconClass: 'bg-[#ead9d0]',
  },
  {
    icon: Leaf,
    title: 'Gentle adhesive layer',
    text: 'Stays in place without irritation.',
    desktopClass: 'left-[5.8%] top-[69.9%] w-[28%]',
    iconClass: 'bg-[#ead9d0]',
  },
]

function ScienceEyebrow() {
  return (
    <div className="flex items-center gap-4">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.27em] text-cocoa sm:text-[0.78rem]">
        The science of scar care
      </p>
      <span aria-hidden="true" className="h-px w-16 bg-cocoa/65 sm:w-24" />
    </div>
  )
}

function Callout({ item }) {
  const Icon = item.icon

  return (
    <div className={`absolute z-10 ${item.desktopClass}`}>
      <div className="flex items-center gap-3">
        <span className={`flex size-16 shrink-0 items-center justify-center rounded-full ${item.iconClass}`}>
          <Icon aria-hidden="true" className="size-9 text-cocoa" strokeWidth={1.65} />
        </span>
        <div>
          <h3 className="max-w-[10rem] text-[0.95rem] font-semibold uppercase leading-[1.12] tracking-[0.035em] text-cocoa">
            {item.title}
          </h3>
          <p className="mt-1.5 max-w-[10rem] text-[0.83rem] leading-[1.25] text-cocoa/78">{item.text}</p>
        </div>
      </div>
    </div>
  )
}

export default function Science() {
  return (
    <section
      id="science"
      className="scroll-mt-16 bg-[linear-gradient(90deg,#f1e4dc_0%,#ead8cf_72%,#d6b19f_100%)]"
    >
      <Motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65 }}
        className="md:hidden"
      >
        <div className="px-5 pt-20">
          <ScienceEyebrow />
          <h2 className="mt-6 font-serif text-[3.7rem] font-medium leading-[0.88] tracking-[-0.045em] text-cocoa">
            Designed<br />
            to heal,<br />
            layer by layer.
          </h2>
          <p className="mt-6 max-w-md text-base font-medium leading-7 text-cocoa/76">
            Medical-grade silicone creates the ideal environment for smoother,
            flatter, healthier-looking scars.
          </p>
        </div>

        <img
          src="/science-clean.jpg"
          alt="Layered view of silicone scar tape positioned above healed scar tissue"
          loading="lazy"
          width="1254"
          height="1254"
          className="mt-8 aspect-square w-full object-cover"
        />

        <div className="flex items-center gap-4 px-5 pb-14 pt-7">
          <span aria-hidden="true" className="h-px w-16 bg-cocoa/65" />
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cocoa/78">
            Real science. Real confidence.
          </p>
        </div>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-70px' }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto hidden aspect-square w-full max-w-[100rem] overflow-hidden bg-[#eddcd3] md:block"
      >
        <img
          src="/science-clean.jpg"
          alt="Layered view of silicone scar tape positioned above healed scar tissue"
          loading="lazy"
          width="1254"
          height="1254"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute left-[5.8%] top-[6.2%] z-10">
          <ScienceEyebrow />
          <span aria-hidden="true" className="mt-3 block h-px w-[17rem] bg-cocoa/30" />
        </div>

        <div className="absolute left-[5.8%] top-[12.2%] z-10 w-[44%]">
          <h2 className="font-serif text-[clamp(3.5rem,6.15vw,5.55rem)] font-medium leading-[0.98] tracking-[-0.045em] text-cocoa">
            Designed<br />
            to heal,<br />
            layer by layer.
          </h2>
          <p className="mt-6 max-w-[29rem] text-[clamp(1rem,1.65vw,1.45rem)] font-medium leading-[1.35] tracking-[-0.015em] text-cocoa/78">
            Medical-grade silicone creates the<br className="hidden lg:block" />
            ideal environment for smoother,<br className="hidden lg:block" />
            flatter, healthier-looking scars.
          </p>
        </div>

        <svg aria-hidden="true" viewBox="0 0 100 100" className="pointer-events-none absolute inset-0 z-[5] h-full w-full" fill="none">
          <g stroke="currentColor" strokeWidth="0.14" className="text-cocoa">
            <path d="M70 17.2 L77 10.5 L80.2 10.5" />
            <path d="M72.5 44 L77 32 L80.2 32" />
            <path d="M29.5 51.5 L42.2 51.5 L44.6 50.4" />
            <path d="M31 61 L44.6 61" />
            <path d="M31 72 L40 72 L43.2 68.5" />
          </g>
          <g fill="currentColor" className="text-cocoa">
            <circle cx="70" cy="17.2" r="0.42" />
            <circle cx="72.5" cy="44" r="0.42" />
            <circle cx="44.6" cy="50.4" r="0.42" />
            <circle cx="44.6" cy="61" r="0.42" />
            <circle cx="43.2" cy="68.5" r="0.42" />
          </g>
        </svg>

        {layerCallouts.map((item) => <Callout key={item.title} item={item} />)}

        <div className="absolute bottom-[4.2%] left-[5.8%] z-10 flex items-center gap-4">
          <span aria-hidden="true" className="h-px w-16 bg-cocoa/70" />
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-cocoa/78">
            Real science. Real confidence.
          </p>
        </div>
      </Motion.div>
    </section>
  )
}
