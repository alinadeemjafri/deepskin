import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

/*
 * PLACEHOLDER TESTIMONIALS
 * ========================
 * These reviews are placeholder content written for layout purposes.
 * Replace them with real customer reviews before going live.
 */
const reviews = [
  {
    stars: 5,
    quote:
      "I had my appendix out six months ago and the scar was raised and pink. After eight weeks of wearing this tape daily, it's noticeably flatter and the colour has faded. I wish I'd started sooner.",
    name: 'Sarah M.',
    badge: 'Verified Buyer',
  },
  {
    stars: 5,
    quote:
      "Post C-section, I tried two other silicone products before this one. Deep Skin actually stays put. I can wear it all day under my clothes without it peeling at the edges. The scar is softer than it's been in months.",
    name: 'Priya K.',
    badge: 'Verified Buyer',
  },
  {
    stars: 5,
    quote:
      "I have a burn scar on my forearm that I've been self-conscious about for years. It's early days, but the itching stopped almost immediately and it already looks less angry. Comfortable enough to sleep in.",
    name: 'James R.',
    badge: 'Verified Buyer',
  },
  {
    stars: 4,
    quote:
      "Good quality tape, easy to cut to size. I'm using it on a keloid on my chest and after about six weeks it's definitely less raised. It does take some getting used to wearing it all day but the results are worth it.",
    name: 'Anna T.',
    badge: 'Verified Buyer',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? 'text-taupe fill-taupe' : 'text-taupe/25'}
          strokeWidth={0}
        />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-14 md:py-24 px-5 md:px-6 bg-white/40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-[0.75rem] md:text-[0.72rem] tracking-[0.15em] uppercase font-semibold text-taupe mb-3 md:mb-4">
            Reviews
          </p>
          <h2 className="font-serif text-[1.7rem] sm:text-[1.9rem] md:text-[2.4rem] leading-[1.12] font-semibold text-near-black">
            Real people, real progress
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          {/* PLACEHOLDER: Replace these reviews with real customer testimonials */}
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-cream-light/80 backdrop-blur-sm rounded-2xl p-5 md:p-7 border border-taupe/8"
            >
              <Stars count={review.stars} />
              <p className="mt-3 md:mt-3.5 text-[0.88rem] leading-relaxed text-near-black/60 font-light italic">
                "{review.quote}"
              </p>
              <div className="mt-3.5 md:mt-4 flex items-center gap-3">
                <div className="w-9 h-9 md:w-8 md:h-8 rounded-full bg-cream-dark flex items-center justify-center">
                  <span className="text-[0.75rem] md:text-[0.68rem] font-semibold text-near-black/45">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-[0.82rem] md:text-[0.8rem] font-medium text-near-black">
                    {review.name}
                  </p>
                  <p className="text-[0.75rem] md:text-[0.68rem] text-green font-medium">
                    {review.badge}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          {/* END PLACEHOLDER REVIEWS */}
        </div>
      </div>
    </section>
  )
}
