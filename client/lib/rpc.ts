import { authStorage } from '@/client/lib/auth-storage.js'
import type { TModules } from '@/core/index.js'
import { JSONRPCClient, TypedJSONRPCClient } from 'json-rpc-2.0'

let endpoint = '/api/rpc2'

if (process.env.NODE_ENV !== 'production')
  endpoint = 'http://localhost:3333/api/rpc2'

export const rpc: TypedJSONRPCClient<TModules> = new JSONRPCClient(
  async (jsonRPCRequest: any) => {
    const auth = JSON.parse(authStorage.getItem() || '{"token":"","user":{}}')
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${auth.token}`,
        user: auth.user.usuario_id || '',
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
