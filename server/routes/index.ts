// import { trpcMiddle } from "./trpc";

import { FastifyPluginCallback } from 'fastify'
import { systemRoute } from './system'
import { registerPrimServer } from '@/rpc/prim-server'

const prefix = '/api'
export const routes: FastifyPluginCallback = (fastify, options, done) => {
  registerPrimServer(fastify)
  fastify.register(systemRoute, { prefix })
  done()
}
