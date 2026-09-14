import { ArrowRight, BookOpen } from 'lucide-react'
import { motion as Motion } from 'framer-motion'
import articles from '../content/articles.json'

const featuredArticles = [...articles]
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  .slice(0, 2)

function formatDate(date) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00Z`))
}

export default function ScarCareDaily() {
  return (
    <section id="scar-care-daily" className="scroll-mt-16 bg-cream-dark px-5 py-16 sm:px-7 md:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-cocoa/65">
              <BookOpen aria-hidden="true" className="size-4" strokeWidth={1.7} />
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em]">Scar Care Daily</p>
            </div>
            <h2 className="mt-5 font-serif text-[3rem] font-medium leading-[0.95] tracking-[-0.04em] text-cocoa sm:text-[4rem]">
              Research, made useful.
            </h2>
            <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-cocoa/65">
              Clear, carefully sourced explainers about scars and everyday scar care—without miracle claims.
            </p>
          </div>

          <a
            href="/scar-care-daily/"
            className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full border border-cocoa/15 px-6 py-3 text-sm font-semibold text-cocoa transition-colors hover:bg-cocoa hover:text-white"
          >
            Browse all articles
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </Motion.div>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-6">
          {featuredArticles.map((article, index) => (
            <Motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="flex min-h-[20rem] flex-col rounded-[1.75rem] border border-cocoa/8 bg-cream-light p-6 shadow-[0_14px_40px_rgba(74,45,34,0.045)] sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cocoa/48">
                <span>{article.category}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                <span aria-hidden="true">·</span>
                <span>{article.readingMinutes} min read</span>
              </div>

              <h3 className="mt-6 max-w-xl font-serif text-[2rem] font-medium leading-[1.03] tracking-[-0.025em] text-cocoa sm:text-[2.35rem]">
                <a href={`/scar-care-daily/${article.slug}/`} className="rounded-sm hover:underline hover:decoration-cocoa/25 hover:underline-offset-4">
                  {article.title}
                </a>
              </h3>

              <p className="mt-5 max-w-xl text-[0.92rem] leading-6 text-cocoa/62">{article.description}</p>

              <a
                href={`/scar-care-daily/${article.slug}/`}
                className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 pt-7 text-sm font-semibold text-cocoa"
              >
                Read article
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
