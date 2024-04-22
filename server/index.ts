/**
 * @introduction Entrada para servidor de API da intranet
 *
 * @description usa fastify, trpc
 */

import { config } from '@/utils/config/index.mjs'
import { app } from './app.js'
import { logger } from './lib/logger.js'

// start()
app.disable('x-powered-by')

app.listen({ port: config.app.port })
logger.info(`🚀 Server ready at http://localhost:${config.app.port}`)
