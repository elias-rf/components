import { useState } from 'react'

export function useBool(initialValueCreator) {
  const [value, setValue] = useState(initialValueCreator())

  const tooggle = () => setValue((currentValue) => !currentValue)

  return [value, tooggle, setValue]
}
