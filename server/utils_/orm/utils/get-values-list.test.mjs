import { describe, expect, test } from 'vitest'
import { getValuesList } from './get-values-list.mjs'

describe('getValuesList', () => {
  test('string keys', async () => {
    const data = [
      { id: 1, name: 'test1' },
      { id: 2, name: 'test2' },
    ]
    const response = getValuesList(data, 'id')
    expect(response).toEqual([1, 2])
  })

  test('array keys', async () => {
    const data = [
      { id: 1, name: 'test1' },
      { id: 2, name: 'test2' },
    ]

    const response = getValuesList(data, ['id', 'name'])

    expect(response).toEqual([
      [1, 'test1'],
      [2, 'test2'],
    ])
  })
})
