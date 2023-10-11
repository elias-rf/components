import { validGroupBy } from '@/orm/utils/valid/valid-group-by'
import { describe, expect, test } from 'vitest'
import { phonebook } from '@/schemas/oftalmo/phonebook.schema'

describe('validGroupBy', () => {
  test('válido vazio', () => {
    expect(validGroupBy([], phonebook)).toEqual({})
  })

  test('válido', () => {
    expect(validGroupBy(['id'], phonebook)).toEqual({ groupBy: ['id'] })
  })

  test('campo inválido', () => {
    expect(() => validGroupBy(['ids'], phonebook)).toThrow(
      '[ids] não é um campo válido para select em phonebook use: department,email,id,name'
    )
  })
})
