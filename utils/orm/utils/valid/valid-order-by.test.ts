import { validOrderBy } from '@/utils/orm/utils/valid/valid-order-by.js'
import { describe, expect, test } from 'vitest'

const phonebook = {
  table: 'phonebook',
  primary: ['id'] as const,
  fields: ['id', 'name', 'department', 'email'] as const,
}

describe('validOrder', () => {
  test('válido', () => {
    expect(validOrderBy([['id', 'asc']], phonebook)).toEqual({
      orderBy: [['id', 'asc']],
    })
  })
  test('campo inválido', () => {
    expect(() => validOrderBy([['ids', 'asc']], phonebook)).toThrow(
      '[ids] não é um campo válido para where em phonebook use: id,name,department,email'
    )
  })
  test('tipo inválido', () => {
    // @ts-ignore
    expect(() => validOrderBy([['id', '1']], phonebook)).toThrow(
      'id deve ser "asc" | "desc"'
    )
  })
})
