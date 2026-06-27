import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Served from https://satya-sreekar.github.io/azdex-website/ on GitHub Pages.
  base: '/azdex-website/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
})
