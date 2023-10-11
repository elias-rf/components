import { validOrderBy } from '@/orm/utils/valid/valid-order-by'
import { describe, expect, test } from 'vitest'
import { phonebook } from '@/schemas/oftalmo/phonebook.schema'

describe('validOrder', () => {
  test('válido', () => {
    expect(validOrderBy([['id', 'asc']], phonebook)).toEqual({
      orderBy: [['id', 'asc']],
    })
  })
  test('campo inválido', () => {
    expect(() => validOrderBy([['ids', 'asc']], phonebook)).toThrow(
      '[ids] não é um campo válido para where em phonebook use: department,email,id,name'
    )
  })
  test('tipo inválido', () => {
    // @ts-ignore
    expect(() => validOrderBy([['id', '1']], phonebook)).toThrow(
      'id deve ser "asc" | "desc"'
    )
  })
})
