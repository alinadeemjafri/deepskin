import { motion as Motion } from 'framer-motion'

const stories = [
  {
    title: 'C-section',
    image: '/problem-csection.png',
    mobileImage: '/problem-csection-mobile.jpg',
    alt: 'Healed C-section scar',
  },
  {
    title: 'Surgery',
    image: '/problem-surgery.png',
    mobileImage: '/problem-surgery-mobile.jpg',
    alt: 'Healed shoulder surgery scar',
  },
  {
    title: 'Injury',
    image: '/problem-injury.png',
    mobileImage: '/problem-injury-mobile.jpg',
    alt: 'Healed scar following an injury',
  },
  {
    title: 'Burn',
    image: '/problem-burn.png',
    mobileImage: '/problem-burn-mobile.jpg',
    alt: 'Healed burn scar',
  },
  {
    title: 'Keloid',
    image: '/problem-keloid.png',
    mobileImage: '/problem-keloid-mobile.jpg',
    alt: 'Raised keloid scar',
  },
]

export default function Problem() {
  return (
    <section
      id="problem"
      className="overflow-hidden bg-[#f7efe9]"
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
        {/* MAIN PROBLEM IMAGE */}
        <div className="relative h-[700px] overflow-hidden">
          <img
            src="/problem-main.jpg"
            alt="Woman looking at a healed abdominal scar"
            loading="lazy"
            decoding="async"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-[62%_38%]
            "
          />

          {/* LEFT READABILITY GRADIENT */}
          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-[linear-gradient(90deg,rgba(248,241,236,0.98)_0%,rgba(248,241,236,0.94)_32%,rgba(248,241,236,0.72)_49%,rgba(248,241,236,0.18)_70%,rgba(248,241,236,0)_100%)]
            "
          />

          {/* TOP FADE */}
          <div
            aria-hidden="true"
            className="
              absolute
              inset-x-0
              top-0
              h-28
              bg-gradient-to-b
              from-[#f7efe9]
              to-transparent
            "
          />

          {/* COPY OVER IMAGE */}
          <div className="relative z-10 px-5 pt-14">
            <div className="flex items-center gap-4">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-cocoa/70">
                The problem
              </p>

              <span
                aria-hidden="true"
                className="h-px w-16 bg-cocoa/35"
              />
            </div>

            <h2 className="mt-7 max-w-[19rem] font-serif text-[3.2rem] font-medium leading-[0.91] tracking-[-0.05em] text-cocoa">
              The wound
              <br />
              healed.
              <br />

              <span className="text-[#956b58]">
                But the scar
                <br />
                stayed.
              </span>
            </h2>

            <p className="mt-7 max-w-[17rem] text-[0.96rem] font-medium leading-[1.55] text-cocoa/78">
              Surgery. A C-section. An injury. A burn. However it happened,
              your scar can be a lasting reminder.
            </p>

            <p className="mt-5 font-serif text-[1.35rem] font-semibold text-[#956b58]">
              You&apos;re not alone.
            </p>

            {/* STATISTIC */}
            <div
              className="
                mt-5
                flex
                max-w-[19rem]
                items-center
                gap-4
                rounded-[1.25rem]
                border
                border-cocoa/10
                bg-[#f7efe9]/90
                px-4
                py-4
                shadow-[0_10px_30px_rgba(57,40,36,0.08)]
                backdrop-blur-sm
              "
            >
              <div className="shrink-0 border-r border-cocoa/20 pr-4">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  aria-hidden="true"
                  className="size-11 text-[#956b58]"
                >
                  <circle
                    cx="24"
                    cy="14"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <circle
                    cx="10"
                    cy="19"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <circle
                    cx="38"
                    cy="19"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <path
                    d="M14 38C14 30.8 18.5 26 24 26C29.5 26 34 30.8 34 38"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M2 37C2 31.5 5.3 28 10 28C13 28 15.5 29.6 17 32"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M46 37C46 31.5 42.7 28 38 28C35 28 32.5 29.6 31 32"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p className="text-[0.82rem] leading-[1.42] text-cocoa/80">
                Around{' '}
                <span className="font-semibold text-cocoa">
                  100 million people
                </span>{' '}
                develop scars every year.
              </p>
            </div>
          </div>
        </div>

        {/* DIFFERENT STORIES */}
        <div className="px-5 pb-12 pt-11">
          {/* CENTERED HEADING */}
          <div className="text-center">
            <p className="whitespace-nowrap font-serif text-[1.75rem] font-medium italic leading-none tracking-[-0.03em] text-cocoa">
              Different stories.{' '}
              <span className="text-[#956b58]">
                Same journey.
              </span>
            </p>

            <span
              aria-hidden="true"
              className="mx-auto mt-4 block h-px w-14 bg-cocoa/30"
            />
          </div>

          {/* MOBILE STORY CAROUSEL */}
          <div
            className="
              mt-8
              flex
              snap-x
              snap-mandatory
              gap-3
              overflow-x-auto
              pb-2
              pr-[20vw]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {stories.map((story) => (
              <div
                key={story.title}
                className="w-[39vw] max-w-[165px] shrink-0 snap-start"
              >
                <div className="aspect-[0.88] overflow-hidden rounded-[1rem]">
                  <img
                    src={story.mobileImage}
                    alt={story.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="mt-3 min-h-[2rem] text-center text-[0.64rem] font-semibold uppercase leading-[1.4] tracking-[0.18em] text-cocoa">
                  {story.title}
                </p>

                <span
                  aria-hidden="true"
                  className="mx-auto mt-2 block h-px w-10 bg-cocoa/30"
                />
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE CLOSING */}
        <div className="border-t border-cocoa/8 px-5 py-14 text-center">
          <p className="text-[0.64rem] font-semibold uppercase tracking-[0.27em] text-cocoa/60">
            Now it&apos;s time for what comes after.
          </p>

          <h3 className="mx-auto mt-5 max-w-[22rem] font-serif text-[2.55rem] font-medium leading-[1.12] tracking-[-0.04em] text-cocoa">
            Caring for your scar
            <br />
            can make a difference.
          </h3>
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
        className="mx-auto hidden max-w-7xl px-10 py-28 md:block"
      >
        {/* MAIN DESKTOP PROBLEM IMAGE */}
        <div className="relative min-h-[720px] overflow-hidden rounded-[2rem]">
          <img
            src="/problem-main.jpg"
            alt="Woman looking at a healed abdominal scar"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* DESKTOP READABILITY GRADIENT */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,241,236,0.98)_0%,rgba(248,241,236,0.92)_34%,rgba(248,241,236,0.48)_55%,rgba(248,241,236,0)_78%)]"
          />

          {/* DESKTOP COPY */}
          <div className="relative z-10 max-w-[34rem] px-12 py-14">
            <div className="flex items-center gap-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cocoa/70">
                The problem
              </p>

              <span
                aria-hidden="true"
                className="h-px w-24 bg-cocoa/35"
              />
            </div>

            <h2 className="mt-8 font-serif text-[clamp(4.2rem,6vw,6.2rem)] font-medium leading-[0.9] tracking-[-0.05em] text-cocoa">
              The wound
              <br />
              healed.
              <br />

              <span className="text-[#956b58]">
                But the scar
                <br />
                stayed.
              </span>
            </h2>

            <p className="mt-8 max-w-md text-[1rem] font-medium leading-[1.7] text-cocoa/72">
              Surgery. A C-section. An injury. A burn. However it happened,
              your scar can be a lasting reminder.
            </p>

            <p className="mt-6 font-serif text-[1.55rem] font-semibold text-[#956b58]">
              You&apos;re not alone.
            </p>

            {/* DESKTOP STATISTIC */}
            <div className="mt-6 max-w-md rounded-[1.4rem] border border-cocoa/10 bg-[#f7efe9]/90 p-5 backdrop-blur-sm">
              <p className="text-[0.95rem] leading-[1.55] text-cocoa/80">
                Around{' '}
                <span className="font-semibold text-cocoa">
                  100 million people
                </span>{' '}
                develop scars every year.
              </p>
            </div>
          </div>
        </div>

        {/* DESKTOP STORIES */}
        <div className="mt-20">
          {/* CENTERED HEADING */}
          <div className="text-center">
            <p className="whitespace-nowrap font-serif text-[2.7rem] font-medium italic leading-none tracking-[-0.03em] text-cocoa">
              Different stories.{' '}
              <span className="text-[#956b58]">
                Same journey.
              </span>
            </p>

            <span
              aria-hidden="true"
              className="mx-auto mt-5 block h-px w-20 bg-cocoa/30"
            />
          </div>

          {/* DESKTOP STORY CAROUSEL */}
          <div
            className="
              mt-10
              flex
              snap-x
              snap-mandatory
              gap-6
              overflow-x-auto
              pb-5
              pr-[12vw]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {stories.map((story) => (
              <div
                key={story.title}
                className="w-[24vw] max-w-[320px] shrink-0 snap-start"
              >
                <div className="aspect-[0.88] overflow-hidden rounded-[1.3rem]">
                  <img
                    src={story.image}
                    alt={story.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="mt-5 min-h-[2rem] text-center text-[0.72rem] font-semibold uppercase leading-[1.4] tracking-[0.24em] text-cocoa">
                  {story.title}
                </p>

                <span
                  aria-hidden="true"
                  className="mx-auto mt-3 block h-px w-14 bg-cocoa/30"
                />
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP CLOSING */}
        <div className="mx-auto mt-24 max-w-3xl border-t border-cocoa/10 pt-16 text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cocoa/60">
            Now it&apos;s time for what comes after.
          </p>

          <h3 className="mt-6 font-serif text-[clamp(3rem,5vw,4.8rem)] font-medium leading-[1.08] tracking-[-0.045em] text-cocoa">
            Caring for your scar
            <br />
            can make a difference.
          </h3>
        </div>
      </Motion.div>
    </section>
  )
}
