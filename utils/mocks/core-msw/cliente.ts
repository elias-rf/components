import { withRpcMethod } from '@/utils/mocks/core-msw/with-rpc-method.js'
import { http, HttpResponse } from 'msw'
import { query } from './util.js'

const url = 'http://localhost:3333/api/rpc2'

let data = [
  {
    CdCliente: 100,
    RzSocial: 'Fulano de tal',
    Cidade: 'São Paulo',
    Uf: 'SP',
    CGC: '10.100.100/0001-01',
    CdVendedor: '10',
    FgAtivo: 'S',
    EMail: 'fulano@example.com',
    NumIdentidade: '123456789',
    DtCadastro: '2020-01-01',
  },
  {
    CdCliente: 200,
    RzSocial: 'Beltrano de tal',
    Cidade: 'Belo Horizonte',
    Uf: 'BH',
    CGC: '20.200.200/0001-01',
    CdVendedor: '10',
    FgAtivo: 'S',
    EMail: 'beltrano@example.com',
    NumIdentidade: '123456789',
    DtCadastro: '2021-01-01',
  },
  {
    CdCliente: 300,
    RzSocial: 'Sicrano de tal',
    Cidade: 'Rio de Janeiro',
    Uf: 'RJ',
    CGC: '30.300.300/0001-01',
    CdVendedor: '20',
    FgAtivo: 'S',
    EMail: 'sicrano@example.com',
    NumIdentidade: '123456789',
    DtCadastro: '2022-01-01',
  },
]

export const clienteHandlers = [
  http.post(
    url,
    withRpcMethod({ method: 'cliente_list' }, async ({ request }) => {
      const body: any = await request.json()
      const result = query(data, body.params)
      const response = {
        id: body.id,
        result,
      }
      return HttpResponse.json(response)
    })
  ),

  http.post(
    url,
    withRpcMethod({ method: 'cliente_read' }, async ({ request }) => {
      const body: any = await request.json()
      const result = query(data, body.params)[0] || {}

      const response = {
        id: body.id,
        result,
      }
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
