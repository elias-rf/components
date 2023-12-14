import { logger } from '@/server/lib/logger.js'
import { NextFunction, Request, Response } from 'express'
import { nanoid } from 'nanoid'

const sensitiveKeysList = ['password', 'newPassword']

const redactLogData = (data: any): any => {
  if (
    typeof data === 'object' &&
    data !== null &&
    !data.constructor.name.startsWith('model')
  ) {
    if (Array.isArray(data)) {
      return data.map((item) => redactLogData(item))
    }

    const redactedData: any = {}

    for (const key in data) {
      if (sensitiveKeysList.includes(key)) {
        redactedData[key] = '***' // replace password with *
      } else {
        // Recursively redact sensitive keys within nested objects
        redactedData[key] = redactLogData(data[key])
      }
    }

    return redactedData
  } else {
    return data
  }
}

export const loggerMiddle = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const originalSend = res.send
  let responseSent = false
  ;(req as any).requestStartTime = Date.now()
  ;(req as any).id = nanoid()

  res.send = function (body: any): Response {
    if (!responseSent) {
      const request: any = {
        id: (req as any).id,
        authorization: req.headers.authorization,
        user: req.headers.user,
        host: req.headers.host,
        // baseUrl: req.baseUrl,
        url: req.url,
        method: req.method,
        body: redactLogData(req.body),
        // params: req?.params,
        // query: req?.query,
        clientIp: req?.headers['x-forwarded-for'] ?? req?.socket.remoteAddress,
      }
      const response: any = {
        // headers: res.getHeaders(),
        statusCode: res.statusCode,
      }
      if (body && body.error) response.error = body.error

      if (res.statusCode < 400 && !body.error) {
        logger.info('success', {
          request,
          response,
          requestDuration: Date.now() - (req as any).requestStartTime,
        })
      } else {
        logger.error(body.message, {
          request,
          response,
        })
      }
      responseSent = true
    }

    // Call the original response method
    return originalSend.call(this, body)
  }

  next()
}
