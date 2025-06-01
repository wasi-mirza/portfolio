import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // or just '' (empty string) also works
  assetsInclude: ['**/*.riv'],
  plugins: [react()],
})
