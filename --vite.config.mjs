import react from '@vitejs/plugin-react'
import * as path from 'node:path'

export default {
  test: {
    root: './',
    globals: true,
    environment: 'jsdom',
    coverage: {
      enabled: false,
      provider: 'v8',
    },
    snapshotFormat: { escapeString: false },
    setupFiles: [path.resolve(__dirname, './setup-tests.mjs')],
  },
  plugins: [react()],
}
