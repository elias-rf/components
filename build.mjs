import * as esbuild from 'esbuild'

esbuild.buildSync({
  entryPoints: ['server/index.ts'],
  bundle: false,
  format: 'esm',
  platform: 'node',
  target: ['node20.0'],
  packages: 'external',
  outdir: 'dist',
})

// esbuild.buildSync({
//   entryPoints: ['server/lib/db-transport.ts'],
//   bundle: true,
//   format: 'esm',
//   platform: 'node',
//   target: ['node20.0'],
//   packages: 'external',
//   outfile: 'dist/lib/db-transport.mjs',
// })
