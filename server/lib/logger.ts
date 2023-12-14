import { config } from '@/config/index.js'
import { pino } from 'pino'

export let logger = pino()

if (config.app.env === 'development') {
  const transport = pino.transport({
    target: 'pino-pretty',
    options: {
      translateTime: 'HH:MM:ss Z',
      ignore: 'pid,hostname',
      colorize: true,
    },
  })
  logger = pino(transport)
}
