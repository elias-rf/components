import { whereType } from '@/client/lib/where-type.js'
import { describe, expect, test } from 'vitest'

describe('whereType', () => {
  test('whereType', () => {
    expect(whereType([['id', '1']], 'id', 'int')).toEqual([['id', 1]])
  })
})
