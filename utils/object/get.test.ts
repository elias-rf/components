import { describe, expect, test } from 'vitest'
import { get } from './get.js'

describe('get', () => {
  test('get nivel 1', () => {
    expect(get({ a: 1, b: 2 }, 'a')).toEqual(1)
  })
  test('get nivel 2', () => {
    expect(get({ a: { b: 2 } }, 'a.b')).toEqual(2)
  })
  test('get nivel 3', () => {
    expect(get({ a: { b: { c: 3 } } }, 'a.b.c')).toEqual(3)
  })
})
