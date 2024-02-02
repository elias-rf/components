export function globalPlugin(state: any, key: string) {
  // Connection to a broadcast channel
  const bc = new BroadcastChannel(key)

  // valor inicial do state
  bc.postMessage(null)

  // alterações no state devem ser postados
  const unsubscribe = state.subscribe((value: any) => {
    bc.postMessage(JSON.stringify(value))
  })

  // alterações postadas devem ser copiadas para state
  bc.onmessage = (event) => {
    if (event.data === null) {
      bc.postMessage(JSON.stringify(state))
    } else {
      if (JSON.stringify(state) !== event.data)
        state.setState(JSON.parse(event.data))
    }
  }

  return () => {
    unsubscribe()
  }
}
