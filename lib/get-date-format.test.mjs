import { afterEach, assert, beforeEach, describe, test } from 'vitest'
import { getDateFormat } from './get-date-format.mjs'

describe('getDateFormat', () => {
  test('getDateFormat yyyy-MM-dd', () => {
    assert.deepEqual(getDateFormat('2020-01-01')).toBe('yyyy-MM-dd')
  })

  test('getDateFormat yy-MM-dd', () => {
    assert.deepEqual(getDateFormat('20-01-01')).toBe('yy-MM-dd')
  })

  test('getDateFormat MM-dd', () => {
    assert.deepEqual(getDateFormat('01-01')).toBe('MM-dd')
  })

  test('getDateFormat M-d', () => {
    assert.deepEqual(getDateFormat('1-1')).toBe('MM-dd')
  })

  test('getDateFormat dd/mm/yyyy', () => {
    assert.deepEqual(getDateFormat('01/01/2020')).toBe('dd/MM/yyyy')
  })
})
