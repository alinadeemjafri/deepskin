import { Plus } from 'lucide-react'
import { motion as Motion } from 'framer-motion'
import faq from '../content/faq'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://deepskinlab.com/#faq',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-16 bg-cream px-5 py-16 sm:px-7 md:py-24 lg:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replaceAll('<', '\\u003c') }}
      />

      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cocoa/65 sm:text-[0.75rem]">
            FAQ
          </p>
          <h2 className="mt-5 font-serif text-[3rem] font-medium leading-[0.95] tracking-[-0.04em] text-cocoa sm:text-[4rem]">
            Questions, answered.
          </h2>
          <p className="mt-5 max-w-md text-[0.98rem] leading-7 text-cocoa/65">
            The essentials on using silicone scar tape safely and consistently.
            General information, not medical advice.
          </p>
        </Motion.div>

        <div className="border-t border-cocoa/10">
          {faq.map((item) => (
            <details key={item.question} className="group border-b border-cocoa/10">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-serif text-[1.35rem] font-medium leading-tight tracking-[-0.015em] text-cocoa sm:text-[1.55rem] [&::-webkit-details-marker]:hidden">
                {item.question}
                <Plus
                  aria-hidden="true"
                  className="size-5 shrink-0 text-cocoa/55 transition-transform duration-200 group-open:rotate-45"
                  strokeWidth={1.7}
                />
              </summary>
              <p className="max-w-2xl pb-6 text-[0.95rem] leading-7 text-cocoa/65">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
