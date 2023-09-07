import { createPrimServer } from '@doseofted/prim-rpc'
import { createMethodHandler } from '@doseofted/prim-rpc-plugins/fastify'
import { module } from '@/controllers'
import multipartPlugin from '@fastify/multipart'

export function registerPrimServer(fastify: any) {
  const methodHandler = createMethodHandler({
    fastify,
    multipartPlugin,
  })

  createPrimServer({
    module,
    methodHandler,
    prefix: '/api/rpc',
  })
}
