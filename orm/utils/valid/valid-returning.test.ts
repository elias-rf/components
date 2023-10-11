import { validReturning } from '@/orm/utils/valid/valid-returning'
import { describe, expect, test } from 'vitest'
import { phonebook } from '@/schemas/oftalmo/phonebook.schema'

describe('validSelect', () => {
  test('válido vazio', () => {
    expect(validReturning([], phonebook)).toEqual({})
  })

  test('válido', () => {
    expect(validReturning(['id'], phonebook)).toEqual({ returning: ['id'] })
  })

  test('campo inválido', () => {
    expect(() => validReturning(['ids'], phonebook)).toThrow(
      '[ids] não é um campo válido para returning em phonebook use: department,email,id,name'
    )
  })
})
