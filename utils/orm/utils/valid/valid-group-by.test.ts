import { validGroupBy } from '@/utils/orm/utils/valid/valid-group-by.js'
import { describe, expect, test } from 'vitest'

const phonebook = {
  table: 'phonebook',
  primary: ['id'] as const,
  fields: ['id', 'name', 'department', 'email'] as const,
}

describe('validGroupBy', () => {
  test('válido vazio', () => {
    expect(validGroupBy([], phonebook)).toEqual({})
  })

  test('válido', () => {
    expect(validGroupBy(['id'], phonebook)).toEqual({ groupBy: ['id'] })
  })

  test('campo inválido', () => {
    expect(() => validGroupBy(['ids'], phonebook)).toThrow(
      '[ids] não é um campo válido para select em phonebook use: id,name,department,email'
    )
  })
})
