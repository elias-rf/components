import { subscribeKey } from 'valtio/utils'

const getLocation = () => {
  let searchParams: Record<string, string> = {}
  if (typeof window !== 'undefined' && window.location) {
    searchParams = Object.fromEntries(
      new URLSearchParams(window.location.search)
    )
  }
  return searchParams
}

const applyLocation = (
  key: string,
  value: string,
  options?: { replace?: boolean }
): void => {
  const url = new URL(window.location.href)
  const searchParams = getLocation()
  searchParams[key] = value
  url.search = Object.entries(searchParams)
    .map(([key, value]) => {
      return `${key}=${value}`
    })
    .join('&')
  if (options?.replace) {
    window.history.replaceState(null, '', url)
  } else {
    window.history.pushState(null, '', url)
  }
}

const eventPopstate = 'popstate'
const eventPushState = 'pushState'
const eventReplaceState = 'replaceState'
const eventHashchange = 'hashchange'
export const events = [
  eventPopstate,
  eventPushState,
  eventReplaceState,
  eventHashchange,
]

const subscribeToLocationUpdates = (callback: any) => {
  for (const event of events) {
    addEventListener(event, callback)
  }
  return () => {
    for (const event of events) {
      removeEventListener(event, callback)
    }
  }
}

export function locationPlugin(state: any, key: string) {
  // valor inicial do state
  const value = getLocation()[key]
  if (value) {
    state[key] = JSON.parse(value)
  }

  // alterações no state devem ser copiados para url
  const unsubscribe = subscribeKey(state, key, (vlr) => {
    const value = JSON.stringify(vlr)
    applyLocation(key, value)
  })

  // alterações na url devem ser copiadas para state
  subscribeToLocationUpdates(() => {
    const value = getLocation()[key]
    if (value === undefined) return

    const stateValue = JSON.stringify(state[key])
    if (stateValue !== value) {
      state[key] = JSON.parse(value)
    }
  })

  return () => {
    unsubscribe()
  }
}
