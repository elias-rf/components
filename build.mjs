import * as esbuild from 'esbuild'

esbuild.buildSync({
  entryPoints: ['server/index.ts'],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: ['node20.0'],
  packages: 'external',
  outfile: 'dist/index.mjs',
})
