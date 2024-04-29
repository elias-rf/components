import { http, HttpResponse } from 'msw'
import { withRpcMethod } from '../../../utils/mocks/core-msw/with-rpc-method.mjs'

const url = 'http://localhost:3333/api/rpc2'

export const esterilizacaoInternaHandlers = [
  http.post(
    url,
    withRpcMethod(
      { method: 'esterilizacaoInterna_diario' },
      async ({ request }) => {
        const body = await request.json()
        const params = body.params
        const response = {
          id: body.id,
          result: [
            {
              dia: params.inicio,
              dia_semana: 'qua',
              quantidade: 10,
            },
          ],
        }
        return HttpResponse.json(response)
      }
    )
  ),
  http.post(
    url,
    withRpcMethod(
      { method: 'esterilizacaoInterna_mensal' },
      async ({ request }) => {
        const body = await request.json()
        const params = body.params
        const response = {
          id: body.id,
          result: [
            {
              mes: params.mes,
              quantidade: 10,
            },
          ],
        }
        return HttpResponse.json(response)
      }
    )
  ),
  http.post(
    url,
    withRpcMethod(
      { method: 'esterilizacaoInterna_modelo' },
      async ({ request }) => {
        const body = await request.json()
        const response = {
          id: body.id,
          result: [
            {
              modelo: 'Modelo 1',
              quantidade: 10,
            },
            {
              modelo: 'Modelo 2',
              quantidade: 20,
            },
          ],
        }
        return HttpResponse.json(response)
      }
    )
  ),
  http.post(
    url,
    withRpcMethod(
      { method: 'esterilizacaoInterna_produto' },
      async ({ request }) => {
        const body = await request.json()
        const response = {
          id: body.id,
          result: [
            {
              produto: 'Produto 1',
              quantidade: 10,
            },
          ],
        }
        return HttpResponse.json(response)
      }
    )
  ),
]
