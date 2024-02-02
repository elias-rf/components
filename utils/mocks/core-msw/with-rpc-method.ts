import type { JSONRPCParams } from 'json-rpc-2.0'
import { isMatch } from 'lodash-es'

export function withRpcMethod(
  rpc: { method?: string; params?: JSONRPCParams },
  resolver: (args: any) => any
) {
  return async (args: any) => {
    const { request } = args

    // Ignore requests that have a non-JSON body.
    const contentType = request.headers.get('Content-Type') || ''
    if (!contentType.includes('application/json')) {
      return
    }

    // Clone the request and read it as JSON.
    const actualBody = await request.clone().json()

    // Compare two objects using "lodash".
    if (!isMatch(actualBody, rpc)) {
      return
    }

    return resolver(args)
  }
}
