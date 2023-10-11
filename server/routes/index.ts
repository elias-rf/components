// import { trpcMiddle } from "./trpc";

import { FastifyPluginCallback } from 'fastify'
import { systemRoute } from './system'
import { registerRpcServer } from '@/rpc/rpc-server'

const prefix = '/api'
export const routes: FastifyPluginCallback = (fastify, options, done) => {
  registerRpcServer(fastify)
  fastify.register(systemRoute, { prefix })
  done()
}
