import { act, renderHook } from '@testing-library/react-hooks'
import { describe, expect, it, vi } from 'vitest'
import { useTimeout } from './use-timeout.js'

describe('useTimeout', () => {
  it('should delay the execution of the callback', () => {
    vi.useFakeTimers()

    const callback = vi.fn()
    const delay = 2000
    // const { result } = renderHook(() => useTimeout(callback, delay))
    renderHook(() => useTimeout(callback, delay))

    expect(callback).not.toBeCalled()

    act(() => {
      vi.advanceTimersByTime(delay)
    })

    expect(callback).toBeCalled()
    expect(callback).toHaveBeenCalledTimes(1)

    vi.useRealTimers()
  })
})
