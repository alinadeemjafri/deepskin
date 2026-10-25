import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'

const root = document.getElementById('root')
const page = (
  <StrictMode>
    <PrivacyPolicy />
  </StrictMode>
)

// Production builds are prerendered (scripts/prerender.mjs); dev is not.
if (root.hasChildNodes()) hydrateRoot(root, page)
else createRoot(root).render(page)
