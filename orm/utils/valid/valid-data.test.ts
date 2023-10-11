import { validData } from '@/orm/utils/valid/valid-data'
import { phonebook } from '@/schemas/oftalmo/phonebook.schema'
import { describe, expect, test } from 'vitest'

describe('validData', () => {
  test('válido', () => {
    expect(validData({ id: 1 }, phonebook)).toEqual({ id: 1 })
  })
  test('campo inválido', () => {
    expect(() => validData({ ids: 1 }, phonebook)).toThrow(
      '[ids] não é um campo válido para data em phonebook use: department,email,id,name'
    )
  })
})
