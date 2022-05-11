const esbuild = require("esbuild");

// Automatically exclude all node_modules from the bundled version
const { nodeExternalsPlugin } = require("esbuild-node-externals");

esbuild
  .build({
    entryPoints: ["./src/index.ts"],
    outfile: "dist/index.js",
    bundle: true,
    minify: true,
    platform: "node",
    sourcemap: true,
    target: "node14",
    watch: true,
    plugins: [nodeExternalsPlugin()],
  })
  .then(() => {
    console.log("⚡ Done");
    process.exit(0);
  })
  .catch(() => process.exit(1));
