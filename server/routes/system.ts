import { config } from '@/config/index.js'
import { omit } from '@/utils/object/omit.js'
import { pick } from '@/utils/object/pick.js'
import { FastifyPluginCallback } from 'fastify'

export const systemRoute: FastifyPluginCallback = (fastify, options, done) => {
  fastify.get('/system', (request, reply) => {
    reply.send({
      enviroment: process.env.NODE_ENV,
      config: omit(config, [
        'auth.secret',
        'db.fullvision.connection.user',
        'db.plano.connection.user',
        'db.oftalmo.connection.user',
        'db.fullvision.connection.password',
        'db.plano.connection.password',
        'db.oftalmo.connection.password',
      ]),
      token: request.cookies.token || '',
    })
  })
  done()
}
