import { useEffect, useState } from 'react'

/**
 * The useForm hook allows you to manage form state and handle form input
 * changes easily. It takes an initial form state
 * object as an argument and returns an object with the current form state,
 * a function to handle input changes, and a function to reset the form.
 */

export function useForm({ value, schema }) {
  const fieldState = Object.keys(value)
  const [defaultState, setDefaultState] = useState(value)
  const [valueState, setValueState] = useState(value)
  const [dirtyState, setDirtyState] = useState([])
  const [errorState, setErrorState] = useState({})

  // update dirty
  useEffect(() => {
    const dirty = fieldState.reduce((acc, cur) => {
      if (defaultState[cur] !== valueState[cur]) acc.push(cur)
      return acc
    }, [])
    if (JSON.stringify(dirty) !== JSON.stringify(dirtyState)) {
      setDirtyState(dirty)
    }
  }, [fieldState, defaultState, valueState])

  // update error
  useEffect(() => {
    if (schema) {
      const error = {}
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
      const error = {}
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

  const handleChange = (value, name) => {
    // update value
    if (!name) return
    const current = { ...valueState, [name]: value }
    setValueState(current)
  }

  const reset = (newDefault) => {
    if (newDefault && Object.hasOwn(newDefault, 'target')) {
      newDefault = defaultState
    }
    newDefault = newDefault || defaultState
    setValueState(newDefault)
    setDefaultState(newDefault)
    setErrorState({})
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
