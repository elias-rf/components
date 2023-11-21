import { expect, it } from 'vitest'
import { isArray } from './is-array.js'

it('deve ser array', () => {
  expect(isArray(undefined)).toBeFalsy()
  expect(isArray(null)).toBeFalsy()
  expect(isArray(123)).toBeFalsy()
  expect(isArray('[1,2,3]')).toBeFalsy()
  expect(isArray(new Date())).toBeFalsy()
  expect(isArray({ a: 1, b: 2 })).toBeFalsy()
  expect(isArray([1, 2, 3])).toBeTruthy()
  expect(isArray([])).toBeTruthy()
  expect(isArray(new Array(1, 2, 3))).toBeTruthy()
})
