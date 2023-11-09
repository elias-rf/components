/**
 * @introduction Entrada para servidor de API da intranet
 *
 * @description usa fastify, trpc
 */

import { config } from '@/config'
import { app } from './app'

const start = async () => {
  try {
    await app.listen({ host: '0.0.0.0', port: config.app.port })
    console.log({
      db: {
        fullvision: config.db.fullvision.connection.host,
        oftalmo: config.db.oftalmo.connection.host,
        plano: config.db.plano.connection.host,
      },
    })
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

start()
