import { describe, expect, it } from 'vitest'
import { hashObject } from './hash-object.js'

describe('hashObject', () => {
  it('deve trabalhar com valor simples', () => {
    expect(hashObject(12)).toEqual('12')
  })
  it('deve trabalhar com valor complexo', () => {
    expect(hashObject([{ n: 12 }])).toEqual('[{"n":12}]')
  })
  it('deve trabalhar independente da ordem', () => {
    expect(hashObject({ b: 2, c: { d: 4 }, a: 1 })).toEqual(
      '{"a":1,"b":2,"c":{"d":4}}'
    )
    expect(hashObject({ a: 1, b: 2, c: { d: 4 } })).toEqual(
      '{"a":1,"b":2,"c":{"d":4}}'
    )
  })
})
