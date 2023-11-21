import { act, renderHook } from '@testing-library/react-hooks'
import { minLength, safeParse, string } from 'valibot'
import { describe, expect, it } from 'vitest'
import { useForm } from './use-form.js'

describe('useForm hook', () => {
  it('deve alterar value quando handleChange é chamado', () => {
    const { result } = renderHook(() => useForm({ value: { testField: '' } }))
    act(() => {
      result.current.handleChange('test value', 'testField')
    })
    expect(result.current.value.testField).toEqual('test value')
    expect(result.current.dirty).toEqual(['testField'])
  })

  it('deve resetar value quando reset for chamado', () => {
    const { result } = renderHook(() =>
      useForm({ value: { testField: 'test value' } })
    )

    act(() => {
      result.current.handleChange('new value', 'testField')
    })

    expect(result.current.value.testField).toEqual('new value')
    expect(result.current.dirty).toEqual(['testField'])

    act(() => {
      result.current.reset()
    })

    expect(result.current.value.testField).toEqual('test value')
    expect(result.current.dirty).toEqual([])
  })
  it('deve resetar value para novo default quando reset for chamado', () => {
    const { result } = renderHook(() =>
      useForm({ value: { testField: 'default 1' } })
    )
    expect(result.current.dirty).toEqual([])
    act(() => {
      result.current.reset({ testField: 'default 2' })
    })

    expect(result.current.value.testField).toEqual('default 2')
    expect(result.current.dirty).toEqual([])
    act(() => {
      result.current.handleChange('new value', 'testField')
    })

    expect(result.current.value.testField).toEqual('new value')

    act(() => {
      result.current.reset()
    })

    expect(result.current.value.testField).toEqual('default 2')
    expect(result.current.dirty).toEqual([])
  })
  it('deve validar value', () => {
    const { result } = renderHook(() =>
      useForm({
        value: { testField: 'default 1' },
        schema: {
          testField: (value: string) => {
            const resp = safeParse(
              string([minLength(3, 'Nome deve ter pelo menos 3 caracteres')]),
              value
            )
            return resp.success ? '' : resp.issues[0].message
          },
        },
      })
    )

    expect(result.current.value.testField).toEqual('default 1')
    expect(result.current.error.testField).toEqual(undefined)

    act(() => {
      result.current.handleChange('ab', 'testField')
    })

    expect(result.current.value.testField).toEqual('ab')
    expect(result.current.error.testField).toEqual(
      'Nome deve ter pelo menos 3 caracteres'
    )

    act(() => {
      result.current.reset()
    })

    expect(result.current.value.testField).toEqual('default 1')
    expect(result.current.error.testField).toEqual(undefined)
  })
})
