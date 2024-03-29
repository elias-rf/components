import { validReturning } from '@/utils/orm/utils/valid/valid-returning.js'
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

describe('validSelect', () => {
  test('válido vazio', () => {
    expect(validReturning([], schema, mapFields)).toEqual({})
  })

  test('válido', () => {
    expect(validReturning(['idphonebook'], schema, mapFields)).toEqual({
      returning: ['idphonebook'],
    })
  })

  test('campo inválido', () => {
    expect(() => validReturning(['ids'], schema, mapFields)).toThrow(
      '[ids] não é um campo válido para returning em phonebook use: id,nome,setor,email'
    )
  })
})
