import { describe, expect, it } from 'vitest'
import { whereUtil } from './where-util.mjs'

describe('whereUtil', () => {
  it('setUnique', () => {
    expect(
      whereUtil.setValue(
        [
          ['id', '=', 'ab'],
          ['name', '=', 'fulano'],
        ],
        'id',
        'bc'
      )
    ).toEqual([
      ['id', '=', 'bc'],
      ['name', '=', 'fulano'],
    ])
  })
  it('getValue', () => {
    expect(
      whereUtil.getValue(
        [
          ['id', '=', 'ab'],
          ['name', '=', 'fulano'],
        ],
        'id'
      )
    ).toEqual('ab')
  })
})
