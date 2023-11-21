import { _select } from '@/utils/record/select.js'
import { describe, expect, it } from 'vitest'

describe('select', () => {
  it('deve filtrar por 1 parametro', () => {
    const data = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Paul' },
    ]
    expect(_select(data, ['id'])).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }])
  })
  it('deve filtrar por 2 parametros', () => {
    const data = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 2, name: 'Paul' },
    ]
    expect(_select(data, ['name'])).toEqual([
      { name: 'John' },
      { name: 'Jane' },
      { name: 'Paul' },
    ])
  })
  it('deve select todos', () => {
    const data = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 2, name: 'Paul' },
    ]
    expect(_select(data, ['*'])).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 2, name: 'Paul' },
    ])
  })
})
