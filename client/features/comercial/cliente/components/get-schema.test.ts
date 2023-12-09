import { getSchema } from '@/client/features/comercial/cliente/components/get-shema.js'
import { describe, expect, test } from 'vitest'

describe('getSchema', () => {
  test('getSchema ok', () => {
    expect(getSchema({ inicio: '2020-01-01', fim: '2020-01-02' })).toEqual([
      {
        label: 'Produto',
        name: 'categoria',
      },
      {
        align: 'right',
        label: '2020-01',
        name: '2020-01',
      },
    ])
  })
  test('getSchema date invalid', () => {
    expect(() => getSchema({ inicio: '2020-01', fim: '2020-01' })).toThrowError(
      'data inicial inválida'
    )
  })
})
