import { withRpcMethod } from '@/utils/mocks/core-msw/with-rpc-method.js'
import { http, HttpResponse } from 'msw'
import { query } from './util.js'

const url = 'http://localhost:3333/api/rpc2'

let data = [
  {
    id: 100,
    razaoSocial: 'Fulano de tal',
    cidade: 'São Paulo',
    uf: 'SP',
    cnpj: '10.100.100/0001-01',
    vendedorId: '10',
    ativo: 'S',
    email: 'fulano@example.com',
    cadastroData: '2020-01-01',
  },
  {
    id: 200,
    razaoSocial: 'Beltrano de tal',
    cidade: 'Belo Horizonte',
    uf: 'BH',
    cnpj: '20.200.200/0001-01',
    vendedorId: '10',
    ativo: 'S',
    email: 'beltrano@example.com',
    cadastroData: '2021-01-01',
  },
  {
    id: 300,
    razaoSocial: 'Sicrano de tal',
    cidade: 'Rio de Janeiro',
    uf: 'RJ',
    cnpj: '30.300.300/0001-01',
    vendedorId: '20',
    ativo: 'S',
    email: 'sicrano@example.com',
    cadastroData: '2022-01-01',
  },
]

export const clienteHandlers = [
  http.post(
    url,
    withRpcMethod({ method: 'cliente_list' }, async ({ request }) => {
      const body: any = await request.json()
      const result = query(data, body.params)
      const response = { jsonrpc: '2.0', id: body.id, result }
      return HttpResponse.json(response)
    })
  ),

  http.post(
    url,
    withRpcMethod({ method: 'cliente_read' }, async ({ request }) => {
      const body: any = await request.json()
      const result = query(data, body.params)[0] || {}

      const response = { jsonrpc: '2.0', id: body.id, result }
      return HttpResponse.json(response)
    })
  ),

  http.post(
    url,
    withRpcMethod(
      { method: 'cliente_vendaMensalQuantidade' },
      async ({ request }) => {
        const body: any = await request.json()
        const params = body.params

        const response = {
          jsonrpc: '2.0',
          id: body.id,
          result: [
            {
              categoria: 'LITEFLEX',
              [params.inicio.substring(0, 7)]: params.cliente * 1,
            },
            {
              categoria: 'LITEFLEX',
              [params.fim.substring(0, 7)]: params.cliente * 2,
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
      { method: 'cliente_vendaMensalValor' },
      async ({ request }) => {
        const body: any = await request.json()
        const params = body.params
        const response = {
          jsonrpc: '2.0',
          id: body.id,
          result: [
            {
              categoria: 'LITEFLEX',
              [params.inicio.substring(0, 7)]: params.cliente * 10 + ',10',
            },
            {
              categoria: 'LITEFLEX',
              [params.fim.substring(0, 7)]: params.cliente * 20 + ',20',
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
      { method: 'cliente_vendaMensalValorMedio' },
      async ({ request }) => {
        const body: any = await request.json()
        const params = body.params
        const response = {
          jsonrpc: '2.0',
          id: body.id,
          result: [
            {
              categoria: 'LITEFLEX',
              [params.inicio.substring(0, 7)]: params.cliente * 1 + ',10',
            },
            {
              categoria: 'LITEFLEX',
              [params.fim.substring(0, 7)]: params.cliente * 2 + ',20',
            },
          ],
        }
        return HttpResponse.json(response)
      }
    )
  ),
]
