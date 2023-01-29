// this is the logger for the browser
import pino from "pino";

export const pinoLogger = pino({
  name: "intranet",
});

export function logger(args: any) {
  pinoLogger.info(args);
}
