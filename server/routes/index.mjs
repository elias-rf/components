import { rpcRoute } from './rpc2.mjs'
import { systemRoute } from './system.mjs'

export const routes = {
  api: {
    '/rpc2': rpcRoute,
    '/system': systemRoute,
  },
}
