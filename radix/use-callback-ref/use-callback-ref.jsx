import * as React from 'react'

/**
 * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop or avoid re-executing effects when passed as a dependency
 */
function useCallbackRef(callback) {
  const callbackRef = React.useRef(callback)

  React.useEffect(() => {
    callbackRef.current = callback
  })

  //-------------------------------------------------- https://github.com/facebook/react/issues/19240
  return React.useMemo(
    () =>
      (...args) =>
        callbackRef.current?.(...args),
    []
  )
}

export { useCallbackRef }
