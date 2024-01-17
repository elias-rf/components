import { filterNonEmptyProperties } from '@/utils/object/filter-non-empty-properties.js'
import { describe, expect, it } from 'vitest'

describe('filterNonEmptyProperties', () => {
  it('deve retornar todas as properties !== ""', () => {
    const obj = { a: 1, b: 2, c: null, d: undefined, e: '' }
    const result = filterNonEmptyProperties(obj)
    expect(result).toEqual({ a: 1, b: 2, c: null, d: undefined })
  })
})
