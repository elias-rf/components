import { http, HttpResponse } from 'msw'
import { query } from './util.mjs'
import { withRpcMethod } from './with-rpc-method.mjs'

const url = 'http://localhost:3333/api/rpc2'

let data = [
  {
    id: 100,
    nome: 'Brenda Gomes',
    setor: 'Comercial',
    email: 'brenda.gomes@visiontech.com.br',
  },
  {
    id: 101,
    nome: 'Vago',
    setor: 'Dev',
    email: '',
  },
  {
    id: 102,
    nome: 'Ana Ferreira',
    setor: 'Comercial',
    email: 'ana.ferreira@visiontech.com.br',
  },
]

export const agendaTelefoneHandlers = [
  http.post(
    url,
    withRpcMethod({ method: 'agendaTelefone_list' }, async ({ request }) => {
      const body = await request.json()
      const result = query(data, body.params)
      const response = { jsonrpc: '2.0', id: body.id, result }
      return HttpResponse.json(response)
    })
  ),

  http.post(
    url,
    withRpcMethod({ method: 'agendaTelefone_read' }, async ({ request }) => {
      const body = await request.json()
      const result = query(data, body.params)[0] || {}

      const response = { jsonrpc: '2.0', id: body.id, result }
      return HttpResponse.json(response)
    })
  ),

  http.post(
    url,
    withRpcMethod({ method: 'agendaTelefone_update' }, async ({ request }) => {
      const body = await request.json()
      const recordIndex = data.findIndex(
        (item) => item.id == body.params.where[0][1]
      )
      data[recordIndex] = {
        ...data[recordIndex],
        ...body.params.data,
      }

      const response = {
        jsonrpc: '2.0',
        id: body.id,
        result: data[recordIndex],
      }
      return HttpResponse.json(response)
    })
  ),

  http.post(
    url,
    withRpcMethod({ method: 'agendaTelefone_del' }, async ({ request }) => {
      const body = await request.json()
      data = data.filter((item) => item.id !== body.params.where[0][1])

      const response = { jsonrpc: '2.0', id: body.id, result: 1 }
      return HttpResponse.json(response)
    })
  ),

  http.post(
    url,
    withRpcMethod({ method: 'agendaTelefone_create' }, async ({ request }) => {
      const body = await request.json()
      data.push(body.params.data)

      const response = { jsonrpc: '2.0', id: body.id, result: body.params.data }
      return HttpResponse.json(response)
    })
  ),
]
