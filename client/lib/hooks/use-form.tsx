import { useEffect, useState } from 'react'

/**
 * The useForm hook allows you to manage form state and handle form input
 * changes easily. It takes an initial form state
 * object as an argument and returns an object with the current form state,
 * a function to handle input changes, and a function to reset the form.
 */

type TFields<T extends object> = keyof T

type TErrorState<T> = { [key in keyof T]: string }

type TSchema<T extends object> = Partial<{
  [key in TFields<T>]: (value: any, valueState?: T) => string
}>

export function useForm<T extends object>({
  value,
  schema,
}: {
  value: T
  schema?: TSchema<T>
}) {
  const fieldState = Object.keys(value) as TFields<T>[]
  const [defaultState, setDefaultState] = useState(value)
  const [valueState, setValueState] = useState(value)
  const [dirtyState, setDirtyState] = useState<TFields<T>[]>([])
  const [errorState, setErrorState] = useState<TErrorState<T>>(
    {} as TErrorState<T>
  )

  // update dirty
  useEffect(() => {
    const dirty = fieldState.reduce((acc, cur) => {
      if (defaultState[cur] !== valueState[cur]) acc.push(cur)
      return acc
    }, [] as TFields<T>[])
    if (JSON.stringify(dirty) !== JSON.stringify(dirtyState)) {
      setDirtyState(dirty)
    }
  }, [fieldState, defaultState, valueState])

  // update error
  useEffect(() => {
    if (schema) {
      const error = {} as TErrorState<T>
      for (const field of dirtyState) {
        if (schema && schema[field]) {
          error[field] = schema[field]?.(valueState[field], valueState) || ''
        }
      }
      setErrorState(error)
    }
  }, [dirtyState, valueState])

  function validAll() {
    let response = true
    if (schema) {
      const error = {} as TErrorState<T>
      for (const field of fieldState) {
        if (schema && schema[field]) {
          error[field] = schema[field]?.(valueState[field], valueState) || ''
          if (error[field]) response = false
        }
      }
      setErrorState(error)
    }
    return response
  }

  const handleChange = (value: string, name: keyof T): void => {
    // update value
    if (!name) return
    const current = { ...valueState, [name]: value }
    setValueState(current)
  }

  const reset = (newDefault?: T): void => {
    if (newDefault && Object.hasOwn(newDefault, 'target')) {
      newDefault = defaultState
    }
    newDefault = newDefault || defaultState
    setValueState(newDefault)
    setDefaultState(newDefault)
    setErrorState({} as { [key in keyof T]: string })
  }

  return {
    value: valueState,
    error: errorState,
    dirty: dirtyState,
    handleChange,
    reset,
    validAll,
  }
}
