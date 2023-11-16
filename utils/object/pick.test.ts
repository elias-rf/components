import { describe, expect, test } from 'vitest'
import { pick } from './pick'

describe('pick', () => {
  test('pick all properties', () => {
    expect(pick({ a: 1, b: 2 }, ['a', 'b'])).toEqual({ a: 1, b: 2 })
  })
  test('pick only one property', () => {
    expect(pick({ a: 1, b: 2 }, ['a'])).toEqual({ a: 1 })
  })
  test('pick unknown property', () => {
    expect(pick({ a: 1, b: 2 }, ['a', 'c'])).toEqual({ a: 1 })
  })
  test('pick nested property', () => {
    const obj = {
      name: 'John',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA',
      },
    }
    expect(pick(obj, ['name', 'address.street', 'address.country'])).toEqual({
      name: 'John',
      address: { street: '123 Main St', country: 'USA' },
    })

    expect(obj).toEqual({
      name: 'John',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA',
      },
    })
  })
})
