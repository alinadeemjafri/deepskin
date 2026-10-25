import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'

// Used only at build time by scripts/prerender.mjs, so crawlers that don't
// run JavaScript (GPTBot, ClaudeBot, PerplexityBot, often Bing) get real HTML.
const pages = { main: App, privacypolicy: PrivacyPolicy }

export function render(page) {
  const Page = pages[page]
  return renderToString(
    <StrictMode>
      <Page />
    </StrictMode>,
  )
}
