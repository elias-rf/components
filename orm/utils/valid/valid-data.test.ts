import { validData } from '@/orm/utils/valid/valid-data.js'
import { describe, expect, test } from 'vitest'

const phonebook = {
  table: 'phonebook',
  primary: ['id'] as const,
  fields: ['id', 'name', 'department', 'email'] as const,
}

describe('validData', () => {
  test('válido', () => {
    expect(validData({ id: 1 }, phonebook)).toEqual({ id: 1 })
  })
  test('campo inválido', () => {
    expect(() => validData({ ids: 1 }, phonebook)).toThrow(
      '[ids] não é um campo válido para data em phonebook use: id,name,department,email'
    )
  })
})
