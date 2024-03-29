import { validWhere } from '@/utils/orm/utils/valid/valid-where.js'
import { describe, expect, test } from 'vitest'

const schema = {
  table: 'phonebook',
  primary: ['idphonebook'] as const,
  fields: ['idphonebook', 'name', 'department', 'mail'] as const,
}

export const mapFields = {
  id: 'idphonebook',
  email: 'mail',
  nome: 'name',
  setor: 'department',
}

describe('validWhere', () => {
  test('válido', () => {
    expect(validWhere([['idphonebook', 1]], schema, mapFields)).toEqual({
      where: [['idphonebook', 1]],
    })
  })
  test('campo inválido', () => {
    expect(() => validWhere([['ids', 1]], schema, mapFields)).toThrow(
      '[ids] não é um campo válido para where em phonebook use: id,nome,setor,email'
    )
  })
})
