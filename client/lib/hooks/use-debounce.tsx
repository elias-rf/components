import * as React from 'react'
import { useEffect, useRef } from 'react'

/**
 * useDebounce is a custom React hook that will be used to limit the rate
 * at which a function can fire. This is useful when we have a function
 * that we need to execute, but we don’t want it to execute until after
 * a certain amount of time has passed since it was last invoked.
 */
const useDebounce = (
  callback: () => void,
  delay: number,
  dependencies: React.DependencyList[]
) => {
  const timerRef = useRef<NodeJS.Timeout | undefined>()

  useEffect(() => {
    clearTimeout(timerRef.current)

    timerRef.current = setTimeout(() => {
      callback()
    }, delay)

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [...dependencies, callback, delay])
}
export { useDebounce }
