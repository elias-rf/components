import { authStorage } from '@/client/lib/auth-storage.js'
import type { TModules } from '@/core/index.js'
import { rpcServer } from '@/core/index.js'
import { JSONRPCClient, TypedJSONRPCClient } from 'json-rpc-2.0'

let endpoint = '/api/rpc2'

if (process.env.NODE_ENV === 'development')
  endpoint = 'http://localhost:3333/api/rpc2'

export const clientRpcMock: TypedJSONRPCClient<TModules> = new JSONRPCClient(
  async (jsonRPCRequest: any) => {
    const auth = JSON.parse(
      authStorage.getItem() || '{"state":{"token":"","user":{}}}'
    )

    const context: any = {
      request: {},
      reply: {},
      user: {},
    }

    const jsonRPCResponse = await rpcServer.receive(jsonRPCRequest, context)
    if (jsonRPCResponse) {
      return clientRpcMock.receive(jsonRPCResponse)
    } else if (jsonRPCRequest.id !== undefined) {
      throw new Error('Invalid JSON-RPC Response')
    }
  }
)
