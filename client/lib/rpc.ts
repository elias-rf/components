import { authStorage } from '@/client/lib/auth-storage.js'
import type { TModules } from '@/core/index.js'
import { TCurrentUser } from '@/types/index.js'
import { JSONRPCClient, TypedJSONRPCClient } from 'json-rpc-2.0'
import { isEmpty } from 'lodash-es'

let endpoint = '/api/rpc2'

if (process.env.NODE_ENV !== 'production')
  endpoint = 'http://localhost:3333/api/rpc2'

export const rpc: TypedJSONRPCClient<TModules> = new JSONRPCClient(
  async (jsonRPCRequest: any) => {
    let authString = authStorage.getItem()
    let auth: { token: string; user: TCurrentUser } = { token: '', user: {} }

    if (authString && authString !== 'undefined' && !isEmpty(authString)) {
      auth = JSON.parse(authString)
    }

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${auth.token}`,
        user: auth.user?.usuario_id?.toString() || '',
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
  }
)
