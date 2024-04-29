import { default as React, SetStateAction, useMemo, useState } from 'react'

export function useStateful(initial) {
  const [value, setValue] = useState(initial)
  return useMemo(
    () => ({
      value,
      setValue,
    }),
    [value]
  )
}

export default useStateful
