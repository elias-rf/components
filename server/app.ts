import { config } from '@/config/index.js'
import { authMiddle } from '@/server/middles/auth-middle.js'
import { loggerMiddle } from '@/server/middles/logger-middle.js'
import { routes } from '@/server/routes/index.js'
import compression from 'compression'
import history from 'connect-history-api-fallback'
import cors from 'cors'
import express from 'express'
import * as path from 'path'
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
    verbose: false,
    index: '/index.html',
  })
)
app.use(compression()) // compressão de dados ao enviar para o cliente

app.use(express.static(path.join(__dirname, '../public'))) // pasta pública
app.use(express.json()) // decodifica body.json
app.use(express.urlencoded({ extended: false })) // decodifica query
app.use(loggerMiddle)
app.use(authMiddle)
app.map(routes)
