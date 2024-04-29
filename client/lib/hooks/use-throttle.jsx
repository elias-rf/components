import { useEffect, useState } from 'react'

/**
 * useThrottle is a custom React hook that will be used to ensure
 * that a function cannot be called more than once every X milliseconds.
 * This can be helpful in situations where we want to make sure that
 * a certain function is not called too often, such as a resize or
 * scroll event listener in a web application.
 */
const useThrottle = (func, delay) => {
  const [lastCall, setLastCall] = useState(0)

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastCall >= delay) {
        setLastCall(Date.now())
        func()
      }
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [func, delay, lastCall])
}

export { useThrottle }
