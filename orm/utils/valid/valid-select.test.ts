import { validSelect } from '@/orm/utils/valid/valid-select'
import { describe, expect, test } from 'vitest'
import { phonebook } from '@/schemas/oftalmo/phonebook.schema'

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
      '[ids] não é um campo válido para select em phonebook use: department,email,id,name'
    )
  })
})
