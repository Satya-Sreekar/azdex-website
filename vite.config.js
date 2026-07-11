import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Served from the custom domain https://azdex.co.in (root).
  base: '/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
})
