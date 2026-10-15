import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // In dev, chat requests go to the API server (`npm run server`).
  server: {
    proxy: { '/api': 'http://localhost:3001' },
  },
})
