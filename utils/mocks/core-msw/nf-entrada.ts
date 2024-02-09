import { withRpcMethod } from '@/utils/mocks/core-msw/with-rpc-method.js'
import { HttpResponse, http } from 'msw'

const url = 'http://localhost:3333/api/rpc2'

export const nfEntradaHandlers = [
  http.post(
    url,
    withRpcMethod(
      { method: 'nfEntrada_transferenciaCreate' },
      async ({ request }) => {
        const body: any = await request.json()
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
