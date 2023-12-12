import { FastifyPluginCallback } from 'fastify'
import { rpcRoute } from './rpc2.js'
import { systemRoute } from './system.js'

const prefix = '/api'
export const routes: FastifyPluginCallback = (fastify, options, done) => {
  fastify.register(rpcRoute, { prefix })
  fastify.register(systemRoute, { prefix })
  done()
}
