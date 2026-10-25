import { writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import faq from '../src/content/faq.js'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist')
const SITE_URL = 'https://deepskinlab.com'

// Bump a page's date when its content meaningfully changes.
const pages = [
  { url: '/', date: '2026-10-25', frequency: 'weekly', priority: '1.0' },
  { url: '/privacypolicy', date: '2026-10-25', frequency: 'yearly', priority: '0.3' },
]

function renderSitemap() {
  const urls = pages.map((page) => `<url><loc>${SITE_URL}${page.url}</loc><lastmod>${page.date}</lastmod><changefreq>${page.frequency}</changefreq><priority>${page.priority}</priority></url>`).join('')
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
}

// llms.txt (llmstxt.org): a plain Markdown summary for AI assistants. Google
// ignores it; it's cheap, and it stays current because it's built from the FAQ data.
function renderLlmsTxt() {
  const answers = faq.map((item) => `### ${item.question}\n\n${item.answer}`).join('\n\n')
  return `# Deep Skin

> Deep Skin is reusable, medical-grade silicone scar tape made by Deep Skin Lab Ltd, London, UK. It is a UKCA marked medical device, sold as a 4 cm × 150 cm skin-toned roll you cut to size, for healed surgical, C-section, injury, burn, hypertrophic, keloid and acne scars and stretch marks. It is sold on Amazon UK (ASIN B0GXX7HSXN).

General education, not medical advice. For use on clean, dry, closed and fully healed skin only.

## Key pages

- [Product page](${SITE_URL}/): what the tape is, how its three layers work, how to use it and the recommended routine
- [Buy on Amazon UK](https://www.amazon.co.uk/dp/B0GXX7HSXN): the only place Deep Skin is sold

## Frequently asked questions

${answers}

## Optional

- [Privacy policy](${SITE_URL}/privacypolicy)
`
}

await writeFile(join(DIST, 'sitemap.xml'), renderSitemap())
await writeFile(join(DIST, 'llms.txt'), renderLlmsTxt())

console.log(`Wrote sitemap.xml (${pages.length} URLs) and llms.txt.`)
