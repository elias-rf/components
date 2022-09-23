/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    outputTruncateLength: 5000,
    snapshotFormat: { escapeString: false },
  },
});
