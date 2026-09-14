import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist')
const SITE_URL = 'https://deepskinlab.com'
const AMAZON_URL = 'https://www.amazon.co.uk/dp/B0GXX7HSXN?maas=maas_adg_3E5FEBCFF0535D6E438C827A9BA15124_afap_abs&ref_=aa_maas&tag=maas'
const articles = JSON.parse(await readFile(join(ROOT, 'src/content/articles.json'), 'utf8'))
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;')

const safeJson = (value) => JSON.stringify(value).replaceAll('<', '\\u003c')

const formatDate = (date) => new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
}).format(new Date(`${date}T12:00:00Z`))

const styles = `
  :root{--cream:#fbf6f2;--light:#fffaf7;--dark:#f4e9e2;--blush:#e5bcae;--rose:#9c614f;--cocoa:#392824;--muted:#76635d}*{box-sizing:border-box}html{scroll-behavior:smooth;background:var(--cream)}body{margin:0;background:var(--cream);color:var(--cocoa);font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;-webkit-font-smoothing:antialiased}a{color:inherit}a:focus-visible{outline:2px solid var(--rose);outline-offset:4px}.wrap{width:min(100% - 2.5rem,1120px);margin-inline:auto}.nav{border-bottom:1px solid rgba(57,40,36,.08);background:rgba(251,246,242,.94)}.nav-inner{min-height:72px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{font-family:"Cormorant Garamond",Georgia,serif;font-size:1.45rem;font-weight:600;letter-spacing:.08em;text-decoration:none}.nav-links{display:flex;align-items:center;gap:24px;font-size:.8rem;font-weight:600}.button{display:inline-flex;min-height:46px;align-items:center;justify-content:center;border-radius:999px;background:var(--cocoa);padding:0 22px;color:white;text-decoration:none}.hero{padding:88px 0 72px;background:linear-gradient(145deg,var(--cream),var(--dark))}.eyebrow{margin:0;color:var(--rose);font-size:.7rem;font-weight:700;letter-spacing:.25em;text-transform:uppercase}.hero h1,.article-hero h1{max-width:850px;margin:18px 0 0;font-family:"Cormorant Garamond",Georgia,serif;font-size:clamp(3.3rem,7vw,6rem);font-weight:500;letter-spacing:-.045em;line-height:.92}.hero .intro,.article-hero .dek{max-width:680px;margin:25px 0 0;color:var(--muted);font-size:1.05rem;line-height:1.7}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px;padding:54px 0 90px}.card{display:flex;min-height:330px;flex-direction:column;border:1px solid rgba(57,40,36,.08);border-radius:28px;background:var(--light);padding:30px;text-decoration:none;box-shadow:0 16px 45px rgba(74,45,34,.045)}.meta{color:var(--muted);font-size:.7rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase}.card h2{margin:28px 0 0;font-family:"Cormorant Garamond",Georgia,serif;font-size:2.35rem;font-weight:600;letter-spacing:-.025em;line-height:1.02}.card p{color:var(--muted);line-height:1.65}.read{margin-top:auto;padding-top:24px;font-size:.88rem;font-weight:700}.article-hero{padding:70px 0 48px;background:var(--dark)}.article-hero h1{max-width:960px;font-size:clamp(3rem,6vw,5rem)}.breadcrumbs{margin-bottom:30px;color:var(--muted);font-size:.78rem}.breadcrumbs a{text-underline-offset:3px}.article-layout{display:grid;grid-template-columns:minmax(0,700px) minmax(220px,300px);gap:80px;padding:60px 0 100px}.article-body h2{margin:52px 0 16px;font-family:"Cormorant Garamond",Georgia,serif;font-size:2.15rem;font-weight:600;letter-spacing:-.02em;line-height:1.05}.article-body h2:first-child{margin-top:0}.article-body p{margin:0 0 20px;color:#4e3a34;font-size:1.02rem;line-height:1.82}.takeaways{position:sticky;top:24px;border-radius:24px;background:var(--dark);padding:26px}.takeaways h2{margin:0;font-family:"Cormorant Garamond",Georgia,serif;font-size:1.65rem}.takeaways ul{margin:20px 0 0;padding-left:20px}.takeaways li{margin:0 0 14px;color:#5d4841;font-size:.87rem;line-height:1.55}.sources{margin-top:58px;padding-top:32px;border-top:1px solid rgba(57,40,36,.12)}.sources h2{margin-top:0}.sources ol{padding-left:22px}.sources li{margin-bottom:14px;color:var(--muted);font-size:.84rem;line-height:1.55}.notice{margin-top:40px;border-left:3px solid var(--blush);padding:3px 0 3px 20px;color:var(--muted);font-size:.82rem;line-height:1.6}.footer{border-top:1px solid rgba(57,40,36,.08);background:var(--dark);padding:36px 0}.footer-inner{display:flex;align-items:center;justify-content:space-between;gap:24px;color:var(--muted);font-size:.76rem}.footer-brand{font-family:"Cormorant Garamond",Georgia,serif;font-size:1.25rem;font-weight:600;letter-spacing:.07em;color:var(--cocoa)}
  @media(max-width:760px){.wrap{width:min(100% - 2rem,1120px)}.nav-inner{min-height:64px}.nav-links a:not(.button){display:none}.button{min-height:44px;padding:0 18px}.hero{padding:64px 0 50px}.grid{grid-template-columns:1fr;padding:34px 0 68px}.card{min-height:290px;padding:24px}.card h2{font-size:2rem}.article-hero{padding:48px 0 40px}.article-layout{grid-template-columns:1fr;gap:42px;padding:44px 0 72px}.takeaways{position:static;order:-1}.article-body h2{font-size:1.9rem}.footer-inner{align-items:flex-start;flex-direction:column}}
`

function pageShell({ title, description, canonical, body, structuredData, type = 'website' }) {
  return `<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <meta name="robots" content="index,follow,max-image-preview:large" />
  <link rel="canonical" href="${canonical}" />
  <link rel="alternate" type="application/rss+xml" title="Scar Care Daily" href="${SITE_URL}/scar-care-daily/feed.xml" />
  <meta property="og:type" content="${type}" />
  <meta property="og:locale" content="en_GB" />
  <meta property="og:site_name" content="Deep Skin" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:image" content="${SITE_URL}/hero-desktop.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(title)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="twitter:image" content="${SITE_URL}/hero-desktop.jpg" />
  <meta name="theme-color" content="#fbf6f2" />
  <link rel="icon" type="image/png" href="/logo.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
  <style>${styles}</style>
  <script type="application/ld+json">${safeJson(structuredData)}</script>
  <script>window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)}</script>
  <script defer src="/_vercel/insights/script.js"></script>
</head>
<body>
  <header class="nav"><div class="wrap nav-inner"><a class="brand" href="/">DEEP SKIN<sup>®</sup></a><nav class="nav-links" aria-label="Main navigation"><a href="/">Product</a><a href="/scar-care-daily/">Scar Care Daily</a><a class="button" href="${AMAZON_URL}" target="_blank" rel="noopener noreferrer" onclick="window.va('event','amazon_cta_click',{placement:'blog_navigation'})">Shop on Amazon</a></nav></div></header>
  ${body}
  <footer class="footer"><div class="wrap footer-inner"><div><div class="footer-brand">DEEP SKIN</div><div>General education, not medical advice.</div></div><div><a href="/privacypolicy">Privacy policy</a> · <a href="${AMAZON_URL}" target="_blank" rel="noopener noreferrer">Amazon listing</a></div></div></footer>
</body>
</html>`
}

function articleCard(article) {
  return `<a class="card" href="/scar-care-daily/${article.slug}/">
    <div class="meta">${escapeHtml(article.category)} · <time datetime="${article.publishedAt}">${formatDate(article.publishedAt)}</time> · ${article.readingMinutes} min read</div>
    <h2>${escapeHtml(article.title)}</h2>
    <p>${escapeHtml(article.description)}</p>
    <span class="read">Read article →</span>
  </a>`
}

function renderIndex() {
  const canonical = `${SITE_URL}/scar-care-daily/`
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${canonical}#blog`,
    name: 'Scar Care Daily',
    description: 'Carefully sourced explainers about scars and everyday scar care.',
    url: canonical,
    publisher: { '@type': 'Organization', name: 'Deep Skin Lab Ltd', url: `${SITE_URL}/` },
    blogPost: articles.map((article) => ({
      '@type': 'BlogPosting',
      headline: article.title,
      datePublished: article.publishedAt,
      url: `${canonical}${article.slug}/`,
    })),
  }

  const body = `<main><section class="hero"><div class="wrap"><p class="eyebrow">Deep Skin journal</p><h1>Scar Care Daily.</h1><p class="intro">Clear, carefully sourced explainers about scars and everyday scar care, without miracle claims.</p></div></section><section class="wrap grid">${articles.map(articleCard).join('')}</section></main>`
  return pageShell({
    title: 'Scar Care Daily | Evidence-aware scar care from Deep Skin',
    description: 'Carefully sourced, plain-English explainers about scars, silicone sheets and everyday scar care from Deep Skin.',
    canonical,
    body,
    structuredData,
  })
}

function renderArticle(article) {
  const canonical = `${SITE_URL}/scar-care-daily/${article.slug}/`
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${canonical}#article`,
        mainEntityOfPage: canonical,
        headline: article.title,
        description: article.description,
        datePublished: article.publishedAt,
        dateModified: article.publishedAt,
        image: `${SITE_URL}/hero-desktop.jpg`,
        author: { '@type': 'Organization', name: 'Deep Skin editorial team' },
        publisher: { '@type': 'Organization', name: 'Deep Skin Lab Ltd', url: `${SITE_URL}/`, logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` } },
        inLanguage: 'en-GB',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Scar Care Daily', item: `${SITE_URL}/scar-care-daily/` },
          { '@type': 'ListItem', position: 3, name: article.title, item: canonical },
        ],
      },
    ],
  }

  const bodySections = article.sections.map((section) => `<section><h2>${escapeHtml(section.heading)}</h2>${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}</section>`).join('')
  const sources = article.sources.map((source) => `<li><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.title)}</a>. ${escapeHtml(source.publisher)} (${source.year}).</li>`).join('')
  const takeaways = article.takeaways.map((item) => `<li>${escapeHtml(item)}</li>`).join('')
  const body = `<main>
    <header class="article-hero"><div class="wrap"><div class="breadcrumbs"><a href="/">Home</a> / <a href="/scar-care-daily/">Scar Care Daily</a></div><p class="eyebrow">${escapeHtml(article.category)} · ${article.readingMinutes} min read</p><h1>${escapeHtml(article.title)}</h1><p class="dek">${escapeHtml(article.dek)}</p><div class="meta" style="margin-top:24px"><time datetime="${article.publishedAt}">${formatDate(article.publishedAt)}</time> · Deep Skin editorial team</div></div></header>
    <div class="wrap article-layout"><article class="article-body">${bodySections}<section class="sources"><h2>Sources</h2><ol>${sources}</ol></section><aside class="notice">${escapeHtml(article.disclaimer)}</aside></article><aside class="takeaways"><h2>Key takeaways</h2><ul>${takeaways}</ul></aside></div>
  </main>`

  return pageShell({ title: `${article.title} | Scar Care Daily`, description: article.description, canonical, body, structuredData, type: 'article' })
}

function renderFeed() {
  const items = articles.slice(0, 30).map((article) => `<item><title>${escapeHtml(article.title)}</title><link>${SITE_URL}/scar-care-daily/${article.slug}/</link><guid>${SITE_URL}/scar-care-daily/${article.slug}/</guid><pubDate>${new Date(`${article.publishedAt}T08:00:00Z`).toUTCString()}</pubDate><description>${escapeHtml(article.description)}</description></item>`).join('')
  return `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Scar Care Daily</title><link>${SITE_URL}/scar-care-daily/</link><description>Carefully sourced scar-care explainers from Deep Skin.</description><language>en-gb</language>${items}</channel></rss>`
}

function renderSitemap() {
  const pages = [
    { url: '/', date: articles[0]?.publishedAt ?? '2026-09-14', frequency: 'weekly', priority: '1.0' },
    { url: '/privacypolicy', date: '2026-09-12', frequency: 'yearly', priority: '0.3' },
    { url: '/scar-care-daily/', date: articles[0]?.publishedAt ?? '2026-09-14', frequency: 'daily', priority: '0.8' },
    ...articles.map((article) => ({ url: `/scar-care-daily/${article.slug}/`, date: article.publishedAt, frequency: 'monthly', priority: '0.7' })),
  ]
  const urls = pages.map((page) => `<url><loc>${SITE_URL}${page.url}</loc><lastmod>${page.date}</lastmod><changefreq>${page.frequency}</changefreq><priority>${page.priority}</priority></url>`).join('')
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
}

await mkdir(join(DIST, 'scar-care-daily'), { recursive: true })
await writeFile(join(DIST, 'scar-care-daily/index.html'), renderIndex())
await writeFile(join(DIST, 'scar-care-daily/feed.xml'), renderFeed())
await writeFile(join(DIST, 'sitemap.xml'), renderSitemap())

for (const article of articles) {
  const articleDirectory = join(DIST, 'scar-care-daily', article.slug)
  await mkdir(articleDirectory, { recursive: true })
  await writeFile(join(articleDirectory, 'index.html'), renderArticle(article))
}

console.log(`Rendered Scar Care Daily with ${articles.length} articles.`)
