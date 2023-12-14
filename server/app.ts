import { config } from '@/config/index.js'
import { logger } from '@/server/lib/logger.js'
import { authMiddle } from '@/server/middles/auth-middle.js'
import { routes } from '@/server/routes/index.js'
import { deepCopy } from '@/utils/deep-copy.js'
import { pick } from '@/utils/object/pick.js'
import compression from 'compression'
import history from 'connect-history-api-fallback'
import cors from 'cors'
import express from 'express'
import { nanoid } from 'nanoid'
import * as path from 'path'
import { pinoHttp } from 'pino-http'
import * as url from 'url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
// const __filename = url.fileURLToPath(import.meta.url)

export const app = express()

app.map = (mapRoute: { [key: string]: any }, route: string) => {
  route = route || ''

  function getRoute(path: string, route: string) {
    if (path === '/') {
      return '/' + route
    }
    if (route.startsWith('/')) {
      return path + route
    }
    return path + '/' + route
  }

  for (const itemRoute in mapRoute) {
    switch (typeof mapRoute[itemRoute]) {
      // { '/path': { ... }}
      case 'object':
        app.map(mapRoute[itemRoute], getRoute(route, itemRoute))
        break
      // get: function(){ ... }
      case 'function':
        console.log('%s %s', itemRoute, route)
        app[itemRoute as 'get' | 'put' | 'post' | 'delete'](
          route,
          mapRoute[itemRoute]
        )
        break
      default:
        console.log('%s %s não reconhecido!', itemRoute, route)
        break
    }
  }
}

app.set('config', config)
app.use(cors()) // cliente não precisa de estar no mesmo endereço

app.use(
  history({
    verbose: true,
    index: '/index.html',
  })
)
app.use(compression()) // compressão de dados ao enviar para o cliente

app.use(express.static(path.join(__dirname, '../public'))) // pasta pública
app.use(express.json()) // decodifica body.json
app.use(express.urlencoded({ extended: false })) // decodifica query
app.use(
  pinoHttp({
    logger,
    genReqId: () => nanoid(),
    serializers: {
      res(res) {
        return {
          statusCode: res.statusCode,
        }
      },
      req(req) {
        if (req.method === 'OPTION') return { method: req.method }
        let body = deepCopy(req.raw.body)
        if (body) {
          if (body.params && body.params.password) {
            body.params.password = '********'
          }
          delete body.jsonrpc
          delete body.id
        }
        const response = {
          id: req.id,
          method: req.method,
          url: req.url,
          path: req.path,
          parameters: req.parameters,
          user: req.headers.user,
          origin: req.headers.origin,
          rpc: body.method,
          params: body.params,
        }
        return response
      },
    },
  })
)
app.use(authMiddle)
app.map(routes)

// const envToLogger = {
//   development: {
//     transport: {
//       target: 'pino-pretty',
//       options: {
//         translateTime: 'HH:MM:ss Z',
//         ignore: 'pid,hostname',
//         colorize: true,
//       },
//     },
//     serializers: {
//       res(res: any) {
//         // The default
//         return {
//           statusCode: res.statusCode,
//         }
//       },
//       req(req: any) {
//         if (req.method === 'OPTION') return { method: req.method }
//         return {
//           method: req.method,
//           url: req.url,
//           path: req.path,
//           parameters: req.parameters,
//           headers: pick(req.headers, ['origin', 'user']),
//         }
//       },
//     },
//   },
//   production: {
//     // transport: {
//     //   target: path.join(__dirname, 'lib/db-transport.js'),
//     // },
//   },
//   test: false,
// }

// const environment: string = process.env.NODE_ENV || 'production'

// export const app = Fastify({
//   maxParamLength: 5000,
//   genReqId: () => nanoid(),
//   logger: envToLogger[environment as keyof typeof envToLogger] ?? true,
// })
