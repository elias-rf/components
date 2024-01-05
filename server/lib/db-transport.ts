import { logController } from '@/core/log_controller.js'
import { day } from '@/utils/date/day.js'

type TLog = {
  msg: string
  body: string
  time: number
  reqId: string
  res: { statusCode: number }
  responseTime: number
  req: {
    method: string
    url: string
    path: string
    parameters: any
    headers: any
    user: any
  }
}

const log: { [reqId: string]: any } = {}

// Copyright (c) TotalSoft.
// This source code is licensed under the MIT license.

/* eslint-env browser */

export default async function dbTransport() {
  async function insertLogs(logs: TLog) {
    try {
      if (logs.msg === 'incoming request') {
        const dateTime = day(logs.time)
        log[logs.reqId] = {
          method: logs.req.method,
          reqId: logs.reqId,
          date: dateTime.format('YYYY-MM-DD'),
          time: dateTime.format('HH:mm:ss'),
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
