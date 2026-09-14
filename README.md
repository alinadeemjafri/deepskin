# Deep Skin

Marketing website for Deep Skin medical-grade silicone scar tape, built with React, Vite and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Run the release checks with:

```bash
npm run lint
npm run build
```

The production build also renders the Scar Care Daily index and article pages as static HTML, and generates the blog sitemap entries and RSS feed.

## Scar Care Daily

Published articles live in `src/content/articles.json`. The scheduled GitHub Actions workflow runs every morning, retrieves relevant PubMed abstracts, asks the configured OpenAI model to write only from that evidence, runs a second strict fact-check, validates citations and prohibited claims, then commits an article only when every guard passes.

To activate daily publication, add an Actions repository secret named `OPENAI_API_KEY`:

```bash
gh secret set OPENAI_API_KEY --repo alinadeemjafri/deepskin
```

The workflow can also be run manually from the repository’s Actions tab. It is intentionally fail-closed: missing research, an unsupported citation, a rejected fact-check or an API failure produces no article.

## Images

Only images used by the live site belong in `public/`. Original, unused artwork is retained in `source-images/archive/` so Vercel does not ship it to visitors.

## Deployment

The repository is linked to the existing Vercel project `deep-skin-site`. Vercel Web Analytics is loaded in the React site and the static blog pages, with Amazon CTA clicks tracked by placement.
