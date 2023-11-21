import { expect, it } from 'vitest'
import { isFunction } from './is-function.js'

it('deve ser function', () => {
  expect(isFunction(undefined)).toBeFalsy()
  expect(isFunction(null)).toBeFalsy()
  expect(isFunction('')).toBeFalsy()
  expect(isFunction(0)).toBeFalsy()
  expect(isFunction(true)).toBeFalsy()
  expect(isFunction(false)).toBeFalsy()
  expect(isFunction([])).toBeFalsy()
  expect(isFunction({})).toBeFalsy()
  expect(isFunction(() => {})).toBeTruthy()
  expect(isFunction(Number.NaN)).toBeFalsy()
})
