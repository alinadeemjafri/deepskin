import { readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist')
const SSR_DIST = join(ROOT, 'dist-ssr')
const EMPTY_ROOT = '<div id="root"></div>'

const { render } = await import(pathToFileURL(join(SSR_DIST, 'entry-server.js')).href)

const pages = [
  { page: 'main', file: 'index.html' },
  { page: 'privacypolicy', file: 'privacypolicy/index.html' },
]

for (const { page, file } of pages) {
  const path = join(DIST, file)
  const html = await readFile(path, 'utf8')
  if (!html.includes(EMPTY_ROOT)) throw new Error(`${file} has no empty #root to fill`)
  await writeFile(path, html.replace(EMPTY_ROOT, `<div id="root">${render(page)}</div>`))
}

await rm(SSR_DIST, { recursive: true, force: true })
console.log(`Prerendered ${pages.length} pages.`)
