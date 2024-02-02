import * as _ from 'lodash-es'

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

export function locationState(state: any, keys: string[]) {
  // valor inicial do state
  const stateValues = getLocation().state

  if (stateValues) {
    const initialState = _.pick(JSON.parse(stateValues), keys)
    state.setState(initialState, false, 'locationState')
  }

  // alterações no state devem ser copiados para url
  const unsubscribe = state.subscribe((stt: any) => {
    const value = JSON.stringify(_.pick(stt, keys))

    if (value !== getLocation().state) {
      applyLocation('state', value)
    }
  })

  // alterações na url devem ser copiadas para state
  subscribeToLocationUpdates(() => {
    const values = getLocation().state
    if (values === undefined) return

    const stateValue = JSON.parse(values)
    state.setState(_.pick(stateValue, keys), false, 'locationState')
  })

  return () => {
    unsubscribe()
  }
}
