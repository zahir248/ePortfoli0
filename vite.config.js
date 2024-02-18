import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ePortfolio/",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    }
  }
})
