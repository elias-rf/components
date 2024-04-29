import { validate } from './index.mjs'
import { isAlphanumeric } from './isAlphanumeric.mjs'
import { expect, test, describe } from 'vitest'

describe('validate isAlphanumeric', () => {
  test('validar Alpha', () => {
    const teste = ['a1', '2abc', '23', '3ayk4']
    for (const vlr of teste) {
      expect(validate(vlr, [isAlphanumeric])).toBe(null)
      expect(validate(vlr, 'Campo', [isAlphanumeric])).toBe(null)
    }
  })

  test('não validar isAlphanumeric', () => {
    const teste = ['a ', '445 ', 'a.b', 'a-']
    for (const vlr of teste) {
      expect(validate(vlr, [isAlphanumeric])).toBe(`${vlr} não é alfanumérico`)
      expect(validate(vlr, 'Campo', [isAlphanumeric])).toBe(
        `Campo não é alfanumérico`
      )
    }
  })
})
