import { nanoid } from 'nanoid'
import { logger } from '../lib/logger.mjs'

const sensitiveKeysList = ['password', 'newPassword']

const redactLogData = (data) => {
  if (
    typeof data === 'object' &&
    data !== null &&
    !data.constructor.name.startsWith('model')
  ) {
    if (Array.isArray(data)) {
      return data.map((item) => redactLogData(item))
    }

    const redactedData = {}

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

export const loggerMiddle = (req, res, next) => {
  const originalSend = res.send
  let responseSent = false
  req.requestStartTime = Date.now()
  req.id = nanoid()

  res.send = function (body) {
    if (!responseSent) {
      const request = {
        id: req.id,
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
      const response = {
        // headers: res.getHeaders(),
        statusCode: res.statusCode,
      }
      if (body && body.error) response.error = body.error

      if (res.statusCode < 400 && !body.error) {
        logger.info('success', {
          request,
          response,
          requestDuration: Date.now() - req.requestStartTime,
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
