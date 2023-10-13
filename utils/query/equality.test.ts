import { TWhere } from '@/types'
import {
  getEquality,
  equalityFromObject,
  equalityToObject,
} from '@/utils/query/equality'
import { test, expect, describe } from 'vitest'

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
  describe('equalityToObject', () => {
    test('recebe where retorna object', () => {
      const arg: TWhere<string> = [
        ['fld1', 'abc'],
        ['fld2', '=', 'abc'],
        ['fld3', '>=', 'abc'],
        ['fld4', '>', 'abc'],
        ['fld5', '<=', 'abc'],
        ['fld6', '<', 'abc'],
        ['fld7', 'like', '%abc'],
        ['fld8', 'like', 'abc%'],
        ['fld9', 'like', '%abc%'],
        ['fld10', 'between', ['abc', 'def']],
      ]
      expect(equalityToObject(arg)).toEqual({
        fld1: 'abc',
        fld2: '= abc',
        fld3: '>= abc',
        fld4: '> abc',
        fld5: '<= abc',
        fld6: '< abc',
        fld7: '?abc',
        fld8: 'abc?',
        fld9: '?abc?',
        fld10: 'abc <> def',
      })
    })
  })
  describe('equalityFromObject', () => {
    test('recebe object retorna where', () => {
      const arg = {
        fld1: 'abc',
        fld2: '=abc',
        fld3: '>=abc',
        fld4: '> abc',
        fld5: '<= abc',
        fld6: '< abc',
        fld7: '?abc',
        fld8: 'abc?',
        fld9: '?abc?',
        fld10: 'abc<>def',
      }
      expect(equalityFromObject(arg)).toEqual([
        ['fld1', '=', 'abc'],
        ['fld2', '=', 'abc'],
        ['fld3', '>=', 'abc'],
        ['fld4', '>', 'abc'],
        ['fld5', '<=', 'abc'],
        ['fld6', '<', 'abc'],
        ['fld7', 'like', '%abc'],
        ['fld8', 'like', 'abc%'],
        ['fld9', 'like', '%abc%'],
        ['fld10', 'between', ['abc', 'def']],
      ])
    })
  })
})