import { describe, expect, it } from 'vitest'
import { calcMd5 as md5 } from './calc-md5.js'

describe('md5', () => {
  it('deve gerar md5', () => {
    expect(md5('Teste de escrita')).toEqual('aa85b2fcd47ace498c8a4182ad25d2e0')
  })

  it('deve gerar md5 errado', () => {
    expect(md5('teste de escrita')).not.toEqual(
      'aa85b2fcd47ace498c8a4182ad25d2e0'
    )
  })
})
