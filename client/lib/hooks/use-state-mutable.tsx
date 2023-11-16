// https://github.com/antonioru/beautiful-react-hooks
import { useMemo, useState } from 'react'

/**
 * Returns a reactive value that can be used as a state.
 */
export const useStateMutable = <
  TValue,
  TProxied extends Record<string | symbol, TValue>,
>(
  initialState: TProxied
) => {
  if (typeof initialState !== 'object' || initialState === null)
    throw new Error('The initial state must be an object')

  const [, setState] = useState(0)

  return useMemo<TProxied>(
    () =>
      new Proxy(initialState, {
        set: (
          target,
          prop: keyof TProxied,
          value: TProxied[keyof TProxied]
        ) => {
          if (target && target[prop] !== value) {
            target[prop] = value
            setState((state) => state + 1)
          }
          return true
        },
      }),
    [] // deve ser vazio
  )
}