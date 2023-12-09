/**
 * @introduction Entrada para servidor de API da intranet
 *
 * @description usa fastify, trpc
 */

import { config } from '@/config/index.js'
import { omit } from '@/utils/object/omit.js'
import { app } from './app.js'

const start = async () => {
  try {
    await app.listen({ host: '0.0.0.0', port: config.app.port })
    console.log(
      JSON.stringify(
        omit(config, [
          'auth.secret',
          'db.fullvision.connection.user',
          'db.plano.connection.user',
          'db.oftalmo.connection.user',
          'db.fullvision.connection.password',
          'db.plano.connection.password',
          'db.oftalmo.connection.password',
        ]),
        null,
        2
      )
    )
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

start()
