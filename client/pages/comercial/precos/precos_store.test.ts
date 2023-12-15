import { describe, expect, test } from 'vitest'
import { precosStore } from './precos_store.js'

describe('usefileManager', () => {
  test('inital values', () => {
    expect(precosStore.getState().path).toEqual('')
    expect(precosStore.getState().dirList).toEqual([])
    expect(precosStore.getState().fileList).toEqual([])
    expect(precosStore.getState().stat).toEqual({})
  })
})
