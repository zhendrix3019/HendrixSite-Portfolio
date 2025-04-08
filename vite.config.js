import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// Assuming you have vite-plugin-vue-devtools installed and want to use it
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(), // Add vueDevTools here if you intend to use it
  ],
  base: '/HendrixSite-Portfolio/', // <<< Use your GitHub repo name here
  // *** Removed the misplaced closing parenthesis from here ***

  // Ensure the 'resolve' block is inside the main configuration object
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}) // <<< The main closing parenthesis for defineConfig goes here