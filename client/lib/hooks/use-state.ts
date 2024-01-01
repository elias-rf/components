import React from 'react'

export function useState<T>(valueDefault: T) {
  const [get, set] = React.useState(valueDefault)
  return {
    get: () => get,
    set,
  }
}
