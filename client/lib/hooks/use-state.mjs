import React from 'react'

export function useState(valueDefault) {
  const [get, set] = React.useState(valueDefault)
  return {
    get: () => get,
    set,
  }
}
