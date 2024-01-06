import { expect, test } from 'vitest'
import { config } from './index.js'
test('config.schema', () => {
  expect(Object.keys(config)).toEqual(['app', 'auth', 'fs', 'db'])
})
