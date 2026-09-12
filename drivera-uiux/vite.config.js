import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

// GitHub Project Pages menyajikan situs di /<nama-repo>/, bukan di root.
// BASE_URL dipakai ulang oleh komponen lewat data.js -> BASE.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/lomba2026-06/',
  plugins: [svelte()],
})
