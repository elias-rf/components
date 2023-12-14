import { registerController, type TModules } from '@/controllers/index.js'
import { RequestAuth } from '@/server/middles/auth-middle.js'
import { Response } from 'express'
import {
  JSONRPCRequest,
  JSONRPCServer,
  type TypedJSONRPCServer,
} from 'json-rpc-2.0'

const server: TypedJSONRPCServer<TModules> = new JSONRPCServer()
registerController(server)

export const rpcRoute = {
  post: async (req: RequestAuth, res: Response) => {
    const jsonRPCRequest = req.body as JSONRPCRequest

    const context: any = {
      request: req,
      reply: res,
      user: req.auth,
    }

    const jsonRPCResponse = await server.receive(jsonRPCRequest, context)
    if (jsonRPCResponse) {
      res.send(jsonRPCResponse)
    } else {
      res.send(204)
    }
  },
}
