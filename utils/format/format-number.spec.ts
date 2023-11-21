import { describe, expect, it } from 'vitest'
import { formatNumber } from './format-number.js'

describe('numberFormat', () => {
  it(`deve retornar [0, "0,0000"]`, () => {
    expect(formatNumber(0, 4)).toEqual('0,0000')
  })

  it(`deve retornar [-1234.1234, "-1.234,1234"]`, () => {
    expect(formatNumber(-1234.1234, 4)).toEqual('-1.234,1234')
  })
  it(`deve retornar "-1,0000" para -1.0`, () => {
    expect(formatNumber(-1, 4)).toEqual('-1,0000')
  })

  it(`deve retornar "-1" para -1.0`, () => {
    expect(formatNumber(-1, 0)).toEqual('-1')
  })
})
