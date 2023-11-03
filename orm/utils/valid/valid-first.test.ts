import { validFirst } from '@/orm/utils/valid/valid-first'
import { describe, expect, test } from 'vitest'

const phonebook = {
  table: 'phonebook',
  primary: ['id'] as const,
  fields: ['id', 'name', 'department', 'email'] as const,
}

describe('validFirst', () => {
  test('válido vazio', () => {
    expect(validFirst([], phonebook)).toEqual({ first: ['*'] })
  })

  test('válido', () => {
    expect(validFirst(['id'], phonebook)).toEqual({ first: ['id'] })
  })

  test('válido com alias', () => {
    expect(validFirst(['id as key'], phonebook)).toEqual({
      first: ['id as key'],
    })
  })

  test('campo inválido', () => {
    expect(() => validFirst(['ids'], phonebook)).toThrow(
      '[ids] não é um campo válido para select em phonebook use: id,name,department,email'
    )
  })
})
