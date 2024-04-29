import { describe, expect, it } from 'vitest'
import { isMDY } from '../../lib/valid/isMDY.mjs'
import { valid } from '../../lib/valid/valid.mjs'

describe('number', () => {
  const msg = 'Valor deve ser ano-mes-dia'
  const req = isMDY(msg)
  it('true', () => {
    expect(valid(req)('2021-02-01')).toBe('')
  })

  it('false', () => {
    expect(valid(req)(null)).toBe(msg)
    expect(valid(req)(undefined)).toBe(msg)
    expect(valid(req)('')).toBe(msg)
    expect(valid(req)('1')).toBe(msg)
    expect(valid(req)(1)).toBe(msg)
    expect(valid(req)(new Date())).toBe(msg)
    expect(valid(req)('20-02-01')).toBe(msg)
  })
})
