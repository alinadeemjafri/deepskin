import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        // Built to dist/privacypolicy/index.html so it serves at
        // /privacypolicy without needing a rewrite rule.
        main: resolve(import.meta.dirname, 'index.html'),
        privacypolicy: resolve(import.meta.dirname, 'privacypolicy/index.html'),
      },
    },
  },
})
