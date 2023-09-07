import { createPrimClient } from '@doseofted/prim-rpc'
import { createMethodPlugin } from '@doseofted/prim-rpc-plugins/browser'
import type { TModule } from '@/controllers'

let endpoint = '/api/rpc'

if (process.env.NODE_ENV === 'development')
  endpoint = 'http://localhost:3333/api/rpc'

export const prim = createPrimClient<TModule>({
  endpoint,
  methodPlugin: createMethodPlugin(),
})
