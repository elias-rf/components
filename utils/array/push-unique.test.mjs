import { describe, expect, test } from 'vitest'
import { pushUnique } from './push-unique.mjs'

describe('pushUnique', () => {
  test('deve receber valor unico', () => {
    expect(pushUnique([1, 2, 3], 4)).toEqual([1, 2, 3, 4])
  })
  test('deve receber array unico', () => {
    expect(pushUnique([1, 2, 3], [4, 5])).toEqual([1, 2, 3, 4, 5])
  })
  test('deve recusar valor duplicado', () => {
    expect(pushUnique([1, 2, 3], 3)).toEqual([1, 2, 3])
  })
  test('deve recusar array duplicado', () => {
    expect(pushUnique([1, 2, 3], [1, 3])).toEqual([1, 2, 3])
  })
  test('deve aceitar/recursar array mixto', () => {
    expect(pushUnique([1, 2, 3], [1, 4])).toEqual([1, 2, 3, 4])
  })
})
