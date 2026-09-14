import { useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  Droplet,
  Leaf,
  Shield,
  Waves,
  Wind,
} from 'lucide-react'

const layerCallouts = [
  {
    icon: Shield,
    title: 'Medical-grade silicone',
    text: 'Soft and flexible for extended wear.',
    desktopClass: 'left-[81.5%] top-[6.8%] w-[16%]',
    iconClass: 'bg-[#ead9d0]',
  },
  {
    icon: Waves,
    title: 'Flexible & discreet',
    text: 'Moves with you for everyday wear.',
    desktopClass: 'left-[81.5%] top-[28.6%] w-[17%]',
    iconClass: 'border border-white/55 bg-white/16',
  },
  {
    icon: Wind,
    title: 'Protective outer layer',
    text: 'Made for comfortable everyday wear.',
    desktopClass: 'left-[5.8%] top-[49.1%] w-[26%]',
    iconClass: 'bg-[#ead9d0]',
  },
  {
    icon: Droplet,
    title: 'Silicone layer',
    text: 'Soft and flexible against the skin.',
    desktopClass: 'left-[5.8%] top-[59.3%] w-[27%]',
    iconClass: 'bg-[#ead9d0]',
  },
  {
    icon: Leaf,
    title: 'Self-adhesive layer',
    text: 'Helps each strip stay in place.',
    desktopClass: 'left-[5.8%] top-[69.9%] w-[28%]',
    iconClass: 'bg-[#ead9d0]',
  },
]

const mobileLayers = [
  {
    id: 'outer',
    icon: Wind,
    title: 'Protective outer layer',
    text: 'Designed for comfortable everyday wear.',
  },
  {
    id: 'core',
    icon: Droplet,
    title: 'Medical-grade silicone layer',
    text: 'Soft and flexible against fully healed skin.',
    detailImage: '/silicone-core-detail.jpg',
  },
  {
    id: 'adhesive',
    icon: Leaf,
    title: 'Self-adhesive layer',
    text: 'Helps each strip stay in place during your routine.',
  },
]

function ScienceEyebrow() {
  return (
    <div className="flex items-center gap-4">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.27em] text-cocoa sm:text-[0.78rem]">
        The science of scar care
      </p>

      <span
        aria-hidden="true"
        className="h-px w-16 bg-cocoa/65 sm:w-24"
      />
    </div>
  )
}

function Callout({ item }) {
  const Icon = item.icon

  return (
    <div className={`absolute z-10 ${item.desktopClass}`}>
      <div className="flex items-center gap-3">
        <span
          className={`flex size-16 shrink-0 items-center justify-center rounded-full ${item.iconClass}`}
        >
          <Icon
            aria-hidden="true"
            className="size-9 text-cocoa"
            strokeWidth={1.65}
          />
        </span>

        <div>
          <h3 className="max-w-[10rem] text-[0.95rem] font-semibold uppercase leading-[1.12] tracking-[0.035em] text-cocoa">
            {item.title}
          </h3>

          <p className="mt-1.5 max-w-[10rem] text-[0.83rem] leading-[1.25] text-cocoa/78">
            {item.text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Science() {
  const [activeLayer, setActiveLayer] = useState('outer')

  useEffect(() => {
    const img = new Image()
    img.src = '/silicone-core-detail.jpg'
  }, [])

  const selectedLayer =
    mobileLayers.find((layer) => layer.id === activeLayer) ||
    mobileLayers[0]

  const SelectedIcon = selectedLayer.icon

  return (
    <section
      id="science"
      className="scroll-mt-16 bg-[linear-gradient(90deg,#f1e4dc_0%,#ead8cf_72%,#d6b19f_100%)]"
    >
      {/* MOBILE */}
      <Motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          margin: '-60px',
        }}
        transition={{
          duration: 0.65,
        }}
        className="md:hidden"
      >
        {/* BACKED BY SCIENCE */}
        <div className="px-5 pb-6 pt-10">
          <div
            className="
              relative
              h-[350px]
              overflow-hidden
              rounded-[1.75rem]
              border
              border-white/25
              shadow-[0_16px_40px_rgba(57,40,36,0.08)]
            "
          >
            <img
              src="/science-backed-mobile.jpg"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="
                absolute
                inset-0
                h-full
                w-full
                scale-[1.12]
                object-cover
                object-[center_28%]
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[linear-gradient(180deg,rgba(250,244,240,0.97)_0%,rgba(250,244,240,0.90)_38%,rgba(250,244,240,0.55)_58%,rgba(250,244,240,0.08)_82%,rgba(250,244,240,0)_100%)]
              "
            />

            <div className="absolute inset-x-0 top-0 z-10 px-6 pt-7">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-cocoa/65">
                Silicone scar care
              </p>

              <h3 className="mt-4 max-w-[19rem] font-serif text-[2.6rem] font-medium leading-[0.95] tracking-[-0.04em] text-cocoa">
                Simple care.
                <br />
                Consistent routine.
              </h3>

              <p className="mt-5 max-w-[18.5rem] text-[0.86rem] font-medium leading-[1.55] text-cocoa/72">
                Silicone sheets and gels are widely used as a non-invasive option
                in scar-management guidance. Evidence quality varies by outcome.
              </p>
            </div>
          </div>
        </div>

        {/* INTRO */}
        <div className="px-5 pt-10">
          <h2 className="font-serif text-[3.45rem] font-medium leading-[0.9] tracking-[-0.045em] text-cocoa">
            Made for
            <br />
            daily care,
            <br />
            layer by layer.
          </h2>

          <p className="mt-6 max-w-md text-[0.98rem] font-medium leading-7 text-cocoa/76">
            Soft, flexible medical-grade silicone sits comfortably against fully
            healed skin for extended daily wear.
          </p>
        </div>

        {/* INTERACTIVE IMAGE */}
        <div className="relative mt-5 h-[340px] overflow-hidden">
          <img
            src="/science-layers-mobile.jpg"
            alt="Three-layer construction of Deep Skin silicone scar tape"
            loading="lazy"
            className="absolute inset-0 h-full w-full scale-[1.08] object-cover object-[center_82%]"
          />

          <button
            type="button"
            onClick={() => setActiveLayer('outer')}
            aria-label="Show breathable outer layer"
            className={`absolute left-[68%] top-[26%] flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 text-xl font-light shadow-lg backdrop-blur-sm transition-all duration-200 ${
              activeLayer === 'outer'
                ? 'scale-110 bg-cocoa text-white'
                : 'bg-white/90 text-cocoa'
            }`}
          >
            +
          </button>

          <button
            type="button"
            onClick={() => setActiveLayer('core')}
            aria-label="Show silicone core"
            className={`absolute left-[57%] top-[42%] flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 text-xl font-light shadow-lg backdrop-blur-sm transition-all duration-200 ${
              activeLayer === 'core'
                ? 'scale-110 bg-cocoa text-white'
                : 'bg-white/90 text-cocoa'
            }`}
          >
            +
          </button>

          <button
            type="button"
            onClick={() => setActiveLayer('adhesive')}
            aria-label="Show gentle adhesive layer"
            className={`absolute left-[46%] top-[58%] flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 text-xl font-light shadow-lg backdrop-blur-sm transition-all duration-200 ${
              activeLayer === 'adhesive'
                ? 'scale-110 bg-cocoa text-white'
                : 'bg-white/90 text-cocoa'
            }`}
          >
            +
          </button>
        </div>

        {/* DETAILS */}
        <div className="px-5 pb-14 pt-4">
          <p className="mb-4 text-center text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cocoa/60">
            Tap a layer to discover
          </p>

          <Motion.div
            key={selectedLayer.id}
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.22,
            }}
            className="rounded-[1.5rem] border border-cocoa/10 bg-white/45 p-5 backdrop-blur-sm"
          >
            {selectedLayer.detailImage && (
              <Motion.div
                initial={{
                  opacity: 0,
                  scale: 0.94,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.28,
                }}
                className="mb-5 flex justify-center"
              >
                <div className="relative size-[150px] overflow-hidden rounded-full border-[2px] border-cocoa/70 bg-white/25 shadow-[0_10px_30px_rgba(57,40,36,0.12)]">
                  <img
                    src={selectedLayer.detailImage}
                    alt="Macro close-up of the silicone core material"
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover object-center"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-[5px] rounded-full border border-white/40"
                  />
                </div>
              </Motion.div>
            )}

            <div className="flex items-center gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#ead9d0]">
                <SelectedIcon
                  aria-hidden="true"
                  className="size-6 text-cocoa"
                  strokeWidth={1.65}
                />
              </span>

              <div>
                <h3 className="text-[0.84rem] font-semibold uppercase leading-tight tracking-[0.04em] text-cocoa">
                  {selectedLayer.title}
                </h3>

                <p className="mt-1.5 text-sm leading-5 text-cocoa/72">
                  {selectedLayer.text}
                </p>
              </div>
            </div>
          </Motion.div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-[1.25rem] border border-cocoa/5 bg-white/25 p-4">
              <Shield
                aria-hidden="true"
                className="size-6 text-cocoa"
                strokeWidth={1.65}
              />

              <h3 className="mt-3 text-[0.72rem] font-semibold uppercase leading-tight tracking-[0.035em] text-cocoa">
                Medical-grade silicone
              </h3>

              <p className="mt-1.5 text-xs leading-4 text-cocoa/68">
                Soft and flexible for extended wear.
              </p>
            </div>

            <div className="rounded-[1.25rem] border border-cocoa/5 bg-white/25 p-4">
              <Waves
                aria-hidden="true"
                className="size-6 text-cocoa"
                strokeWidth={1.65}
              />

              <h3 className="mt-3 text-[0.72rem] font-semibold uppercase leading-tight tracking-[0.035em] text-cocoa">
                Ultra-thin &amp; flexible
              </h3>

              <p className="mt-1.5 text-xs leading-4 text-cocoa/68">
                Moves with you discreetly.
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-16 bg-cocoa/65"
            />

            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-cocoa/75">
              Simple care. Consistent routine.
            </p>
          </div>
        </div>
      </Motion.div>

      {/* DESKTOP */}
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          margin: '-70px',
        }}
        transition={{
          duration: 0.7,
        }}
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

          <span
            aria-hidden="true"
            className="mt-3 block h-px w-[17rem] bg-cocoa/30"
          />
        </div>

        <div className="absolute left-[5.8%] top-[12.2%] z-10 w-[44%]">
          <h2 className="font-serif text-[clamp(3.5rem,6.15vw,5.55rem)] font-medium leading-[0.98] tracking-[-0.045em] text-cocoa">
            Made for
            <br />
            daily care,
            <br />
            layer by layer.
          </h2>

          <p className="mt-6 max-w-[29rem] text-[clamp(1rem,1.65vw,1.45rem)] font-medium leading-[1.35] tracking-[-0.015em] text-cocoa/78">
            Soft, flexible medical-grade silicone
            <br className="hidden lg:block" />
            sits comfortably against fully healed skin
            <br className="hidden lg:block" />
            for extended daily wear.
          </p>
        </div>

        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          className="pointer-events-none absolute inset-0 z-[5] h-full w-full"
          fill="none"
        >
          <g
            stroke="currentColor"
            strokeWidth="0.14"
            className="text-cocoa"
          >
            <path d="M70 17.2 L77 10.5 L80.2 10.5" />
            <path d="M72.5 44 L77 32 L80.2 32" />
            <path d="M29.5 51.5 L42.2 51.5 L44.6 50.4" />
            <path d="M31 61 L44.6 61" />
            <path d="M31 72 L40 72 L43.2 68.5" />
          </g>

          <g
            fill="currentColor"
            className="text-cocoa"
          >
            <circle cx="70" cy="17.2" r="0.42" />
            <circle cx="72.5" cy="44" r="0.42" />
            <circle cx="44.6" cy="50.4" r="0.42" />
            <circle cx="44.6" cy="61" r="0.42" />
            <circle cx="43.2" cy="68.5" r="0.42" />
          </g>
        </svg>

        {layerCallouts.map((item) => (
          <Callout
            key={item.title}
            item={item}
          />
        ))}

        <div className="absolute bottom-[4.2%] left-[5.8%] z-10 flex items-center gap-4">
          <span
            aria-hidden="true"
            className="h-px w-16 bg-cocoa/70"
          />

          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-cocoa/78">
            Real science. Real confidence.
          </p>
        </div>
      </Motion.div>
    </section>
  )
}
