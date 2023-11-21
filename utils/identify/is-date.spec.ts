import { expect, it } from 'vitest'
import { isDate } from './is-date.js'

it('deve ser date', () => {
  expect(isDate(undefined)).toBeFalsy()
  expect(isDate(null)).toBeFalsy()
  expect(isDate('')).toBeFalsy()
  expect(isDate(0)).toBeFalsy()
  expect(isDate(true)).toBeFalsy()
  expect(isDate(false)).toBeFalsy()
  expect(isDate([])).toBeFalsy()
  expect(isDate({})).toBeFalsy()
  expect(isDate(() => {})).toBeFalsy()
  expect(isDate(Number.NaN)).toBeFalsy()
  expect(isDate(new Date())).toBeTruthy()
})
