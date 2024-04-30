import { describe, expect, test } from 'vitest'
import { isEmpty } from './is-empty.mjs'

describe('isEmpty', () => {
  test('Array', () => {
    expect(isEmpty([])).toBe(true)
    expect(isEmpty([1, 2, 3])).toBe(false)
  })

  test('Object', () => {
    expect(isEmpty({})).toBe(true)
    expect(isEmpty({ a: 1 })).toBe(false)
  })

  test('String', () => {
    expect(isEmpty('')).toBe(true)
    expect(isEmpty(' ')).toBe(false)
  })

  test('Primitives empty', () => {
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty(null)).toBe(true)
  })

  test('Primitives not empty', () => {
    expect(isEmpty(true)).toBe(false)
    expect(isEmpty(false)).toBe(false)
    expect(isEmpty(0)).toBe(false)
    expect(isEmpty(() => 1)).toBe(false)
  })
})
