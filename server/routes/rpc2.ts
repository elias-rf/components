import { registerController, type TModules } from '@/controllers/index.js'
import { FastifyPluginCallback } from 'fastify'
import {
  JSONRPCRequest,
  JSONRPCServer,
  type TypedJSONRPCServer,
} from 'json-rpc-2.0'

const server: TypedJSONRPCServer<TModules> = new JSONRPCServer()
registerController(server)

export const rpcRoute: FastifyPluginCallback = (fastify, options, done) => {
  fastify.post('/rpc2', async (request, reply) => {
    const jsonRPCRequest = request.body as JSONRPCRequest
    const context: any = {
      request,
      reply,
      user: request.user,
    }
    const jsonRPCResponse = await server.receive(jsonRPCRequest, context)
    if (jsonRPCResponse) {
      reply.send(jsonRPCResponse)
    } else {
      reply.send(204)
    }
  })
  fastify.get('/rpc2', (request, reply) => {
    reply.send('rpc2')
  })
  done()
}
