import { describe, expect, it } from 'vitest'
import { removeStringAccents } from './removeStringAccents.js'

describe('removeStringAccents', () => {
  it(`"Abc"`, () => {
    expect(removeStringAccents('Abc')).toEqual('Abc')
  })
  it(`"ãçÂÇ"`, () => {
    expect(removeStringAccents('ãçÂÇ')).toEqual('acAC')
  })
  it(`"Ábé"`, () => {
    expect(removeStringAccents('Ábé')).toEqual('Abe')
  })
  it(`"AaÁá*-12"`, () => {
    expect(removeStringAccents('AaÁá*-12')).toEqual('AaAa*-12')
  })
})
