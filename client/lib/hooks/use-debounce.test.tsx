import { act, renderHook } from '@testing-library/react-hooks'
import { describe, expect, it, vi } from 'vitest'
import { useDebounce } from './use-debounce'

describe('useDebounce', () => {
  it('should debounce the function call', () => {
    vi.useFakeTimers()
    const callback = vi.fn()
    const delay = 500

    renderHook(() => useDebounce(callback, delay, []))

    act(() => {
      vi.advanceTimersByTime(delay)
    })

    expect(callback).toBeCalled()
    expect(callback).toHaveBeenCalledTimes(1)

    vi.useRealTimers()
  })
})
