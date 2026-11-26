import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'
// base './' lets the built site work on GitHub Pages, Netlify or Vercel.
// The single-file plugin bundles everything (images included) into dist/index.html.
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: './',
  build: { assetsInlineLimit: 100000000 },
})
