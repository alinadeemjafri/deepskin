import { useEffect, useRef, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { ArrowUpRight, Star } from 'lucide-react'
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
    quote:
      'Definitely flattened my knee replacement scar',
  },
  {
    name: 'Maher',
    title: 'Works like a charm!',
    stars: 5,
    date: '28 August 2026',
    badge: 'Verified Purchase',
    quote:
      'Amazing product, it actually helped in removing the scarring from my burn mark!!',
  },
  {
    name: 'mihai neaga',
    title: 'Surprisingly well!!',
    stars: 5,
    date: '13 August 2026',
    badge: 'Verified Purchase',
    quote:
      'This worked really well for my mum. After using it for a week I see noticeable change!!! Quite surprised by how well it has worked!',
  },
  {
    name: 'Hussnain Mudassar',
    title: 'Awesome',
    stars: 5,
    date: '9 September 2026',
    badge: 'Verified Purchase',
    quote:
      'Loved it, simple and actually helpful.',
  },
  {
    name: 'JE Ross',
    title: 'Fantastic',
    stars: 5,
    date: '2 August 2026',
    badge: 'Verified Purchase',
    quote:
      'I recently got a pretty bad cut on my arm that left quite a nasty scar. Came across this scar tape and decided to give it a shot. I can easily trim to the needed length, it sticks pretty well and doesn’t hurt to take off. It’s been four days and I can feel my scar is starting to fade already. Highly recommend!',
  },
]

function ReviewStars({ count }) {
  return (
    <div
      className="flex gap-0.5"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={15}
          strokeWidth={index < count ? 0 : 1.3}
          className={
            index < count
              ? 'fill-rating text-rating'
              : 'text-rating/40'
          }
        />
      ))}
    </div>
  )
}

export default function Reviews() {
  const carouselRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const carousel = carouselRef.current

    if (!carousel) return

    const handleScroll = () => {
      const cards = Array.from(
        carousel.querySelectorAll('[data-review-card]')
      )

      if (!cards.length) return

      const carouselRect = carousel.getBoundingClientRect()

      const carouselCenter =
        carouselRect.left + carouselRect.width / 2

      let closestIndex = 0
      let closestDistance = Infinity

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect()

        const cardCenter =
          rect.left + rect.width / 2

        const distance =
          Math.abs(cardCenter - carouselCenter)

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
      carousel.removeEventListener(
        'scroll',
        handleScroll
      )
    }
  }, [])

  const scrollToReview = (index) => {
    const carousel = carouselRef.current

    if (!carousel) return

    const cards =
      carousel.querySelectorAll(
        '[data-review-card]'
      )

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
      id="reviews"
      className="
        scroll-mt-16
        overflow-hidden
        bg-cream
        py-16
        md:py-24
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* =============================== */}
        {/* HEADING                         */}
        {/* =============================== */}

        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-70px',
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mx-auto
            max-w-3xl
            px-5
            text-center
            sm:px-7
          "
        >
          <div className="mx-auto flex justify-center [&_svg]:size-6">
            <ReviewStars count={5} />
          </div>

          <h2
            className="
              mt-5
              font-serif
              text-[3rem]
              font-medium
              leading-[0.95]
              tracking-[-0.04em]
              text-cocoa
              sm:text-[4rem]
            "
          >
            Loved by customers.
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-[0.95rem]
              leading-7
              text-cocoa/60
            "
          >
            Real feedback from customers making
            Deep Skin part of their scar care routine.
          </p>
        </Motion.div>


        {/* =============================== */}
        {/* MOBILE REVIEW CAROUSEL          */}
        {/* =============================== */}

        <div className="mt-10 md:hidden">

          <div
            ref={carouselRef}
            className="
              flex
              snap-x
              snap-mandatory
              items-start
              gap-4
              overflow-x-auto
              pl-5
              pr-[25vw]
              pb-3
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {reviews.map((review, index) => (

              <Motion.article
                key={`${review.name}-${review.date}`}
                data-review-card
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: '-30px',
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.03,
                }}
                className="
                  flex
                  w-[70vw]
                  max-w-[18.5rem]
                  shrink-0
                  snap-center
                  flex-col
                  rounded-[1.5rem]
                  border
                  border-cocoa/8
                  bg-cream-light
                  p-5
                  shadow-[0_12px_35px_rgba(74,45,34,0.05)]
                "
              >

                {/* STARS */}
                <ReviewStars count={review.stars} />


                {/* TITLE */}
                <h3
                  className="
                    mt-4
                    font-serif
                    text-[1.5rem]
                    font-semibold
                    leading-[1.1]
                    tracking-[-0.02em]
                    text-cocoa
                  "
                >
                  {review.title}
                </h3>


                {/* REVIEW */}
                <blockquote
                  className="
                    mt-3
                    text-[0.82rem]
                    leading-[1.55]
                    text-cocoa/62
                  "
                >
                  “{review.quote}”
                </blockquote>


                {/* VERIFIED PURCHASE */}
                <div
                  className="
                    mt-6
                    border-t
                    border-cocoa/8
                    pt-4
                  "
                >
                  <p
                    className="
                      text-[0.7rem]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-rose-dark
                    "
                  >
                    {review.badge}
                  </p>

                  <p
                    className="
                      mt-2
                      text-[0.64rem]
                      leading-5
                      text-cocoa/43
                    "
                  >
                    Reviewed in the United Kingdom on{' '}
                    {review.date}
                  </p>
                </div>

              </Motion.article>

            ))}
          </div>


          {/* =============================== */}
          {/* DOT INDICATORS                  */}
          {/* =============================== */}

          <div
            className="
              mt-5
              flex
              items-center
              justify-center
              gap-2
            "
          >
            {reviews.map((review, index) => (

              <button
                key={`${review.name}-indicator`}
                type="button"
                onClick={() =>
                  scrollToReview(index)
                }
                aria-label={`Go to review ${
                  index + 1
                }`}
                className={`
                  rounded-full
                  transition-all
                  duration-200
                  ${
                    activeIndex === index
                      ? 'h-2 w-6 bg-cocoa'
                      : 'size-2 bg-cocoa/20'
                  }
                `}
              />

            ))}
          </div>


          <p
            className="
              mt-3
              text-center
              text-[0.62rem]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-cocoa/42
            "
          >
            Swipe to read more
          </p>

        </div>


        {/* =============================== */}
        {/* DESKTOP REVIEWS                 */}
        {/* =============================== */}

        <div
          className="
            mt-14
            hidden
            gap-5
            px-7
            md:grid
            md:grid-cols-2
            lg:grid-cols-4
            lg:px-10
          "
        >
          {reviews.map((review, index) => (

            <Motion.article
              key={`${review.name}-${review.date}-desktop`}
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-50px',
              }}
              transition={{
                duration: 0.5,
                delay: (index % 4) * 0.05,
              }}
              className="
                flex
                flex-col
                rounded-[1.6rem]
                border
                border-cocoa/8
                bg-cream-light
                p-6
                shadow-[0_16px_45px_rgba(74,45,34,0.05)]
              "
            >

              <ReviewStars count={review.stars} />


              <h3
                className="
                  mt-5
                  font-serif
                  text-[1.5rem]
                  font-semibold
                  leading-tight
                  text-cocoa
                "
              >
                {review.title}
              </h3>


              <blockquote
                className="
                  mt-4
                  flex-1
                  text-[0.86rem]
                  leading-6
                  text-cocoa/62
                "
              >
                “{review.quote}”
              </blockquote>


              <div
                className="
                  mt-6
                  border-t
                  border-cocoa/8
                  pt-4
                "
              >
                <p
                  className="
                    text-[0.72rem]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-rose-dark
                  "
                >
                  {review.badge}
                </p>

                <p
                  className="
                    mt-2
                    text-[0.68rem]
                    leading-5
                    text-cocoa/43
                  "
                >
                  Reviewed in the United Kingdom on{' '}
                  {review.date}
                </p>
              </div>

            </Motion.article>

          ))}
        </div>


        {/* =============================== */}
        {/* AMAZON CTA                      */}
        {/* =============================== */}

        <div className="mt-10 text-center">

          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              min-h-12
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-cocoa/12
              px-6
              py-3
              text-sm
              font-semibold
              text-cocoa
              transition-colors
              hover:bg-cocoa
              hover:text-white
            "
          >
            See more on Amazon

            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
            />
          </a>

        </div>

      </div>
    </section>
  )
}