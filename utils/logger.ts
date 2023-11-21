// this is the logger for the browser
import { pino } from 'pino'

export const pinoLogger = pino({
  name: 'intranet',
})

export function logger(args: any) {
  pinoLogger.info(args)
}

logger.info = (args: any) => {
  pinoLogger.info(args)
}
logger.fatal = (args: any) => {
  pinoLogger.fatal(args)
}
logger.error = (args: any) => {
  pinoLogger.error(args)
}
logger.warn = (args: any) => {
  pinoLogger.warn(args)
}
logger.debug = (args: any) => {
  pinoLogger.debug(args)
}
logger.trace = (args: any) => {
  pinoLogger.trace(args)
}
