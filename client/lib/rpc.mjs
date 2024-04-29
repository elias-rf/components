import { JSONRPCClient } from 'json-rpc-2.0'
import { isEmpty } from 'lodash-es'

import { authStorage } from './auth-storage.mjs'

let endpoint = '/api/rpc2'

if (process.env.NODE_ENV !== 'production')
  endpoint = 'http://localhost:3000/api/rpc2'

export const rpc = new JSONRPCClient(async (jsonRPCRequest) => {
  let authString = authStorage.getItem()

  let auth = { token: '', user: {} }

  if (authString && authString !== 'undefined' && !isEmpty(authString)) {
    auth = JSON.parse(authString).state
  }

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${auth.token}`,
      user: auth.user?.id?.toString() || '',
    },
    body: JSON.stringify(jsonRPCRequest),
  }

  const response = await fetch(endpoint, options)

  if (response.status === 200) {
    // Use client.receive when you received a JSON-RPC response.
    const jsonRPCResponse = await response.json()

    return rpc.receive(jsonRPCResponse)
  } else if (jsonRPCRequest.id !== undefined) {
    throw new Error(response.statusText)
  }
})
