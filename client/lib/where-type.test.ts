import { whereType } from '@/client/lib/where-type'
import { describe, test, expect } from 'vitest'

describe('whereType', () => {
  test('whereType', () => {
    expect(whereType([['id', '1']], 'id', 'int')).toEqual([['id', 1]])
  })
})
