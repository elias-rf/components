import { validWhere } from '@/orm/utils/valid/valid-where'
import { describe, expect, test } from 'vitest'

const phonebook = {
  table: 'phonebook',
  primary: ['id'] as const,
  fields: ['id', 'name', 'department', 'email'] as const,
}

describe('validWhere', () => {
  test('válido', () => {
    expect(validWhere([['id', 1]], phonebook)).toEqual({ where: [['id', 1]] })
  })
  test('campo inválido', () => {
    expect(() => validWhere([['ids', 1]], phonebook)).toThrow(
      '[ids] não é um campo válido para where em phonebook use: id,name,department,email'
    )
  })
})
