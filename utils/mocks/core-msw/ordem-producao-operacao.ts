import { withRpcMethod } from '@/utils/mocks/core-msw/with-rpc-method.js'
import { http, HttpResponse } from 'msw'

const url = 'http://localhost:3333/api/rpc2'

export const ordemProducaoOperacaoHandlers = [
  http.post(
    url,
    withRpcMethod(
      { method: 'ordemProducaoOperacao_diario' },
      async ({ request }) => {
        const body: any = await request.json()
        const params = body.params
        const response = [
          {
            dia: params.inicio,
            dia_semana: 'qua',
            quantidade: 10,
          },
        ]
        return HttpResponse.json(response)
      }
    )
  ),
  http.post(
    url,
    withRpcMethod(
      { method: 'ordemProducaoOperacao_mensal' },
      async ({ request }) => {
        const body: any = await request.json()
        const params = body.params
        const response = [
          {
            mes: params.mes,
            quantidade: 10,
          },
        ]
        return HttpResponse.json(response)
      }
    )
  ),
  http.post(
    url,
    withRpcMethod(
      { method: 'ordemProducaoOperacao_modelo' },
      async ({ request }) => {
        const body: any = await request.json()
        const response = [
          {
            modelo: 'Modelo 1',
            quantidade: 10,
          },
          {
            modelo: 'Modelo 2',
            quantidade: 20,
          },
        ]
        return HttpResponse.json(response)
      }
    )
  ),
  http.post(
    url,
    withRpcMethod(
      { method: 'ordemProducaoOperacao_produto' },
      async ({ request }) => {
        const body: any = await request.json()
        const response = [
          {
            produto: 'Produto 1',
            quantidade: 10,
          },
        ]
        return HttpResponse.json(response)
      }
    )
  ),
  http.post(
    url,
    withRpcMethod(
      { method: 'ordemProducaoOperacao_turno' },
      async ({ request }) => {
        const body: any = await request.json()
        const response = [
          {
            turno: 'Manha',
            quantidade: 10,
          },
          {
            turno: 'Tarde',
            quantidade: 20,
          },
        ]
        return HttpResponse.json(response)
      }
    )
  ),
]
