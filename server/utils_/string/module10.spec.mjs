import { describe, expect, it } from 'vitest'
import { module10 } from './module10.mjs'

describe('module10', () => {
  it('deve gerar dv', () => {
    expect(module10('1')).toEqual('8')
    expect(module10('12')).toEqual('5')
    expect(module10('123')).toEqual('0')
    expect(module10('1234')).toEqual('4')
    expect(module10('12345')).toEqual('5')
    expect(module10('123456')).toEqual('6')
    expect(module10('1234567')).toEqual('4')
    expect(module10('12345678')).toEqual('2')
    expect(module10('123456789')).toEqual('7')
    expect(module10('1234567890')).toEqual('3')
    expect(module10('12345678901')).toEqual('5')
    expect(module10('123456789012')).toEqual('8')
    expect(module10('1234567890123')).toEqual('7')
    expect(module10('12345678901234')).toEqual('7')
    expect(module10('123456789012345')).toEqual('2')
    expect(module10('1234567890123456')).toEqual('9')
    expect(module10('12345678901234567')).toEqual('1')
    expect(module10('123456789012345678')).toEqual('5')
    expect(module10('1234567890123456789')).toEqual('4')
    expect(module10('12345678901234567890')).toEqual('6')
    expect(module10('123456789012345678901')).toEqual('2')
    expect(module10('1234567890123456789012')).toEqual('1')
  })
})
