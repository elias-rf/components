/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import path from "node:path";
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
  build: { outDir: "./public", emptyOutDir: true },
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // or 'jsdom', 'node'
    outputTruncateLength: 200,
    snapshotFormat: { escapeString: false },
    setupFiles: ["./setup-tests.ts"],
  },
  resolve: {
    alias: {
      "@utils": path.resolve(__dirname, "./utils/"),
      "@types": path.resolve(__dirname, "./types/"),
    },
  },
});
