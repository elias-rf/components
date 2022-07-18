/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import notifier from "vite-plugin-notifier";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    host: "0.0.0.0",
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  build: { outDir: "../../public", emptyOutDir: true },
  plugins: [react(), notifier()],
  test: {
    environment: "happy-dom", // or 'jsdom', 'node'
  },
});
