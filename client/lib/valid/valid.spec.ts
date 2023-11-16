import { minLength, string } from 'valibot'
import { describe, expect, it } from 'vitest'
import { valid } from './index'

describe('Validação', () => {
  it('isRequired', () => {
    const schema = string('requirido', [
      minLength(1, 'Valor deve ser informado'),
    ])
    expect(valid(schema)('teste')).toBe('')
    expect(valid(schema)(null)).toBe('requirido')
    expect(valid(schema)('')).toBe('Valor deve ser informado')
  })
})
