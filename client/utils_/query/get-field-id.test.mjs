import { describe, expect, test } from 'vitest'
import { getFieldId } from './get-field-id.mjs'

describe('getFieldId', () => {
  test('deve retornar id field', () => {
    const result = getFieldId('id', [['id', 1]])
    expect(result).toBe(1)
  })
  test('deve retornar id field compost', () => {
    const result = getFieldId('id2', [
      ['id1', 1],
      ['id2', 2],
    ])
    expect(result).toBe(2)
  })
  test('deve retornar undefined', () => {
    const result = getFieldId('id1', [['id', 1]])
    expect(result).toBe(undefined)
  })
})
