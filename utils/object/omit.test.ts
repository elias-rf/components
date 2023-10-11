import { describe, expect, test } from 'vitest'
import { omit } from './omit'

describe('pick', () => {
  test('pick', () => {
    expect(omit({ a: 1, b: 2 }, ['a', 'b'])).toEqual({})
  })
  test('pick', () => {
    expect(omit({ a: 1, b: 2 }, ['b'])).toEqual({ a: 1 })
  })
  test('pick', () => {
    expect(omit({ a: 1, b: 2 }, ['b', 'c'])).toEqual({ a: 1 })
  })
})
