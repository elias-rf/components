import { validSelect } from '@/utils/orm/utils/valid/valid-select.js'
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
    expect(validSelect([], schema)).toEqual({ select: [] })
  })

  test('válido', () => {
    expect(validSelect(['idphonebook'], schema, mapFields)).toEqual({
      select: ['idphonebook'],
    })
  })

  test('válido com alias', () => {
    expect(validSelect(['idphonebook as key'], schema, mapFields)).toEqual({
      select: ['idphonebook as key'],
    })
  })

  test('campo inválido', () => {
    expect(() => validSelect(['ids'], schema, mapFields)).toThrow(
      '[ids] não é um campo válido para select em phonebook use: id,nome,setor,email'
    )
  })
})
