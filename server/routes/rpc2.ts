import { rpcServer } from '@/core/index.js'
import { RequestAuth } from '@/server/middles/auth-middle.js'
import { TCurrentUser } from '@/types/index.js'
import { Response } from 'express'
import { JSONRPCRequest } from 'json-rpc-2.0'

export type TRpcContext = {
  req: RequestAuth
  res: Response
  user: TCurrentUser & { iat?: number; exp?: number }
}

export const rpcRoute = {
  post: async (req: RequestAuth, res: Response) => {
    const jsonRPCRequest = req.body as JSONRPCRequest

    const context: any = {
      req,
      res,
      user: req.auth,
    }

    const jsonRPCResponse = await rpcServer.receive(jsonRPCRequest, context)
    if (jsonRPCResponse) {
      res.send(jsonRPCResponse)
    } else {
      res.send(204)
    }
  },
}
