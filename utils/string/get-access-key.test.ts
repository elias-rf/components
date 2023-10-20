import { getAccessKey } from '@/utils/string/get-access-key'
import { describe, expect, test } from 'vitest'

describe('getAccessKey', () => {
  test('getAccessKey of Teste', () => {
    expect(getAccessKey('Teste')).toEqual({
      initial: 'Teste',
      middle: '',
      final: '',
      accessKey: undefined,
    })
  })
  test('getAccessKey of [T]este', () => {
    expect(getAccessKey('[T]este')).toEqual({
      initial: '',
      middle: 'T',
      final: 'este',
      accessKey: 't',
    })
  })
  test('getAccessKey of Teste[s]', () => {
    expect(getAccessKey('Teste[s]')).toEqual({
      initial: 'Teste',
      middle: 's',
      final: '',
      accessKey: 's',
    })
  })
  test('getAccessKey of Te[s]te', () => {
    expect(getAccessKey('Te[s]te')).toEqual({
      initial: 'Te',
      middle: 's',
      final: 'te',
      accessKey: 's',
    })
  })
})
