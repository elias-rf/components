import { act, renderHook } from '@testing-library/react-hooks'
import { describe, expect, it, vi } from 'vitest'
import { useThrottle } from './use-throttle'

describe('useThrottle', () => {
  it('should throttle the function call', () => {
    vi.useFakeTimers()

    const callback = vi.fn()
    const delay = 200
    // const { result } = renderHook(() => useThrottle(callback, delay))
    renderHook(() => useThrottle(callback, delay))

    act(() => {
      vi.advanceTimersByTime(delay)
    })

    expect(callback).toBeCalled()
    expect(callback).toHaveBeenCalledTimes(1)

    act(() => {
      vi.advanceTimersByTime(delay)
    })

    expect(callback).toHaveBeenCalledTimes(2)

    act(() => {
      vi.advanceTimersByTime(delay)
    })

    expect(callback).toHaveBeenCalledTimes(3)

    vi.useRealTimers()
  })
})
