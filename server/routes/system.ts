import { config } from '@/utils/config/index.js'
import { omit } from '@/utils/object/omit.js'
import { Request, Response } from 'express'

export const systemRoute = {
  get: (req: Request, res: Response) => {
    res.send({
      enviroment: process.env.NODE_ENV,
      config: omit(config, [
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
