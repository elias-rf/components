import type { TModule } from '@/controllers'
import { createPrimClient } from '@doseofted/prim-rpc'
import { createMethodPlugin } from './plugins/browser-fetch'

let endpoint = '/api/rpc'

if (process.env.NODE_ENV === 'development')
  endpoint = 'http://localhost:3333/api/rpc'

export const rpc = createPrimClient<TModule>({
  endpoint,
  methodPlugin: createMethodPlugin({
    headers: () => {
      const auth = JSON.parse(
        sessionStorage.getItem('auth') || '{"state":{"token":"","user":{}}}'
      )
      return {
        Authorization: `Bearer ${auth.state.token}`,
        user: auth.state.user.usuario_id,
      }
    },
  }),
})
