import { useEffect, useRef } from 'react'

/**
 * useInterval is a custom React hook that should be implemented to allow the execution
 * of a function at specified, regular intervals. This would be especially useful for
 * features that require periodic updates, like countdown timers or auto-refresh features.
 */
const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const interval = setInterval(() => {
      savedCallback.current?.()
    }, delay)

    return () => {
      clearInterval(interval)
    }
  }, [delay])
}
export { useInterval }
