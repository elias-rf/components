/**
 * @introduction Entrada para servidor de API da intranet
 *
 * @description usa fastify, trpc
 */

import { app } from './app.mjs'
import { config } from './config/index.mjs'
import { logger } from './lib/logger.mjs'

// start()
app.disable('x-powered-by')

app.listen({ port: config.app.port })
logger.info(`🚀 Server ready at http://localhost:${config.app.port}`)
