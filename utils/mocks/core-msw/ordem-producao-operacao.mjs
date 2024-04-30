import { http, HttpResponse } from 'msw'
import { withRpcMethod } from '../../../utils/mocks/core-msw/with-rpc-method.mjs'

const url = 'http://localhost:3333/api/rpc2'

export const ordemProducaoOperacaoHandlers = [
  http.post(
    url,
    withRpcMethod(
      { method: 'ordemProducaoOperacao_diario' },
      async ({ request }) => {
        const body = await request.json()
        const params = body.params
        const response = {
          jsonrpc: '2.0',
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
      { method: 'ordemProducaoOperacao_mensal' },
      async ({ request }) => {
        const body = await request.json()
        const params = body.params
        const response = {
          jsonrpc: '2.0',
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
      { method: 'ordemProducaoOperacao_modelo' },
      async ({ request }) => {
        const body = await request.json()
        const response = {
          jsonrpc: '2.0',
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
      { method: 'ordemProducaoOperacao_produto' },
      async ({ request }) => {
        const body = await request.json()
        const response = {
          jsonrpc: '2.0',
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
  http.post(
    url,
    withRpcMethod(
      { method: 'ordemProducaoOperacao_turno' },
      async ({ request }) => {
        const body = await request.json()
        const response = {
          jsonrpc: '2.0',
          id: body.id,
          result: [
            {
              turno: 'Manha',
              quantidade: 10,
            },
            {
              turno: 'Tarde',
              quantidade: 20,
            },
          ],
        }
        return HttpResponse.json(response)
      }
    )
  ),
]
