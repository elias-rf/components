import { render } from '@testing-library/react'
import { act, renderHook } from '@testing-library/react-hooks'
import { useEffect } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { useStateMutable } from './use-state-mutable.jsx'

describe('useStateMutable', () => {
  it('should return an object', () => {
    const { result } = renderHook(() => useStateMutable({ value: 0 }))
    act(() => {
      result.current.value = 1
    })
    expect(result.current).to.be.an('object').that.has.property('value')
    expect(result.current.value).toEqual(1)
  })

  it('should re-render when the value changes', () => {
    const spy = vi.fn()

    const TestComponent = () => {
      const state = useStateMutable({ value: 0 })
      spy()
      useEffect(() => {
        state.value = 1
      }, [])
      return <div>val: {state.value}</div>
    }

    render(<TestComponent />)

    expect(spy).toHaveBeenCalledTimes(2)
  })
  it('deve trabalhar com objetos complexos', () => {
    const { result } = renderHook(() =>
      useStateMutable({
        value: 0,
        objeto: { a: { b: 1 } },
        matriz: [0, 1, 2, [3, 4]],
      })
    )
    expect(result.current).toEqual({
      value: 0,
      objeto: { a: { b: 1 } },
      matriz: [0, 1, 2, [3, 4]],
    })
    act(() => {
      result.current.value = 1
    })
    expect(result.current).toEqual({
      value: 1,
      objeto: { a: { b: 1 } },
      matriz: [0, 1, 2, [3, 4]],
    })
    act(() => {
      result.current.objeto.a.b = 10
    })
    expect(result.current).toEqual({
      value: 1,
      objeto: { a: { b: 10 } },
      matriz: [0, 1, 2, [3, 4]],
    })
    act(() => {
      result.current.objeto.a = { b: 12 }
      result.current.matriz[3] = [2, 5]
    })
    expect(result.current).toEqual({
      value: 1,
      objeto: { a: { b: 12 } },
      matriz: [0, 1, 2, [2, 5]],
    })
  })
})
