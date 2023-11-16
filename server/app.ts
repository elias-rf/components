// fastify-jwt.d.ts
import { config } from '@/config'
// import { __dirname } from '@/utils/dirname'
import { pick } from '@/utils/object/pick'
import cookie from '@fastify/cookie'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import staticFiles from '@fastify/static'
import Fastify from 'fastify'
import { nanoid } from 'nanoid'
import path from 'node:path'
import { routes } from './routes'

// __dirname(import.meta)

const envToLogger = {
  development: {
    transport: {
      target: 'pino-pretty',

      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
        colorize: true,
      },
    },
    serializers: {
      res(res: any) {
        // The default
        return {
          statusCode: res.statusCode,
        }
      },
      req(req: any) {
        if (req.method === 'OPTION') return { method: req.method }
        return {
          method: req.method,
          url: req.url,
          path: req.path,
          parameters: req.parameters,
          headers: pick(req.headers, ['origin', 'user']),
        }
      },
    },
  },
  production: {
    transport: {
      target: path.join(__dirname, 'lib/db-transport'),
    },
  },
  test: false,
}

const environment: string = process.env.NODE_ENV || 'production'

export const app = Fastify({
  maxParamLength: 5000,
  genReqId: () => nanoid(),
  logger: envToLogger[environment as keyof typeof envToLogger] ?? true,
})

app.register(cors, { origin: '*' })
app.register(cookie)
app.register(jwt, {
  secret: config.auth.secret,
  sign: { expiresIn: config.auth.expiration },
  cookie: {
    cookieName: 'token',
    signed: false,
  },
})
app.register(staticFiles, {
  root: path.join(__dirname, '../public'),
})

app.addHook('preHandler', function (req, reply, done) {
  if (req.body) {
    if ((req.body as string).includes('usuario/login')) {
      const body = JSON.parse(req.body as string)
      body.args.password = '***'
      req.log.info({ body }, 'parsed body for login')
    } else {
      req.log.info({ body: req.body }, 'parsed body')
    }
  }
  done()
})

app.addHook('onRequest', async (request) => {
  try {
    await request.jwtVerify()
  } catch (err) {
    // app.log.error(err);
    // mesmo com erro deve prosseguir
  }
})

app.register(routes)
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname(import.meta.url), './public', 'index.html'))
// })
