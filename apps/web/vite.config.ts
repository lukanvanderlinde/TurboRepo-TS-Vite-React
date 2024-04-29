import { plugins } from '@monorepo/config-vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [...plugins],
  server: {
    port: 3000,
  },
})
