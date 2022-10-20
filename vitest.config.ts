/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    outputTruncateLength: 1500,
    snapshotFormat: { escapeString: false },
  },
});
