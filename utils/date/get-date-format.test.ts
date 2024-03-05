import { getDateFormat } from '@/utils/date/get-date-format.js'
import { describe, expect, test } from 'vitest'

describe('getDateFormat', () => {
  test('getDateFormat yyyy-MM-dd', () => {
    expect(getDateFormat('2020-01-01')).toBe('yyyy-MM-dd')
  })

  test('getDateFormat yy-MM-dd', () => {
    expect(getDateFormat('20-01-01')).toBe('yy-MM-dd')
  })

  test('getDateFormat MM-dd', () => {
    expect(getDateFormat('01-01')).toBe('MM-dd')
  })

  test('getDateFormat M-d', () => {
    expect(getDateFormat('1-1')).toBe('MM-dd')
  })

  test('getDateFormat dd/mm/yyyy', () => {
    expect(getDateFormat('01/01/2020')).toBe('dd/MM/yyyy')
  })

  test('getDateFormat dd/mm/yy', () => {
    expect(getDateFormat('01/01/20')).toBe('dd/MM/yy')
  })

  test('getDateFormat dd/mm', () => {
    expect(getDateFormat('01/01')).toBe('dd/MM')
  })

  test('getDateFormat d/m', () => {
    expect(getDateFormat('1/1')).toBe('dd/MM')
  })

  test('getDateFormat null', () => {
    expect(getDateFormat('91/01/20')).toBe(null)
  })
})
