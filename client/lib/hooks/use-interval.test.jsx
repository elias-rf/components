import { act, renderHook } from '@testing-library/react-hooks'
import { describe, expect, it, vi } from 'vitest'
import { useInterval } from './use-interval.jsx'

describe('useInterval', () => {
  it('should execute the callback at regular intervals', () => {
    vi.useFakeTimers()

    const callback = vi.fn()
    const delay = 1000
    // const { result } = renderHook(() => useInterval(callback, delay))
    renderHook(() => useInterval(callback, delay))

    expect(callback).not.toBeCalled()

    act(() => {
      vi.advanceTimersByTime(delay)
    })

    expect(callback).toBeCalled()
    expect(callback).toHaveBeenCalledTimes(1)

    act(() => {
      vi.advanceTimersByTime(delay)
    })

    expect(callback).toHaveBeenCalledTimes(2)

    vi.useRealTimers()
  })
})
