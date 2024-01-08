/// <reference types="vitest" />
/// <reference types="vite/client" />

/** @type {import('vite').UserConfig} */

import react from '@vitejs/plugin-react'
import { format } from 'date-fns/fp'
import dotenv from 'dotenv-flow'
import * as path from 'node:path'
import { defineConfig } from 'vitest/config'
// import { fileURLToPath } from 'node:url'

dotenv.config()

const serverPort = process.env.PORT || 3000
console.log('PROXY http://localhost:' + serverPort)

// console.log(
//   path.resolve(__dirname, './'),
//   fileURLToPath(new URL('./', import.meta.url))
// )

// https://vitejs.dev/config/
export default defineConfig({
  root: './client/',
  server: {
    port: 3001,
    host: '0.0.0.0',
    proxy: {
      '/api': 'http://localhost:' + serverPort,
    },
  },
  build: { outDir: '../dist/public', emptyOutDir: true, target: 'esnext' },
  resolve: { alias: { '@': path.resolve(__dirname, './') } },
  plugins: [react()],
  test: {
    root: './',
    globals: true,
    environment: 'jsdom',
    coverage: {
      enabled: false,
      provider: 'v8',
    },
    snapshotFormat: { escapeString: false },
    setupFiles: [path.resolve(__dirname, './setup-tests.ts')],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
      '**/client-ng/**',
      './tests/**',
    ],
  },
  define: {
    // __APP_VERSION__: format('yy-MM-dd.HH:mm')(new Date()),
  },
})
