import { useEffect, useRef, useState } from 'react'
import { motion as Motion } from 'framer-motion'

const steps = [
  {
    title: 'Clean & dry',
    text: 'Clean the scar area and make sure the skin is completely dry.',
    image: '/how-step-clean.jpg',
    alt: 'Cleaning healed skin before applying silicone scar tape',
  },
  {
    title: 'Cut to size',
    text: 'Trim the tape so it comfortably covers the scar.',
    image: '/how-step-cut.jpg',
    alt: 'Cutting silicone scar tape to the required size with scissors',
  },
  {
    title: 'Apply & wear consistently',
    text: 'Place the tape over the scar, press gently and wear consistently as directed.',
    image: '/how-step-wear.jpg',
    alt: 'Silicone scar tape applied smoothly over healed skin',
  },
  {
    title: 'Wash & reuse',
    text: 'Gently wash the tape, allow it to air dry and reuse while adhesion remains effective.',
    image: '/how-step-reuse.jpg',
    alt: 'Washing reusable silicone scar tape under running water',
  },
]

export default function HowItWorks() {
  const carouselRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleScroll = () => {
      const cards = Array.from(
        carousel.querySelectorAll('[data-step-card]')
      )

      if (!cards.length) return

      const carouselRect = carousel.getBoundingClientRect()
      const carouselCenter =
        carouselRect.left + carouselRect.width / 2

      let closestIndex = 0
      let closestDistance = Infinity

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect()
        const cardCenter = rect.left + rect.width / 2
        const distance = Math.abs(cardCenter - carouselCenter)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setActiveIndex(closestIndex)
    }

    carousel.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    handleScroll()

    return () => {
      carousel.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToStep = (index) => {
    const carousel = carouselRef.current
    if (!carousel) return

    const cards = carousel.querySelectorAll('[data-step-card]')
    const card = cards[index]

    if (!card) return

    card.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }

  return (
    <section
      id="how-to-use"
      className="scroll-mt-16 overflow-hidden bg-white/45 py-14 md:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION INTRO */}
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl px-5 text-center sm:px-7"
        >
          <p className="section-label">
            How to use
          </p>

          <h2 className="section-title mt-4">
            Simple steps.
            <br className="md:hidden" />
            {' '}Real consistency.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[0.98rem] leading-7 text-cocoa/60">
            A straightforward daily routine designed to make scar care
            easier to maintain.
          </p>
        </Motion.div>


        {/* MOBILE CAROUSEL */}
        <div className="mt-9 md:hidden">

          <div
            ref={carouselRef}
            className="
              flex
              snap-x
              snap-mandatory
              gap-4
              overflow-x-auto
              pl-5
              pr-[34vw]
              pb-2
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {steps.map((step, index) => (

              <Motion.article
                key={step.title}
                data-step-card
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  margin: '-30px',
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                className="
                  w-[60vw]
                  max-w-[16.25rem]
                  shrink-0
                  snap-center
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-cocoa/8
                  bg-cream-light
                  shadow-[0_12px_35px_rgba(74,45,34,0.05)]
                "
              >

                {/* IMAGE */}
                <div className="relative h-[205px] overflow-hidden">

                  <img
                    src={step.image}
                    alt={step.alt}
                    loading="lazy"
                    className="
                      block
                      h-full
                      w-full
                      object-cover
                    "
                  />

                  <span
                    className="
                      absolute
                      bottom-3
                      left-3
                      flex
                      size-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/45
                      bg-white/88
                      font-serif
                      text-[0.95rem]
                      font-semibold
                      text-cocoa
                      shadow-sm
                      backdrop-blur-sm
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                </div>


                {/* TEXT AREA — SAME HEIGHT FOR EVERY CARD */}
                <div className="flex min-h-[190px] flex-col px-4 pb-5 pt-4">

                  <h3 className="
                    font-serif
                    text-[1.45rem]
                    font-semibold
                    leading-[1.05]
                    tracking-[-0.025em]
                    text-cocoa
                  ">
                    {step.title}
                  </h3>

                  <p className="
                    mt-2
                    text-[0.78rem]
                    leading-[1.5]
                    text-cocoa/62
                  ">
                    {step.text}
                  </p>

                </div>

              </Motion.article>

            ))}
          </div>


          {/* CAROUSEL INDICATORS */}
          <div className="mt-4 flex items-center justify-center gap-2.5 px-5">

            {steps.map((step, index) => (

              <button
                key={step.title}
                type="button"
                onClick={() => scrollToStep(index)}
                aria-label={`Go to step ${index + 1}: ${step.title}`}
                className={`
                  flex
                  h-8
                  items-center
                  justify-center
                  rounded-full
                  transition-all
                  duration-200
                  ${
                    activeIndex === index
                      ? 'w-10 bg-cocoa text-white'
                      : 'w-8 border border-cocoa/15 bg-white/55 text-cocoa/50'
                  }
                `}
              >
                <span className="text-[0.68rem] font-semibold">
                  {index + 1}
                </span>
              </button>

            ))}

          </div>


          <p className="
            mt-3
            text-center
            text-[0.62rem]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-cocoa/42
          ">
            Swipe to continue
          </p>

        </div>


        {/* DESKTOP */}
        <div className="
          mt-16
          hidden
          gap-5
          px-7
          md:grid
          md:grid-cols-2
          lg:grid-cols-4
          lg:px-10
        ">

          {steps.map((step, index) => (

            <Motion.article
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: '-50px',
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
              }}
              className="
                group
                overflow-hidden
                rounded-[1.6rem]
                border
                border-cocoa/8
                bg-cream-light
                shadow-[0_18px_50px_rgba(74,45,34,0.06)]
              "
            >

              <div className="relative overflow-hidden">

                <img
                  src={step.image}
                  alt={step.alt}
                  loading="lazy"
                  className="
                    aspect-[286/326]
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-[1.025]
                  "
                />

                <span
                  className="
                    absolute
                    bottom-4
                    left-4
                    flex
                    size-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/40
                    bg-white/80
                    font-serif
                    text-lg
                    font-semibold
                    text-cocoa
                    shadow-sm
                    backdrop-blur-sm
                  "
                >
                  {index + 1}
                </span>

              </div>


              <div className="p-6">

                <h3 className="
                  font-serif
                  text-[1.55rem]
                  font-semibold
                  leading-tight
                  text-cocoa
                ">
                  {step.title}
                </h3>

                <p className="
                  mt-3
                  text-sm
                  leading-6
                  text-cocoa/60
                ">
                  {step.text}
                </p>

              </div>

            </Motion.article>

          ))}

        </div>

      </div>
    </section>
  )
}