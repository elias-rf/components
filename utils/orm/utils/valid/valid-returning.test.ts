import { validReturning } from '@/utils/orm/utils/valid/valid-returning.js'
import { describe, expect, test } from 'vitest'

const phonebook = {
  table: 'phonebook',
  primary: ['id'] as const,
  fields: ['id', 'name', 'department', 'email'] as const,
}

describe('validSelect', () => {
  test('válido vazio', () => {
    expect(validReturning([], phonebook)).toEqual({})
  })

  test('válido', () => {
    expect(validReturning(['id'], phonebook)).toEqual({ returning: ['id'] })
  })

  test('campo inválido', () => {
    expect(() => validReturning(['ids'], phonebook)).toThrow(
      '[ids] não é um campo válido para returning em phonebook use: id,name,department,email'
    )
  })
})
