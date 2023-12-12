// fastify-jwt.d.ts
import { config } from '@/config/index.js'
import { pick } from '@/utils/object/pick.js'
import cookie from '@fastify/cookie'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import staticFiles from '@fastify/static'
import Fastify from 'fastify'
import { nanoid } from 'nanoid'
import path from 'node:path'
import * as url from 'url'
import { routes } from './routes/index.js'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
// const __filename = url.fileURLToPath(import.meta.url)

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
      target: path.join(__dirname, 'lib/db-transport.js'),
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
    if (
      typeof req.body === 'string' &&
      (req.body as string).includes('usuario/login')
    ) {
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
