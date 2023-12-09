import { config } from '@/config/index.js'
import { omit } from '@/utils/object/omit.js'
import { FastifyPluginCallback } from 'fastify'

const roots = {
  documents: 'Users/eliasribeiro/Documents',
  downloads: 'Users/eliasribeiro/Downloads',
}

export const fileManagerRoute: FastifyPluginCallback = (
  fastify,
  options,
  done
) => {
  fastify.get('/filemanager', (request, reply) => {
    reply.send(roots)
  })
  done()
}
