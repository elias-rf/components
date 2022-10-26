{
  "name": "@er/utils",
  "version": "1.0.0",
  "description": "Funções diversas",
  "private": true,
  "module": "dist/esm/index.js",
  "types": "dist/types/index.d.ts",
  "author": "Elias Ribeiro Filho <eliasribeiro@gmail.com>",
  "license": "MIT",
  "scripts": {
    "doc": "nodemon -w src ./node_modules/.bin/jsdoc -c jsdoc.js",
    "build2": "node esbuild.config.mjs",
    "build": "echo \"Error: no build specified\" && exit 0",
    "test": "vitest --run",
    "test:watch": "cross-env NODE_ENV=test vitest"
  },
  "dependencies": {
    "dayjs": "^1.11.5",
    "quick-lru": "6.1.1",
    "qs": "^6.11.0",
    "zod": "^3.19.1"
  },
  "devDependencies": {
    "@babel/core": "^7.19.1",
    "@babel/preset-env": "^7.19.1",
    "@babel/preset-typescript": "^7.18.6",
    "@types/node": "18.7.21",
    "copyfiles": "^2.4.1",
    "cross-env": "^7.0.3",
    "esbuild": "^0.15.9",
    "esbuild-node-externals": "^1.5.0",
    "esbuild-runner": "^2.2.1",
    "ts-node": "^10.9.1",
    "typescript": "^4.8.3",
    "rimraf": "^3.0.2"
  }
}