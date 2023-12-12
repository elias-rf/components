import type { TModules } from '@/controllers/index.js'
import { JSONRPCClient, TypedJSONRPCClient } from 'json-rpc-2.0'

let endpoint = '/api/rpc2'

if (process.env.NODE_ENV === 'development')
  endpoint = 'http://localhost:3333/api/rpc2'

export const rpc: TypedJSONRPCClient<TModules> = new JSONRPCClient(
  async (jsonRPCRequest: any) => {
    const auth = JSON.parse(
      sessionStorage.getItem('auth') || '{"state":{"token":"","user":{}}}'
    )

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${auth.state.token}`,
        user: auth.state.user.usuario_id,
      },
      body: JSON.stringify(jsonRPCRequest),
    })

    if (response.status === 200) {
      // Use client.receive when you received a JSON-RPC response.
      const jsonRPCResponse = await response.json()
      return rpc.receive(jsonRPCResponse)
    } else if (jsonRPCRequest.id !== undefined) {
      throw new Error(response.statusText)
    }
  }
)
