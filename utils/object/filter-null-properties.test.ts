import { filterNullProperties } from '@/utils/object/filter-null-properties.js'
import { describe, expect, it } from 'vitest'

describe('filterNullProperties', () => {
  it('should return an empty object when given an empty object', () => {
    const obj = { a: 1, b: 2, c: null, d: undefined, e: '' }
    const result = filterNullProperties(obj)
    expect(result).toEqual({ a: 1, b: 2, e: '' })
  })
})
