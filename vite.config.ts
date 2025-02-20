import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  base: '/',  // Ensure it's set to the root path
  build: {
    sourcemap: false,  // Disable source maps in production
  },
})
