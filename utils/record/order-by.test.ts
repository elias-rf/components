import { _orderBy } from '@/utils/record/order-by.js'
import { describe, expect, it } from 'vitest'

describe('orderBy', () => {
  it('deve ordernar number', () => {
    const data = [
      { id: 2, name: 'Jane' },
      { id: 1, name: 'John' },
      { id: 3, name: 'Paul' },
    ]
    expect(_orderBy(data, [['id', 'asc']])).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Paul' },
    ])
    expect(_orderBy(data, [['id', 'desc']])).toEqual([
      { id: 3, name: 'Paul' },
      { id: 2, name: 'Jane' },
      { id: 1, name: 'John' },
    ])
  })
  it('deve ordernar string', () => {
    const data = [
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Paul' },
      { id: 1, name: 'John' },
    ]
    expect(_orderBy(data, [['name', 'asc']])).toEqual([
      { id: 2, name: 'Jane' },
      { id: 1, name: 'John' },
      { id: 3, name: 'Paul' },
    ])
    expect(_orderBy(data, [['name', 'desc']])).toEqual([
      { id: 3, name: 'Paul' },
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ])
  })
})
