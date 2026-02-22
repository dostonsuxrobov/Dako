import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/moverx/', // MUST MATCH YOUR GITHUB REPOSITORY NAME EXACTLY
})