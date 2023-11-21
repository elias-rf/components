import { TColumn } from '@/types/index.js'
import { formatWhere } from '@/utils/query/format-where.js'
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
