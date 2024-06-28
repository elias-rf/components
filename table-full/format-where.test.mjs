import { afterEach, assert, beforeEach, describe, test } from 'vitest'
import { formatWhere } from './format-where.mjs'

const columns = [
  { name: 'id', label: 'ID' },
  {
    name: 'name',
    label: 'Name',
    format: (v) => v.toUpperCase(),
    parse: (v) => v.toLowerCase(),
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
    assert.deepEqual(where, {
      id: '1',
      name: '= ELIAS',
    })
  })
})
