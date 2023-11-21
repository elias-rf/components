/// <reference types="vitest" />
/// <reference types="vite/client" />

/** @type {import('vite').UserConfig} */

import react from '@vitejs/plugin-react'
import dotenv from 'dotenv-flow'
import path from 'node:path'
import { defineConfig } from 'vitest/config'
import { day } from './utils/date/day.js'

dotenv.config()

const serverPort = process.env.PORT || 3000
console.log('PROXY http://localhost:' + serverPort)

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
  build: { outDir: '../public', emptyOutDir: true, target: 'esnext' },
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
    ],
  },
  define: {
    __APP_VERSION__: JSON.stringify(day().format('YY-MM-DD.HH:mm')),
  },
})
