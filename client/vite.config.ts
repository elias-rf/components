/// <reference types="vitest" />
import { defineConfig } from "vite";
import notifier from "vite-plugin-notifier";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    host: "0.0.0.0",
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  build: { outDir: "../public", emptyOutDir: true },
  plugins: [react(), notifier()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  test: {
    reporters: "verbose",
  },
});
