import {
  createPrimClient,
  createPrimServer,
  testing,
} from '@doseofted/prim-rpc'
import { module, TModule } from '@/controllers'

const plugins = testing.createPrimTestingPlugins()

const { callbackHandler, methodHandler } = plugins
export const serverMock = createPrimServer({
  module,
  callbackHandler,
  methodHandler,
})

const { methodPlugin, callbackPlugin } = plugins
export const clientMock = createPrimClient<TModule>({
  callbackPlugin,
  methodPlugin,
})
