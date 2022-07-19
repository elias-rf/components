/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    watch: true,
    outputTruncateLength: 200,
  },
});
