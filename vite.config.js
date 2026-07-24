import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://nagyabel.com', // 1. Replace with your actual live domain
      dynamicRoutes: [
        '/',
        // 2. Add any other routes/pages on your site here (e.g. '/about', '/contact')
      ],
    }),
  ],
  base: '/',
})