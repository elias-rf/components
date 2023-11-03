// fastify-jwt.d.ts
import { config } from '@/config'
import { __dirname } from '@/utils/dirname'
import cookie from '@fastify/cookie'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import staticFiles from '@fastify/static'
import Fastify from 'fastify'
import path from 'node:path'
import { routes } from './routes'

const envToLogger = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
  production: true,
  test: false,
}

const environment: string = process.env.NODE_ENV || 'production'

export const app = Fastify({
  maxParamLength: 5000,
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
  root: path.join(__dirname(import.meta.url), '../public'),
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
