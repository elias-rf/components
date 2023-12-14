import { rpcRoute } from './rpc2.js'
import { systemRoute } from './system.js'

export const routes = {
  api: {
    '/rpc2': rpcRoute,
    '/system': systemRoute,
  },
}
