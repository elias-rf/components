import { afterEach, assert, beforeEach, describe, test } from 'vitest'
import { getEquality } from './get-equality.mjs'

describe('equality', () => {
  describe('getEquality', () => {
    test('default será =', () => {
      assert
        .deepEqual(getEquality('abc'))
        .toEqual({ equality: '=', value: 'abc' })
    })
    test('recebe =', () => {
      assert
        .deepEqual(getEquality('=abc'))
        .toEqual({ equality: '=', value: 'abc' })
    })
    test('recebe >=', () => {
      assert
        .deepEqual(getEquality('>=abc'))
        .toEqual({ equality: '>=', value: 'abc' })
    })
    test('recebe >', () => {
      assert
        .deepEqual(getEquality('>abc'))
        .toEqual({ equality: '>', value: 'abc' })
    })
    test('recebe <=', () => {
      assert
        .deepEqual(getEquality('<=abc'))
        .toEqual({ equality: '<=', value: 'abc' })
    })
    test('recebe <', () => {
      assert
        .deepEqual(getEquality('<abc'))
        .toEqual({ equality: '<', value: 'abc' })
    })

    test('recebe ?vlr', () => {
      assert
        .deepEqual(getEquality('?abc'))
        .toEqual({ equality: 'like', value: '%abc' })
    })
    test('recebe vlr?', () => {
      assert
        .deepEqual(getEquality('abc?'))
        .toEqual({ equality: 'like', value: 'abc%' })
    })
    test('recebe ?vlr?', () => {
      assert
        .deepEqual(getEquality('?abc?'))
        .toEqual({ equality: 'like', value: '%abc%' })
    })

    test('recebe vlr1 <> vlr2', () => {
      assert.deepEqual(getEquality('a<>c'), {
        equality: 'between',
        value: ['a', 'c'],
      })
    })
    test('recebe -', () => {
      assert
        .deepEqual(getEquality('-'))
        .toEqual({ equality: 'null', value: '' })
    })
  })
})
