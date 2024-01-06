import { validSelect } from '@/utils/orm/utils/valid/valid-select.js'
import { describe, expect, test } from 'vitest'

const phonebook = {
  table: 'phonebook',
  primary: ['id'] as const,
  fields: ['id', 'name', 'department', 'email'] as const,
}

describe('validSelect', () => {
  test('válido vazio', () => {
    expect(validSelect([], phonebook)).toEqual({ select: ['*'] })
  })

  test('válido', () => {
    expect(validSelect(['id'], phonebook)).toEqual({ select: ['id'] })
  })

  test('válido com alias', () => {
    expect(validSelect(['id as key'], phonebook)).toEqual({
      select: ['id as key'],
    })
  })

  test('campo inválido', () => {
    expect(() => validSelect(['ids'], phonebook)).toThrow(
      '[ids] não é um campo válido para select em phonebook use: id,name,department,email'
    )
  })
})
