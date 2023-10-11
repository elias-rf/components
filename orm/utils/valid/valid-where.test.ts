import { validWhere } from '@/orm/utils/valid/valid-where'
import { describe, expect, test } from 'vitest'
import { phonebook } from '@/schemas/oftalmo/phonebook.schema'

describe('validWhere', () => {
  test('válido', () => {
    expect(validWhere([['id', 1]], phonebook)).toEqual({ where: [['id', 1]] })
  })
  test('campo inválido', () => {
    expect(() => validWhere([['ids', 1]], phonebook)).toThrow(
      '[ids] não é um campo válido para where em phonebook use: department,email,id,name'
    )
  })
  test('tipo inválido', () => {
    expect(() => validWhere([['id', '1']], phonebook)).toThrow(
      'phonebook.id deve ser do tipo number mas é string'
    )
  })
})
