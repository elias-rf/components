import { useEffect, useRef } from 'react'

/**
 * useTimeout is a custom React hook that would be used to delay the execution
 * of a function by a specified amount of time. This could be useful for a variety
 * of scenarios where a delay in function execution is necessary, like in the case
 * of toast notifications or timed redirects.
 */
const useTimeout = (callback, delay) => {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const timeout = setTimeout(() => {
      savedCallback.current?.()
    }, delay)

    return () => {
      clearTimeout(timeout)
    }
  }, [delay])
}

export { useTimeout }
