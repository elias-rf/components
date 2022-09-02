import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    outputTruncateLength: 500,
    snapshotFormat: { escapeString: false },
  },
});
