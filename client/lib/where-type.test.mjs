import { describe, expect, test } from 'vitest'
import { whereType } from './where-type.mjs'

describe('whereType', () => {
  test('whereType', () => {
    expect(whereType([['id', '1']], 'id', 'int')).toEqual([['id', 1]])
  })
})
