import { HttpResponse, http } from 'msw'
import { withRpcMethod } from '../../../utils/mocks/core-msw/with-rpc-method.mjs'

const url = 'http://localhost:3333/api/rpc2'

export const ordemProducaoHandlers = [
  http.post(
    url,
    withRpcMethod(
      { method: 'ordemProducao_ehControleValido' },
      async ({ request }) => {
        const body = await request.json()
        const params = body.params

        const response = { jsonrpc: '2.0', id: body.id, result: false }
        return HttpResponse.json(response)
      }
    )
  ),
]
