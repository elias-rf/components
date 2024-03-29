import { validFirst } from '@/utils/orm/utils/valid/valid-first.js'
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

describe('validFirst', () => {
  test('válido vazio', () => {
    expect(validFirst([], schema, mapFields)).toEqual({ first: ['*'] })
  })

  test('válido', () => {
    expect(validFirst(['idphonebook'], schema, mapFields)).toEqual({
      first: ['idphonebook'],
    })
  })

  test('válido com alias', () => {
    expect(validFirst(['idphonebook as key'], schema, mapFields)).toEqual({
      first: ['idphonebook as key'],
    })
  })

  test('campo inválido', () => {
    expect(() => validFirst(['ids'], schema, mapFields)).toThrow(
      '[ids] não é um campo válido para select em phonebook use: id,nome,setor,email'
    )
  })
})
