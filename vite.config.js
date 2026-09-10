import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Required for GitHub Pages project sites: username.github.io/REPO-NAME/
  base: '/Figma-to-Responsive-React-Page/',
  plugins: [react()],
})
