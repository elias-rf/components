import { describe, expect, it } from 'vitest'
import { valid } from './index.mjs'
import { isRequired } from './isRequired.mjs'

describe('required', () => {
  it('default', () => {
    const req = isRequired()
    expect(valid(req)(null)).toBe('Valor deve ser informado')
    expect(valid(req)(undefined)).toBe('Valor deve ser informado')
    expect(valid(req)('')).toBe('Valor deve ser informado')
  })

  it('custom message', () => {
    const req = isRequired('Requerido')
    expect(valid(req)(null)).toBe('Requerido')
    expect(valid(req)(undefined)).toBe('Requerido')
    expect(valid(req)('')).toBe('Requerido')
  })
})
