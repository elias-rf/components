// import { trpcMiddle } from "./trpc";

import { registerRpcServer } from '@/rpc/rpc-server.js'
import { FastifyPluginCallback } from 'fastify'
import { fileManagerRoute } from './file-manager.js'
import { systemRoute } from './system.js'

const prefix = '/api'
export const routes: FastifyPluginCallback = (fastify, options, done) => {
  registerRpcServer(fastify)
  fastify.register(systemRoute, { prefix })
  fastify.register(fileManagerRoute, { prefix })
  done()
}
