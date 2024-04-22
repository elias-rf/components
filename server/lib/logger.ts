import { config } from '@/utils/config/index.mjs'
import winston from 'winston'

const { combine, timestamp, json, printf } = winston.format
const timestampFormat = 'YYYY-MM-DD HH:mm:ss'

// Logger for API endpoints
export const logger = winston.createLogger({
  format: combine(
    timestamp({ format: timestampFormat }),
    json(),
    printf(({ timestamp, level, message, ...data }) => {
      const response = {
        level,
        timestamp,
        message,
        data,
      }
      if (config.app.env === 'development') {
        return JSON.stringify(response, null, 2)
      }
      return JSON.stringify(response)
    })
  ),
  transports: [new winston.transports.Console()],
})
