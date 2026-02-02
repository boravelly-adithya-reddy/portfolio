import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Required for GitHub Pages (works for any subpath like /portfolio/ or /Adithya_Reddy/)
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@css': '/src/css',
      '@context': '/static/js/context',
      '@hooks': '/static/js/hooks'
    }
  }
})
