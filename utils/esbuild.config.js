const esbuild = require("esbuild");

// Automatically exclude all node_modules from the bundled version
const { nodeExternalsPlugin } = require("esbuild-node-externals");

esbuild
  .build({
    bundle: true,
    entryPoints: ["./src/index.ts"],
    minify: false,
    outdir: "./cjs",
    platform: "node",
    sourcemap: true,
    target: ["node10.4"],
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    bundle: true,
    entryPoints: ["./src/index.ts"],
    format: "esm",
    minify: false,
    outdir: "./lib",
    platform: "node",
    plugins: [nodeExternalsPlugin()],
    sourcemap: true,
    splitting: true,
    target: "esnext",
    watch: true,
  })
  .then(() => {
    console.log("⚡ Done");
    process.exit(0);
  })
  .catch(() => process.exit(1));
