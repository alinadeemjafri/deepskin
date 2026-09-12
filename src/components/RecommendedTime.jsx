import { motion as Motion } from 'framer-motion'
import { CalendarRange, Clock3, ShieldCheck } from 'lucide-react'

const routine = [
  {
    icon: ShieldCheck,
    label: 'Begin carefully',
    title: 'Start gradually',
    text: 'Begin with shorter wear and increase the time as your skin becomes comfortable with the tape.',
  },
  {
    icon: Clock3,
    label: 'Daily target',
    title: 'At least 12 hours',
    text: 'Once comfortable, aim for 12 or more hours of wear each day for a consistent routine.',
  },
  {
    icon: CalendarRange,
    label: 'Recommended course',
    title: '8–12 weeks',
    text: 'Use daily for at least 8–12 weeks. Older or more established scars may need longer.',
  },
]

export default function RecommendedTime() {
  return (
    <section id="recommended-time" className="scroll-mt-16 bg-cocoa px-5 py-20 text-white sm:px-7 md:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-blush-deep">Recommended time</p>
            <h2 className="mt-4 font-serif text-[2.55rem] font-medium leading-[0.98] tracking-[-0.025em] sm:text-[3.35rem] md:text-[4rem]">
              Consistency is the routine.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-white/62 lg:justify-self-end">
            Scar care is gradual. Give the tape enough daily contact time, keep the skin and tape clean,
            and stay with the routine for a meaningful period.
          </p>
        </Motion.div>

        <div className="mt-12 grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] md:grid-cols-3 lg:mt-16">
          {routine.map((item, index) => (
            <Motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="border-b border-white/10 p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-9"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-white/10 text-blush-deep">
                <item.icon size={20} strokeWidth={1.6} />
              </div>
              <p className="mt-7 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/42">{item.label}</p>
              <h3 className="mt-2 font-serif text-[2rem] font-medium text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/57">{item.text}</p>
            </Motion.div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-6 text-white/43">
          Use only on clean, dry and fully healed skin. Remove regularly for cleansing, allow the tape to air dry,
          and stop using it if irritation occurs. Individual results and treatment time vary.
        </p>
      </div>
    </section>
  )
}
