import { act, renderHook } from '@testing-library/react-hooks'
import { describe, expect, it } from 'vitest'
import { useCombobox } from './use-combobox.js'

const options = [
  { label: 'Brazil', value: 'BR' },
  { label: 'Canada', value: 'CA' },
  { label: 'France', value: 'FR' },
  { label: 'Japan', value: 'JP' },
  { label: 'Mexico', value: 'MX' },
  { label: 'New Zeland', value: 'NZ' },
  { label: 'United States', value: 'US' },
]

describe('useCombobox', () => {
  it('deve aceitar e atualizar string', () => {
    const { result } = renderHook(() =>
      useCombobox({
        value: '',
        options,
        onInput: () => null,
      })
    )

    expect(result.current.value.value).toEqual('')
    expect(result.current.label.value).toEqual('')
    expect(result.current.options.value).toEqual(options)
    act(() => {
      result.current.handleChange({ target: { value: 'an' } })
    })

    expect(result.current.value.value).toEqual('')
    expect(result.current.label.value).toEqual('an')
    expect(result.current.options.value).toEqual([
      { label: 'Canada', value: 'CA' },
      { label: 'France', value: 'FR' },
      { label: 'Japan', value: 'JP' },
      { label: 'New Zeland', value: 'NZ' },
    ])
  })
  it('deve navegar com setas', () => {
    const { result } = renderHook(() =>
      useCombobox({
        value: '',
        options,
        onInput: () => null,
      })
    )

    expect(result.current.value.value).toEqual('')
    expect(result.current.label.value).toEqual('')
    expect(result.current.options.value).toEqual(options)
    act(() => {
      result.current.handleKeys({ code: 'ArrowDown' })
    })

    expect(result.current.value.value).toEqual('')
    expect(result.current.label.value).toEqual('Brazil')
    expect(result.current.selected.value).toEqual('BR')
    expect(result.current.options.value).toEqual(options)
  })
})
