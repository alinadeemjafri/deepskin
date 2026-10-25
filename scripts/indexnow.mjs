// Tells IndexNow engines (Bing/Copilot, Yandex, Seznam, Naver…) that pages
// changed. Run after a production deploy: npm run indexnow
// Google doesn't use IndexNow; it reads the sitemap via Search Console.
const SITE_URL = 'https://deepskinlab.com'
const KEY = '0f68da463d224fb21c90b4adf09921a6'

const sitemap = await (await fetch(`${SITE_URL}/sitemap.xml`)).text()
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(SITE_URL).host, key: KEY, keyLocation: `${SITE_URL}/${KEY}.txt`, urlList }),
})

console.log(`IndexNow: ${response.status} ${response.statusText} for ${urlList.length} URLs`)
if (!response.ok) process.exitCode = 1
