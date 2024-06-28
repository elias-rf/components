import { afterEach, assert, beforeEach, describe, test } from 'vitest'
import { filterNonEmptyProperties } from './filter-non-empty-properties.mjs'

describe('filterNonEmptyProperties', () => {
  test('deve retornar todas as properties !== ""', () => {
    const obj = { a: 1, b: 2, c: null, d: undefined, e: '' }
    const result = filterNonEmptyProperties(obj)
    assert.deepEqual(result, { a: 1, b: 2, c: null, d: undefined })
  })
})
