import { afterEach, assert, beforeEach, describe, test } from 'vitest'
import { parseWhere } from './parse-where.mjs'

const columns = [
  { name: 'id', label: 'ID' },
  {
    name: 'name',
    label: 'Name',
    format: (v) => v.toUpperCase(),
    parse: (v) => v.toLowerCase(),
  },
]

describe('parseWhere', () => {
  test('deve retornar o where correto', () => {
    const where = parseWhere(
      {
        id: '>= 1',
        name: 'ELIAS',
      },
      columns
    )
    assert.deepEqual(where, [
      ['id', '>=', '1'],
      ['name', '=', 'elias'],
    ])
  })
})
