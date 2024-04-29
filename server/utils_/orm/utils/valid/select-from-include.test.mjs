import { describe, expect, test } from 'vitest'
import { selectFromInclude } from './select-from-include.mjs'

const schema = {
  database: 'test',
  table: 'test',
  primary: ['id'],
  relations: {
    esposa: {
      method: async (args) => {
        return args
      },
      where: [
        ['id', 'id_esposa'],
        ['nome', '=', 'nome'],
      ],
    },
    filho: {
      method: async (args) => {
        return args
      },
      where: [
        ['id_filho', 'id'],
        ['idade', '>=', 18],
      ],
    },
  },
  fields: ['id', 'nome', 'id_esposa'],
}

const include = {
  esposa: ['id', 'name'],
  filho: ['id_filho', 'idade'],
}

describe('selectFromInclude', () => {
  test('select has no fields', () => {
    const select = []
    expect(selectFromInclude(select, include, schema)).toEqual([
      'id_esposa',
      'nome',
      'id',
    ])
  })
  test('select has fields from include', () => {
    const select = ['id', 'nome']
    expect(selectFromInclude(select, include, schema)).toEqual([
      'id',
      'nome',
      'id_esposa',
    ])
  })
  test('select has *', () => {
    const select = ['*']
    expect(selectFromInclude(select, include, schema)).toEqual(['*'])
  })
  test('select has fields out from include', () => {
    const select = ['titulo']
    expect(selectFromInclude(select, include, schema)).toEqual([
      'titulo',
      'id_esposa',
      'nome',
      'id',
    ])
  })
})
