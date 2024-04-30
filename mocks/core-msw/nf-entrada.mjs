import { HttpResponse, http } from 'msw'
import { withRpcMethod } from '../../../utils/mocks/core-msw/with-rpc-method.mjs'

const url = 'http://localhost:3333/api/rpc2'

export const nfEntradaHandlers = [
  http.post(
    url,
    withRpcMethod(
      { method: 'nfEntrada_transferenciaCreate' },
      async ({ request }) => {
        const body = await request.json()
        const params = body.params

        const response = {
          id: body.id,
          result: false,
        }
        return HttpResponse.json(response)
      }
    )
  ),
]
