import { describe, expect, test } from 'vitest'
import { pick } from './pick'

describe('pick', () => {
  test('pick', () => {
    expect(pick({ a: 1, b: 2 }, ['a', 'b'])).toEqual({ a: 1, b: 2 })
  })
  test('pick', () => {
    expect(pick({ a: 1, b: 2 }, ['a'])).toEqual({ a: 1 })
  })
  test('pick', () => {
    expect(pick({ a: 1, b: 2 }, ['a', 'c'])).toEqual({ a: 1 })
  })
})
