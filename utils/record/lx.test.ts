import { describe, expect, test } from 'vitest'
import { lx } from './lx.js'

describe('Thenable', () => {
  test('Thenable', async () => {
    expect(lx.num).toEqual(1)
    expect(await lx).toEqual(42)
  })
})
