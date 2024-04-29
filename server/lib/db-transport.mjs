import { format } from 'date-fns'
import { logController } from '../../../core/log/log_controller.mjs'

const log = {}

// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

/* eslint-env browser */

export default async function dbTransport() {
  async function insertLogs(logs) {
    try {
      if (logs.msg === 'incoming request') {
        const dateTime = new Date(logs.time)
        log[logs.reqId] = {
          method: logs.req.method,
          reqId: logs.reqId,
          date: format(dateTime, 'YYYY-MM-DD'),
          time: format(dateTime, 'HH:mm:ss'),
          user: logs.req.headers?.user || 0,
          origin: logs.req.headers.origin,
        }
      }
      if (logs.msg === 'parsed body') {
        const body = JSON.parse(logs.body)

        log[logs.reqId].method = body.method
        log[logs.reqId].args = JSON.stringify(body.args)
      }
      if (logs.msg === 'request completed') {
        log[logs.reqId].responseTime = logs.responseTime
        log[logs.reqId].status = logs.res.statusCode
        if (!['GET', 'POST', 'OPTIONS'].includes(log[logs.reqId].method)) {
          await logController.log_create({ data: log[logs.reqId] })
        }
        delete log[logs.reqId]
      }
    } catch (e) {
      console.error(e)
    }
  }
}
