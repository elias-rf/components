import { validate } from './index.mjs'
import { isUppercase } from './isUppercase.mjs'
import { expect, test, describe } from 'vitest'

describe('validate isUppercase', () => {
  test('validar Alpha', () => {
    const teste = ['A', 'AB', 'AZ', 'DE']
    for (const vlr of teste) {
      expect(validate(vlr, [isUppercase])).toBe(null)
      expect(validate(vlr, 'Campo', [isUppercase])).toBe(null)
    }
  })

  test('não validar isUppercase', () => {
    const teste = ['a ', '445 ', 'a.b', 'a-']
    for (const vlr of teste) {
      expect(validate(vlr, [isUppercase])).toBe(`${vlr} não é maiúsculo`)
      expect(validate(vlr, 'Campo', [isUppercase])).toBe(
        `Campo não é maiúsculo`
      )
    }
  })
})
