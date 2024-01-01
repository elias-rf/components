import { useCallback, useState } from 'react'

import { useEventListener, useIsomorphicLayoutEffect } from 'usehooks-ts'

interface Size {
  left: number
  top: number
  width: number
  height: number
}

export function useElementSize<
  T extends HTMLElement = HTMLDivElement,
>(pageSizeState: {
  left: number
  top: number
  width: number
  height: number
}): [(node: T | null) => void, Size] {
  // Mutable values like 'ref.current' aren't valid dependencies
  // because mutating them doesn't re-render the component.
  // Instead, we use a state as a ref to be reactive.
  const [ref, setRef] = useState<T | null>(null)
  const [size, setSize] = useState<Size>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  })

  // Prevent too many rendering using useCallback
  const handleSize = useCallback(() => {
    const size = {
      left: ref?.offsetLeft || 0,
      top: ref?.offsetTop || 0,
      width: ref?.offsetWidth || 0,
      height: ref?.offsetHeight || 0,
    }
    pageSizeState = size
    setSize(size)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetLeft, ref?.offsetTop, ref?.offsetHeight, ref?.offsetWidth])

  useEventListener('resize', handleSize)

  useIsomorphicLayoutEffect(() => {
    handleSize()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetLeft, ref?.offsetTop, ref?.offsetHeight, ref?.offsetWidth])

  return [setRef, size]
}
