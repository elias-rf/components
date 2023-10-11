import { validFirst } from '@/orm/utils/valid/valid-first'
import { describe, expect, test } from 'vitest'
import { phonebook } from '@/schemas/oftalmo/phonebook.schema'

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
      '[ids] não é um campo válido para select em phonebook use: department,email,id,name'
    )
  })
})
