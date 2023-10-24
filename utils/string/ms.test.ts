//@ts-nocheck
import { ms } from '@/utils/string/ms'
import { describe, expect, test } from 'vitest'

describe('ms', () => {
  test('ms', () => {
    expect(ms(10)).toBe(10)
    expect(ms('1ms')).toBe(1)
    expect(ms('1s')).toBe(1_000)
    expect(ms('10s')).toBe(10_000)
    expect(ms('100s')).toBe(100_000)
    expect(ms('1m')).toBe(60_000)
    expect(ms('1h')).toBe(3_600_000)
    expect(ms('1d')).toBe(86_400_000)
    expect(ms('1w')).toBe(604_800_000)
    expect(ms('1y')).toBe(31_557_600_000)
  })
  test('ms argument error', () => {
    expect(() => ms()).toThrow('Value is not a string or number.')
    expect(ms('1 ano')).toBeNaN()
  })
})
