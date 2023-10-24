import { describe, expect, it } from 'vitest'
import { hashObject } from './hash-object'

describe('hashObject', () => {
  it('deve trabalhar com undefined', () => {
    expect(hashObject()).toEqual('')
  })
  it('deve trabalhar com null', () => {
    expect(hashObject()).toEqual('')
  })
  it('deve trabalhar com valor simples', () => {
    expect(hashObject(12)).toEqual('12')
  })
  it('deve trabalhar com array', () => {
    expect(hashObject([1, 2, 3, 4])).toEqual('[1,2,3,4]')
  })
  it('deve trabalhar com valor complexo', () => {
    expect(hashObject([1, { n: 12, a: 3, b: { c: 2 } }])).toEqual(
      '[1,{"a":3,"b":{"c":2},"n":12}]'
    )
  })
  it('deve trabalhar com Object', () => {
    expect(hashObject(new Object({ n: 12, a: 3, b: { c: 2 } }))).toEqual(
      '{"a":3,"b":{"c":2},"n":12}'
    )
  })
})
