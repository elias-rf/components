import { validate } from './index.mjs'
import { isMinLength } from './isMinLength.mjs'
import { expect, test, describe } from 'vitest'

describe('validate isMinLength', () => {
  test('validar isMinLength', () => {
    const teste = ['A12', 'ABcd', 'AZ23sd.', 'DEDO']
    for (const vlr of teste) {
      expect(validate(vlr, [isMinLength(3)])).toBe(null)
      expect(validate(vlr, 'Campo', [isMinLength(3)])).toBe(null)
    }
  })

  test('não validar isMinLength', () => {
    const teste = ['a ', '45', 'ab', '']
    for (const vlr of teste) {
      expect(validate(vlr, [isMinLength(3)])).toBe(
        `${vlr} deve ter mais que 3 caracteres`
      )
      expect(validate(vlr, 'Campo', [isMinLength(3)])).toBe(
        `Campo deve ter mais que 3 caracteres`
      )
    }
  })
})
