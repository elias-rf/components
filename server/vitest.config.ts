/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    watch: false,
    outputTruncateLength: 200,
    snapshotFormat: { escapeString: false },
  },
});
