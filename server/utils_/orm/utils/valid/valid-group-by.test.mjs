import { describe, expect, test } from 'vitest'
import { validGroupBy } from '../../../../utils/orm/utils/valid/valid-group-by.mjs'

const schema = {
  table: 'phonebook',
  primary: ['idphonebook'],
  fields: ['idphonebook', 'name', 'department', 'mail'],
}

export const mapFields = {
  id: 'idphonebook',
  email: 'mail',
  nome: 'name',
  setor: 'department',
}

describe('validGroupBy', () => {
  test('válido vazio', () => {
    expect(validGroupBy([], schema, mapFields)).toEqual({})
  })

  test('válido', () => {
    expect(validGroupBy(['idphonebook'], schema, mapFields)).toEqual({
      groupBy: ['idphonebook'],
    })
  })

  test('campo inválido', () => {
    expect(() => validGroupBy(['ids'], schema, mapFields)).toThrow(
      '[ids] não é um campo válido para select em phonebook use: id,nome,setor,email'
    )
  })
})
