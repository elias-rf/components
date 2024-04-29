import { describe, expect, it } from 'vitest'
import { filterNullProperties } from './filter-null-properties.mjs'

describe('filterNullProperties', () => {
  it('should return an empty object when given an empty object', () => {
    const obj = { a: 1, b: 2, c: null, d: undefined, e: '' }
    const result = filterNullProperties(obj)
    expect(result).toEqual({ a: 1, b: 2, e: '' })
  })
})
