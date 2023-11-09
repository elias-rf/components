import { act, renderHook } from '@testing-library/react-hooks'
import { describe, expect, it } from 'vitest'
import { useForm } from './use-form'

describe('useForm hook', () => {
  it('should change formState when handleChange is called', () => {
    const { result } = renderHook(() => useForm({ testField: '' }))
    act(() => {
      result.current.handleChange({
        target: {
          name: 'testField',
          value: 'test value',
        },
      } as React.ChangeEvent<HTMLInputElement>)
    })
    expect(result.current.formState.testField).toEqual('test value')
  })

  it('should reset formState when resetForm is called', () => {
    const { result } = renderHook(() => useForm({ testField: 'test value' }))

    act(() => {
      result.current.handleChange({
        target: {
          name: 'testField',
          value: 'new value',
        }, // TypeScript will allow this assertion
      } as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.formState.testField).toEqual('new value')

    act(() => {
      result.current.resetForm()
    })

    expect(result.current.formState.testField).toEqual('test value')
  })
})
