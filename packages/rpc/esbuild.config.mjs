import esbuild from "esbuild";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "fs";
import { join } from "path";

// Create dist before build if not exist
const dist = join(process.cwd(), "dist");

if (!existsSync(dist)) {
  mkdirSync(dist);
}

// Select all typescript files of src directory as entry points
const entryPoints = readdirSync(join(process.cwd(), "src"))
  .filter(
    (file) =>
      file.endsWith(".ts") &&
      !file.endsWith(".spec.ts") &&
      statSync(join(process.cwd(), "src", file)).isFile()
  )
  .map((file) => `src/${file}`);

// Select entryPoints and build

// esm output bundles with code splitting
esbuild
  .build({
    entryPoints,
    outdir: "dist/esm",
    bundle: true,
    sourcemap: true,
    minify: true,
    splitting: true,
    format: "esm",
    external: ["crypto", "zod", "node:url"],
    define: { global: "window" },
    target: ["esnext"],
  })
  .catch(() => process.exit(1));

// cjs output bundle
esbuild
  .build({
    entryPoints: ["src/index.ts"],
    outfile: "dist/cjs/index.cjs.js",
    bundle: false,
    sourcemap: true,
    minify: true,
    platform: "node",
    target: ["node16"],
  })
  .catch(() => process.exit(1));

// an entry file for cjs at the root of the bundle
writeFileSync(join(dist, "index.js"), "export * from './esm/index.js';");

// an entry file for esm at the root of the bundle
writeFileSync(
  join(dist, "index.cjs.js"),
  "module.exports = require('./cjs/index.cjs.js');"
);
