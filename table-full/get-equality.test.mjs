import { describe, expect, test } from 'vitest'
import { getEquality } from './get-equality.mjs'

describe('equality', () => {
  describe('getEquality', () => {
    test('default será =', () => {
      expect(getEquality('abc')).toEqual({ equality: '=', value: 'abc' })
    })
    test('recebe =', () => {
      expect(getEquality('=abc')).toEqual({ equality: '=', value: 'abc' })
    })
    test('recebe >=', () => {
      expect(getEquality('>=abc')).toEqual({ equality: '>=', value: 'abc' })
    })
    test('recebe >', () => {
      expect(getEquality('>abc')).toEqual({ equality: '>', value: 'abc' })
    })
    test('recebe <=', () => {
      expect(getEquality('<=abc')).toEqual({ equality: '<=', value: 'abc' })
    })
    test('recebe <', () => {
      expect(getEquality('<abc')).toEqual({ equality: '<', value: 'abc' })
    })

    test('recebe ?vlr', () => {
      expect(getEquality('?abc')).toEqual({ equality: 'like', value: '%abc' })
    })
    test('recebe vlr?', () => {
      expect(getEquality('abc?')).toEqual({ equality: 'like', value: 'abc%' })
    })
    test('recebe ?vlr?', () => {
      expect(getEquality('?abc?')).toEqual({ equality: 'like', value: '%abc%' })
    })

    test('recebe vlr1 <> vlr2', () => {
      expect(getEquality('a<>c')).toEqual({
        equality: 'between',
        value: ['a', 'c'],
      })
    })
    test('recebe -', () => {
      expect(getEquality('-')).toEqual({ equality: 'null', value: '' })
    })
  })
})
