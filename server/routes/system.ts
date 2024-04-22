import { config } from '@/utils/config/index.mjs'
import { Request, Response } from 'express'
import * as _ from 'lodash-es'

export const systemRoute = {
  get: (req: Request, res: Response) => {
    res.send({
      enviroment: process.env.NODE_ENV,
      config: _.omit(config, [
        'auth.secret',
        'db.fullvision.connection.user',
        'db.plano.connection.user',
        'db.oftalmo.connection.user',
        'db.fullvision.connection.password',
        'db.plano.connection.password',
        'db.oftalmo.connection.password',
      ]),
      token: req.cookies.token || '',
    })
  },
}
