import { expect, it } from 'vitest'
import { isBoolean } from './is-boolean.js'

it('deve ser boolean', () => {
  expect(isBoolean(undefined)).toBeFalsy()
  expect(isBoolean(null)).toBeFalsy()
  expect(isBoolean('')).toBeFalsy()
  expect(isBoolean(0)).toBeFalsy()
  expect(isBoolean(true)).toBeTruthy()
  expect(isBoolean(false)).toBeTruthy()
  expect(isBoolean([])).toBeFalsy()
  expect(isBoolean({})).toBeFalsy()
})
