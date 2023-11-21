import { _where } from '@/utils/record/where.js'
import { describe, expect, it } from 'vitest'

describe('where', () => {
  it('deve filtrar por 1 parametro', () => {
    const data = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Paul' },
    ]
    expect(_where(data, [['id', 2]])).toEqual([{ id: 2, name: 'Jane' }])
  })
  it('deve filtrar por 2 parametros', () => {
    const data = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 2, name: 'Paul' },
    ]
    expect(
      _where(data, [
        ['id', 2],
        ['name', 'Jane'],
      ])
    ).toEqual([{ id: 2, name: 'Jane' }])
  })
  it('deve filtrar com relações', () => {
    const data = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 2, name: 'Paul' },
    ]
    expect(
      _where(data, [
        ['id', '>', 1],
        ['name', 'Jane'],
      ])
    ).toEqual([{ id: 2, name: 'Jane' }])
  })
})
