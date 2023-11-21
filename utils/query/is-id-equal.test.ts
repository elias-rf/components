import { describe, expect, test } from 'vitest'
import { isIdEqual } from './is-id-equal.js'

describe('isIdEqual', () => {
  test('should return true', () => {
    expect(isIdEqual([['id', 1]], [['id', 1]])).toBe(true)
    expect(
      isIdEqual(
        [
          ['id1', 1],
          ['id2', 2],
        ],
        [
          ['id1', 1],
          ['id2', 2],
        ]
      )
    ).toBe(true)
  })
  test('should return false', () => {
    expect(isIdEqual([['id', 1]], [['id', 2]])).toBe(false)
    expect(isIdEqual([['id', 1]], [['idx', 1]])).toBe(false)
    expect(
      isIdEqual(
        [
          ['id1', 1],
          ['id2', 2],
        ],
        [
          ['id2', 2],
          ['id1', 1],
        ]
      )
    ).toBe(false)
    expect(
      isIdEqual(
        [
          ['id1', 1],
          ['id2', 2],
        ],
        [
          ['id1', 11],
          ['id2', 2],
        ]
      )
    ).toBe(false)
  })
})
