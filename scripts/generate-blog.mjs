import { readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const ARTICLES_PATH = join(ROOT, 'src/content/articles.json')
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const MODEL = process.env.BLOG_MODEL || 'gpt-6-astra'
const TODAY = new Date().toISOString().slice(0, 10)

if (!OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY is required. No article was generated.')
}

const topics = [
  {
    category: 'Research explained',
    query: '(silicone gel sheeting OR silicone scar tape) AND (scar OR keloid OR hypertrophic scar) AND review[Publication Type]',
    angle: 'Explain one useful conclusion and one important limitation in the evidence for silicone scar sheets.',
  },
  {
    category: 'Scar basics',
    query: '(hypertrophic scar OR keloid) AND (review[Publication Type] OR guideline)',
    angle: 'Explain a practical difference between hypertrophic scars and keloids without diagnosing the reader.',
  },
  {
    category: 'Everyday care',
    query: '(scar massage OR scar management) AND systematic review[Publication Type]',
    angle: 'Explain what research can and cannot tell readers about one everyday scar-care habit.',
  },
  {
    category: 'Healing explained',
    query: 'wound healing phases AND skin AND review[Publication Type]',
    angle: 'Explain one part of normal wound healing and why silicone products should only be used after skin has fully closed.',
  },
  {
    category: 'After surgery',
    query: '(surgical scar OR cesarean scar) AND prevention AND systematic review[Publication Type]',
    angle: 'Give cautious, non-prescriptive education about caring for a fully healed surgical scar.',
  },
  {
    category: 'Skin science',
    query: '(scar pigmentation OR post inflammatory hyperpigmentation) AND review[Publication Type]',
    angle: 'Explain the difference between scar texture and colour, including when professional advice may help.',
  },
  {
    category: 'Myth check',
    query: '(scar treatment OR scar management) AND systematic review[Publication Type]',
    angle: 'Correct one common scar-care misconception while accurately describing uncertainty.',
  },
]

const existingArticles = JSON.parse(await readFile(ARTICLES_PATH, 'utf8'))
if (existingArticles.some((article) => article.publishedAt === TODAY)) {
  console.log(`Scar Care Daily already has an article for ${TODAY}; nothing to do.`)
  process.exit(0)
}

const dayNumber = Math.floor(Date.parse(`${TODAY}T00:00:00Z`) / 86_400_000)
const topic = topics[dayNumber % topics.length]

function decodeXml(value = '') {
  return value
    .replaceAll('<i>', '').replaceAll('</i>', '')
    .replaceAll('<b>', '').replaceAll('</b>', '')
    .replaceAll('&lt;', '<').replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"').replaceAll('&apos;', "'")
    .replaceAll('&#39;', "'").replaceAll('&amp;', '&')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function firstMatch(block, pattern) {
  return decodeXml(block.match(pattern)?.[1] ?? '')
}

async function fetchWithTimeout(url, options = {}) {
  const response = await fetch(url, { ...options, signal: AbortSignal.timeout(45_000) })
  if (!response.ok) {
    throw new Error(`Request failed (${response.status}) for ${new URL(url).hostname}`)
  }
  return response
}

async function getPubMedEvidence(query) {
  const searchUrl = new URL('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi')
  searchUrl.search = new URLSearchParams({
    db: 'pubmed',
    term: `${query} AND hasabstract[text]`,
    retmax: '6',
    sort: 'relevance',
    retmode: 'json',
    tool: 'deep_skin_scar_care_daily',
  })

  const search = await (await fetchWithTimeout(searchUrl)).json()
  const ids = search.esearchresult?.idlist ?? []
  if (ids.length < 2) throw new Error('PubMed returned fewer than two usable records.')

  const fetchUrl = new URL('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi')
  fetchUrl.search = new URLSearchParams({ db: 'pubmed', id: ids.join(','), rettype: 'abstract', retmode: 'xml', tool: 'deep_skin_scar_care_daily' })
  const xml = await (await fetchWithTimeout(fetchUrl)).text()

  const records = [...xml.matchAll(/<PubmedArticle>([\s\S]*?)<\/PubmedArticle>/g)]
    .map((match) => {
      const block = match[1]
      const abstractParts = [...block.matchAll(/<AbstractText[^>]*>([\s\S]*?)<\/AbstractText>/g)].map((part) => decodeXml(part[1]))
      const pmid = firstMatch(block, /<PMID[^>]*>(.*?)<\/PMID>/)
      const year = firstMatch(block, /<PubDate>[\s\S]*?<Year>(.*?)<\/Year>/) || firstMatch(block, /<ArticleDate[^>]*>[\s\S]*?<Year>(.*?)<\/Year>/) || 'Unknown year'
      return {
        id: `pmid-${pmid}`,
        pmid,
        title: firstMatch(block, /<ArticleTitle>([\s\S]*?)<\/ArticleTitle>/),
        publisher: `${firstMatch(block, /<Journal>[\s\S]*?<Title>([\s\S]*?)<\/Title>/) || 'PubMed-indexed journal'} via PubMed`,
        year,
        url: `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`,
        abstract: abstractParts.join(' '),
      }
    })
    .filter((record) => record.pmid && record.title && record.abstract.length >= 200)
    .slice(0, 5)

  if (records.length < 2) throw new Error('PubMed records did not contain enough usable abstracts.')
  return records
}

function extractResponseText(payload) {
  if (payload.output_text) return payload.output_text
  for (const item of payload.output ?? []) {
    for (const content of item.content ?? []) {
      if (content.type === 'output_text' && content.text) return content.text
    }
  }
  throw new Error('OpenAI returned no output text.')
}

async function createStructuredResponse({ instructions, input, schema, name }) {
  const response = await fetchWithTimeout('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${OPENAI_API_KEY}` },
    body: JSON.stringify({
      model: MODEL,
      instructions,
      input,
      reasoning: { effort: 'medium' },
      text: { format: { type: 'json_schema', name, strict: true, schema } },
      store: false,
    }),
  })
  return JSON.parse(extractResponseText(await response.json()))
}

const articleSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['title', 'description', 'dek', 'takeaways', 'sections'],
  properties: {
    title: { type: 'string', minLength: 30, maxLength: 85 },
    description: { type: 'string', minLength: 90, maxLength: 155 },
    dek: { type: 'string', minLength: 70, maxLength: 190 },
    takeaways: { type: 'array', minItems: 3, maxItems: 3, items: { type: 'string', minLength: 35, maxLength: 180 } },
    sections: {
      type: 'array', minItems: 3, maxItems: 3,
      items: {
        type: 'object', additionalProperties: false, required: ['heading', 'paragraphs', 'sourceIds'],
        properties: {
          heading: { type: 'string', minLength: 12, maxLength: 75 },
          paragraphs: { type: 'array', minItems: 2, maxItems: 2, items: { type: 'string', minLength: 90, maxLength: 650 } },
          sourceIds: { type: 'array', minItems: 1, maxItems: 3, items: { type: 'string' } },
        },
      },
    },
  },
}

const factCheckSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['approved', 'issues'],
  properties: {
    approved: { type: 'boolean' },
    issues: { type: 'array', items: { type: 'string' }, maxItems: 10 },
  },
}

function evidenceText(records) {
  return records.map((record) => [
    `SOURCE ID: ${record.id}`,
    `TITLE: ${record.title}`,
    `YEAR: ${record.year}`,
    `PUBMED URL: ${record.url}`,
    `ABSTRACT: ${record.abstract}`,
  ].join('\n')).join('\n\n')
}

function slugify(value) {
  return value.toLowerCase().normalize('NFKD').replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-').slice(0, 80)
}

function countWords(article) {
  return [article.dek, ...article.takeaways, ...article.sections.flatMap((section) => section.paragraphs)].join(' ').trim().split(/\s+/).length
}

const evidence = await getPubMedEvidence(topic.query)
const validSourceIds = new Set(evidence.map((record) => record.id))
const generated = await createStructuredResponse({
  name: 'scar_care_article',
  schema: articleSchema,
  instructions: `You are the evidence editor for Scar Care Daily, a UK consumer scar-care journal. Write clear British English for a general audience. Use only facts supported by the supplied PubMed abstracts. Never invent statistics, mechanisms, recommendations, source details or certainty. Distinguish guidance, hypothesis and low-certainty evidence. Never diagnose the reader, never promise outcomes and never market a product. Keep the article between 350 and 650 words. Every section must cite one or more supplied SOURCE IDs. Do not put inline citations in prose; source IDs are metadata.`,
  input: `Today's category: ${topic.category}\nEditorial angle: ${topic.angle}\nAvoid duplicating these existing titles: ${existingArticles.map((article) => article.title).join(' | ')}\n\nEVIDENCE PACKETS\n${evidenceText(evidence)}`,
})

const sourceIds = generated.sections.flatMap((section) => section.sourceIds)
const invalidSourceIds = sourceIds.filter((id) => !validSourceIds.has(id))
if (invalidSourceIds.length) throw new Error(`Generated article cited unknown sources: ${[...new Set(invalidSourceIds)].join(', ')}`)

const fullText = JSON.stringify(generated).toLowerCase()
const bannedClaims = ['clinically proven', 'guaranteed results', 'guarantees results', 'cures scars', 'erase scars', 'remove scars', 'will heal your scar', 'works for everyone']
const foundClaims = bannedClaims.filter((claim) => fullText.includes(claim))
if (foundClaims.length) throw new Error(`Generated article contained prohibited claims: ${foundClaims.join(', ')}`)

const wordCount = countWords(generated)
if (wordCount < 350 || wordCount > 650) throw new Error(`Generated article was ${wordCount} words; required range is 350–650.`)

const factCheck = await createStructuredResponse({
  name: 'scar_care_fact_check',
  schema: factCheckSchema,
  instructions: 'Act as a strict medical content fact-checker. Compare every factual statement in the draft with the supplied PubMed abstracts. Approve only if every health or science claim is directly supported, uncertainty is represented accurately, no diagnosis or treatment promise is made, and every section cites an appropriate supplied source ID. When evidence is absent or weaker than the draft, reject it.',
  input: `DRAFT\n${JSON.stringify(generated, null, 2)}\n\nEVIDENCE PACKETS\n${evidenceText(evidence)}`,
})

if (!factCheck.approved || factCheck.issues.length) {
  throw new Error(`Fact-check rejected the draft: ${factCheck.issues.join(' | ') || 'unspecified evidence concern'}`)
}

const usedSources = evidence.filter((record) => sourceIds.includes(record.id)).map(({ abstract, pmid, ...source }) => source)
const article = {
  slug: slugify(generated.title),
  title: generated.title,
  description: generated.description,
  dek: generated.dek,
  category: topic.category,
  publishedAt: TODAY,
  readingMinutes: Math.max(2, Math.ceil(wordCount / 220)),
  takeaways: generated.takeaways,
  sections: generated.sections,
  sources: usedSources,
  disclaimer: 'This article is general education, not medical advice. It does not diagnose a scar or replace advice from a qualified healthcare professional.',
}

if (!article.slug || existingArticles.some((item) => item.slug === article.slug)) {
  throw new Error('Generated article duplicated an existing slug; no article was published.')
}

await writeFile(ARTICLES_PATH, `${JSON.stringify([article, ...existingArticles], null, 2)}\n`)
console.log(`Published ${article.title} (${article.slug}) using ${usedSources.length} PubMed sources.`)
