import { CalendarDays, Clock3, ShieldCheck } from 'lucide-react'
import { motion as Motion } from 'framer-motion'

const routineItems = [
  {
    icon: ShieldCheck,
    eyebrow: 'Begin carefully',
    title: 'Start gradually',
    text: 'Begin with shorter wear and increase the time as your skin becomes comfortable with the tape.',
  },
  {
    icon: Clock3,
    eyebrow: 'Daily target',
    title: 'At least 12 hours',
    text: 'Once comfortable, aim for at least 12 hours of wear each day for a consistent routine.',
  },
  {
    icon: CalendarDays,
    eyebrow: 'Recommended course',
    title: '8–12 weeks',
    text: 'Use consistently for at least 8–12 weeks. Older or more established scars may need longer.',
  },
]

export default function RecommendedTime() {
  return (
    <section
      id="recommended-time"
      className="scroll-mt-16 bg-cocoa text-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-7 md:py-24 lg:px-10">

        {/* INTRO */}
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#e7b9a9] sm:text-[0.75rem]">
            Recommended time
          </p>

          <h2 className="mt-5 max-w-[20rem] font-serif text-[3rem] font-medium leading-[0.95] tracking-[-0.04em] text-white sm:max-w-none sm:text-[4rem]">
            Consistency is the routine.
          </h2>

          <p className="mt-6 max-w-2xl text-[0.98rem] leading-7 text-white/65 sm:text-[1.05rem]">
            Scar care is gradual. Give the tape enough daily contact time,
            keep the skin and tape clean, and stay consistent over time.
          </p>
        </Motion.div>


        {/* MOBILE COMPACT ROUTINE */}
        <div className="mt-10 space-y-3 md:hidden">
          {routineItems.map((item, index) => {
            const Icon = item.icon

            return (
              <Motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className="
                  flex
                  items-start
                  gap-4
                  rounded-[1.4rem]
                  border
                  border-white/10
                  bg-white/[0.045]
                  px-4
                  py-4
                "
              >
                {/* ICON */}
                <div className="
                  flex
                  size-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-[#e7b9a9]
                ">
                  <Icon
                    aria-hidden="true"
                    className="size-5"
                    strokeWidth={1.7}
                  />
                </div>

                {/* TEXT */}
                <div className="min-w-0">
                  <p className="
                    text-[0.62rem]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-white/45
                  ">
                    {item.eyebrow}
                  </p>

                  <h3 className="
                    mt-1.5
                    font-serif
                    text-[1.65rem]
                    font-medium
                    leading-tight
                    tracking-[-0.025em]
                    text-white
                  ">
                    {item.title}
                  </h3>

                  <p className="
                    mt-2
                    text-[0.82rem]
                    leading-[1.5]
                    text-white/58
                  ">
                    {item.text}
                  </p>
                </div>
              </Motion.div>
            )
          })}
        </div>


        {/* DESKTOP */}
        <div className="mt-14 hidden grid-cols-3 gap-5 md:grid">
          {routineItems.map((item, index) => {
            const Icon = item.icon

            return (
              <Motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="
                  rounded-[1.7rem]
                  border
                  border-white/10
                  bg-white/[0.045]
                  p-6
                "
              >
                <div className="
                  flex
                  size-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-[#e7b9a9]
                ">
                  <Icon
                    aria-hidden="true"
                    className="size-5"
                    strokeWidth={1.7}
                  />
                </div>

                <p className="
                  mt-8
                  text-[0.68rem]
                  font-semibold
                  uppercase
                  tracking-[0.23em]
                  text-white/45
                ">
                  {item.eyebrow}
                </p>

                <h3 className="
                  mt-3
                  font-serif
                  text-[2rem]
                  font-medium
                  tracking-[-0.025em]
                  text-white
                ">
                  {item.title}
                </h3>

                <p className="
                  mt-4
                  text-[0.92rem]
                  leading-6
                  text-white/58
                ">
                  {item.text}
                </p>
              </Motion.article>
            )
          })}
        </div>


        {/* SAFETY NOTE */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="
            max-w-4xl
            text-[0.72rem]
            leading-5
            text-white/38
            sm:text-[0.8rem]
          ">
            Use only on clean, dry and fully healed skin. Remove regularly
            for cleaning, allow the tape to air dry, and discontinue use if
            irritation occurs. Individual treatment time may vary.
          </p>
        </div>

      </div>
    </section>
  )
}
