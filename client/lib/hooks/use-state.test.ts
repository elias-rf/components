import { act, renderHook } from '@testing-library/react-hooks'
import { describe, expect, it } from 'vitest'
import { useState } from './use-state.js'

describe('useState', () => {
  it('deve aceitar e atualizar string', () => {
    const { result } = renderHook(() => useState('A'))

    expect(result.current.get()).toEqual('A')

    act(() => {
      result.current.set('B')
    })

    expect(result.current.get()).toEqual('B')
  })

  it('deve aceitar e atualizar object', () => {
    const { result } = renderHook(() => useState({ a: 'A', c: { d: 'D' } }))

    expect(result.current.get()).toEqual({ a: 'A', c: { d: 'D' } })

    act(() => {
      result.current.set((vlr: any) => ({ ...vlr, a: 'B' }))
    })

    expect(result.current.get()).toEqual({ a: 'B', c: { d: 'D' } })

    act(() => {
      result.current.set((vlr: any) => ({ ...vlr, c: { d: 'd' } }))
    })

    expect(result.current.get()).toEqual({ a: 'B', c: { d: 'd' } })
  })
})
