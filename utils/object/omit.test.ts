import { describe, expect, it, test } from 'vitest'
import { omit } from './omit.js'

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
        street: { name: 'Main St', number: 123 },
        city: 'New York',
        country: 'USA',
      },
    }

    expect(
      omit(obj, ['name', 'address.country', 'address.street.number'])
    ).toEqual({
      age: 30,
      address: {
        city: 'New York',
        street: { name: 'Main St' },
      },
    })

    expect(obj).toEqual({
      name: 'John',
      age: 30,
      address: {
        street: { name: 'Main St', number: 123 },
        city: 'New York',
        country: 'USA',
      },
    })
  })

  it('should delete nested values:', function () {
    expect(omit({ a: { b: { c: 'd' } } }, ['a.b'])).toEqual({ a: {} })
    expect(omit({ a: { b: { c: 'd' } } }, ['a.b.c'])).toEqual({ a: { b: {} } })
    expect(omit({ a: { b: { c: 'd', e: 'f' } } }, ['a.b.c'])).toEqual({
      a: { b: { e: 'f' } },
    })
  })

  it('should delete...:', function () {
    expect(omit({ 'a.b': 'c', d: 'e' }, ['a.b'])).toEqual({ d: 'e' })
  })

  it('should delete nested escaped values:', function () {
    expect(omit({ a: { 'b.c': 'd' } }, ['a.b.c'])).toEqual({ a: {} })
    expect(omit({ 'a.b.c': 'd' }, ['a.b.c'])).toEqual({})
    expect(omit({ 'a.b': 'c', d: 'e' }, ['a.b'])).toEqual({
      d: 'e',
    })
  })
})

describe('input path as array paths', function () {
  it('should update the given object when a property is deleted:', function () {
    expect(omit({ a: 'b' }, ['a'])).toEqual({})
  })

  it('should return true when a property is deleted:', function () {
    expect(omit({ a: 'b' }, ['a'])).toEqual({})
  })

  it('should return true when the given property does not exist:', function () {
    expect(omit({ a: 'b' }, ['z'])).toEqual({ a: 'b' })
  })

  it('should delete nested values:', function () {
    expect(omit({ a: { b: { c: 'd' } } }, ['a', 'b'])).toEqual({})
    expect(omit({ a: { b: { c: 'd' } } }, ['a', 'b', 'c'])).toEqual({})
    expect(omit({ a: { b: { c: 'd', e: 'f' } } }, ['a.b.c'])).toEqual({
      a: { b: { e: 'f' } },
    })
  })

  it('should delete...:', function () {
    expect(omit({ 'a.b': 'c', d: 'e' }, ['a.b'])).toEqual({ d: 'e' })
  })

  it('should delete nested escaped values:', function () {
    expect(omit({ a: { 'b.c': 'd' } }, ['a', 'b.c'])).toEqual({})
    expect(omit({ 'a.b.c': 'd' }, ['a.b.c'])).toEqual({})
    expect(omit({ 'a.b': 'c', d: 'e' }, ['a.b'])).toEqual({ d: 'e' })
  })
})
