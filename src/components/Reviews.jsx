import { motion as Motion } from 'framer-motion'
import { ArrowUpRight, PackageCheck, Star } from 'lucide-react'
import { AMAZON_URL } from '../config'

const reviews = [
  {
    name: 'Sam Fields',
    title: 'Very pleased',
    stars: 5,
    date: '1 September 2026',
    badge: 'Verified Purchase',
    quote:
      'Really pleased so far. Had a gash whilst playing football and was recommended to use silicone scar tape once it had healed. I’ve been using this for about a week and I’m impressed as the scar has reduced such that I barely notice it on my skin. It sticks well without feeling irritating.',
  },
  {
    name: 'Navleen Kaur',
    title: 'Superb Quality',
    stars: 5,
    date: '25 August 2026',
    badge: 'Verified Purchase',
    quote:
      'I got this tape for a deep cut on my leg. One of the things that really impressed me was the quality of the tape and the medical grade silicone. The tape stays put and doesn’t curl up around the edges despite me walking a lot all day. A few days into using it and the scar looks flatter and the redness is also subsiding! Really happy with the early results so far.',
  },
  {
    name: 'Alisha Ibrahim',
    title: 'Really impressed after just a few days',
    stars: 5,
    date: '30 August 2026',
    badge: 'Verified Purchase',
    quote:
      'Received this about 5–6 days ago after a pretty bad gash on my arm and have found it really helpful so far. The redness has already gone down quite a bit which I wasn’t expecting this quickly. The adhesive is really strong and stays on well but I barely notice it’s there. I’ve even left it on while showering and it stayed in place fine. Still early days but very happy with it so far.',
  },
  {
    name: 'Maxine Candlin',
    title: 'Use regularly',
    stars: 5,
    date: '10 August 2026',
    badge: 'Verified Purchase',
    quote: 'Definitely flattened my knee replacement scar',
  },
]

function ReviewStars({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={14}
          strokeWidth={index < count ? 0 : 1.3}
          className={index < count ? 'fill-rating text-rating' : 'text-rating/40'}
        />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-16 bg-cream px-5 py-20 sm:px-7 md:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2rem] border border-cocoa/8 bg-[linear-gradient(135deg,#fffaf7_0%,#f1ded5_100%)] shadow-[0_25px_70px_rgba(91,55,42,0.09)]"
        >
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            <div className="flex flex-col justify-center border-b border-cocoa/8 p-8 sm:p-11 lg:border-b-0 lg:border-r lg:p-14">
              <p className="section-label">Amazon reviews</p>
              <div className="mt-8 [&_svg]:size-8">
                <ReviewStars count={5} />
              </div>
              <h2 className="mt-6 font-serif text-[2.7rem] font-medium leading-none tracking-[-0.025em] text-cocoa sm:text-[3.35rem]">
                Loved by customers.
              </h2>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-11 lg:p-14">
              <PackageCheck size={30} strokeWidth={1.4} className="text-rose-dark" />
              <h2 className="mt-6 max-w-xl font-serif text-[2.5rem] font-medium leading-[1.02] tracking-[-0.02em] text-cocoa sm:text-[3.2rem]">
                See what people are saying.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-cocoa/62">
                Explore more customer feedback about Deep Skin on our Amazon listing.
              </p>
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 w-fit cursor-pointer items-center gap-2 rounded-full bg-cocoa px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-cocoa-light"
              >
                See more on Amazon
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </Motion.div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {reviews.map((review, index) => (
            <Motion.article
              key={`${review.name}-${review.date}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col rounded-[1.5rem] border border-cocoa/8 bg-cream-light p-6 sm:p-8"
            >
              <ReviewStars count={review.stars} />
              <h3 className="mt-4 font-serif text-[1.55rem] font-semibold leading-tight text-cocoa">{review.title}</h3>
              <blockquote className="mt-3 flex-1 text-sm leading-6 text-cocoa/62">
                “{review.quote}”
              </blockquote>
              <div className="mt-6 border-t border-cocoa/8 pt-4">
                <p className="text-sm font-semibold text-cocoa">{review.name}</p>
                <p className="mt-1 text-[0.7rem] leading-5 text-cocoa/43">
                  Reviewed in the United Kingdom on {review.date}
                </p>
                <p className="mt-1 text-[0.7rem] font-semibold text-rose-dark">{review.badge}</p>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
