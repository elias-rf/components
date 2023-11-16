import { describe, expect, test } from 'vitest'
import { omit } from './omit'

describe('omit', () => {
  test('omit all properties', () => {
    expect(omit({ a: 1, b: 2 }, ['a', 'b'])).toEqual({})
  })

  test('omit only one property', () => {
    expect(omit({ a: 1, b: 2 }, ['b'])).toEqual({ a: 1 })
  })

  test('omit unknown property', () => {
    expect(omit({ a: 1, b: 2 }, ['b', 'c'])).toEqual({ a: 1 })
  })

  test('omit nested property', () => {
    const obj = {
      name: 'John',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA',
      },
    }

    expect(omit(obj, ['name', 'address.country', 'address.street'])).toEqual({
      age: 30,
      address: {
        city: 'New York',
      },
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
