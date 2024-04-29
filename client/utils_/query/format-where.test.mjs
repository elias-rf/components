import { describe, expect, test } from 'vitest'
import { formatWhere } from './format-where.mjs'

const columns = [
  { name: 'id', label: 'ID' },
  {
    name: 'name',
    label: 'Name',
    format: (/** @type {string} */ v) => v.toUpperCase(),
    parse: (/** @type {string} */ v) => v.toLowerCase(),
  },
]

describe('formatWhere', () => {
  test('deve retornar o where correto', () => {
    const where = formatWhere(
      [
        ['id', 1],
        ['name', '=', 'elias'],
      ],
      columns
    )
    expect(where).toEqual({
      id: '1',
      name: '= ELIAS',
    })
  })
})
