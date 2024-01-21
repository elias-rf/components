import { describe, expect, test } from 'vitest'
import { precosStore } from './precos-store.js'

describe('usefileManager', () => {
  test('inital values', () => {
    expect(precosStore.state.path).toEqual('')
    expect(precosStore.state.dirList).toEqual([])
    expect(precosStore.state.fileList).toEqual([])
    expect(precosStore.state.stat).toEqual({})
  })
})
