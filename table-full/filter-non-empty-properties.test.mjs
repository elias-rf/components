import { describe, expect, it } from 'vitest'
import { filterNonEmptyProperties } from './filter-non-empty-properties.mjs'

describe('filterNonEmptyProperties', () => {
  it('deve retornar todas as properties !== ""', () => {
    const obj = { a: 1, b: 2, c: null, d: undefined, e: '' }
    const result = filterNonEmptyProperties(obj)
    expect(result).toEqual({ a: 1, b: 2, c: null, d: undefined })
  })
})
