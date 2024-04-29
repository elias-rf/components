import { rpcServer } from '../core/index.mjs'

export const rpcRoute = {
  post: async (req, res) => {
    const jsonRPCRequest = req.body

    const context = {
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
