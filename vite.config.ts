import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import compression from 'vite-plugin-compression';
// https://vite.dev/config/
export default defineConfig({

  plugins: [
    vue(),
    vueDevTools(),
  ],
  server:{
    host:"0.0.0.0",
    port:8080,
    allowedHosts: ['1c002629w31.goho.co']
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
