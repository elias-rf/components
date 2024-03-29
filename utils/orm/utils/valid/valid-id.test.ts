import { nfSaidaSchema } from '@/data/plano/nf-saida/nf-saida.schema.js'
import { validId } from '@/utils/orm/utils/valid/valid-id.js'
import { describe, expect, test } from 'vitest'

const schema = {
  table: 'phonebook',
  primary: ['idphonebook', 'name'] as const,
  fields: ['idphonebook', 'name', 'department', 'mail'] as const,
}

const schema1 = {
  table: 'phonebook',
  primary: [] as const,
  fields: ['idphonebook', 'name', 'department', 'mail'] as const,
}

export const mapFields = {
  id: 'idphonebook',
  email: 'mail',
  nome: 'name',
  setor: 'department',
}

describe('validId', () => {
  test('schema incompleto', () => {
    expect(() => validId([['idphonebook', 1]], schema1, mapFields)).toThrow(
      'phonebook não possui primary keys'
    )
  })

  test('válido', () => {
    expect(
      validId(
        [
          ['idphonebook', 1],
          ['name', 1],
        ],
        schema,
        mapFields
      )
    ).toEqual({
      where: [
        ['idphonebook', 1],
        ['name', 1],
      ],
    })
  })

  test('campo inexistente', () => {
    expect(() => validId([['ids', 1]], schema, mapFields)).toThrow(
      '[ids] não é id válido em phonebook use: id,nome'
    )
  })

  test('id composto incompleto', () => {
    expect(() => validId([['idphonebook', 1]], schema, mapFields)).toThrow(
      '[nome] não foi usado em phonebook use: nome'
    )
  })

  test('id composto excedente', () => {
    expect(() =>
      validId(
        [
          ['idphonebook', 1],
          ['name', 1],
          ['titulo', 1],
        ],
        schema,
        mapFields
      )
    ).toThrow('[titulo] não é id válido')
  })
})
