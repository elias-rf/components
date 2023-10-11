import { createPrimServer } from '@doseofted/prim-rpc'
import { createMethodHandler } from '@doseofted/prim-rpc-plugins/fastify'
import { module } from '@/controllers'
import multipartPlugin from '@fastify/multipart'

export function registerRpcServer(fastify: any) {
  const methodHandler = createMethodHandler({
    fastify,
    multipartPlugin,
    contextTransform(request, reply): any {
      return {
        request: { user: request.user },
        reply: { jwtSign: reply.jwtSign },
      }
    },
  })

  createPrimServer({
    module,
    methodHandler,
    prefix: '/api/rpc',
  })
}
