import React from 'react'

export function useState(valueDefault: any) {
  const [get, set] = React.useState(valueDefault)
  return {
    get: () => get,
    set,
  }
}
