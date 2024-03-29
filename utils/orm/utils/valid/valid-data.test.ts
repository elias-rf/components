import { validData } from '@/utils/orm/utils/valid/valid-data.js'
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

describe('validData', () => {
  test('válido', () => {
    expect(validData({ idphonebook: 1 }, schema, mapFields)).toEqual({
      idphonebook: 1,
    })
  })
  test('campo inválido', () => {
    expect(() => validData({ ids: 1 }, schema, mapFields)).toThrow(
      '[ids] não é um campo válido para data em phonebook use: id,nome,setor,email'
    )
  })
})
