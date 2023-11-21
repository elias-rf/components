import { TColumn } from '@/types/index.js'
import { parseWhere } from '@/utils/query/parse-where.js'
import { describe, expect, test } from 'vitest'

const columns: TColumn[] = [
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
    expect(where).toEqual([
      ['id', '>=', '1'],
      ['name', '=', 'elias'],
    ])
  })
})
