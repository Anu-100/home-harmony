import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { flushSync } from 'react-dom'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        secure: false
      }
    }
  },
  plugins: [react()],
})
