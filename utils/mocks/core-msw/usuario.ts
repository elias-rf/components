import { withRpcMethod } from '@/utils/mocks/core-msw/with-rpc-method.js'
import { http, HttpResponse } from 'msw'
import { query } from './util.js'

const url = 'http://localhost:3333/api/rpc2'

let data = [
  {
    kUsuario: 1,
    nome: 'fulano',
    NomeUsuario: 'FULANO',
    setor: '0',
  },
  {
    kUsuario: 2,
    nome: 'beltrano',
    NomeUsuario: 'BELTRANO',
    setor: '42,20,0',
  },
  {
    kUsuario: 3,
    nome: 'sicrano',
    NomeUsuario: 'SICRANO',
    setor: '42,20',
  },
]

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
const user = {
  usuario_id: 1,
  nome_login: 'fulano',
  nome: 'FULANO',
  group_ids: '42,20,0',
  token,
}

export const usuarioHandlers = [
  http.post(
    url,
    withRpcMethod({ method: 'usuario_list' }, async ({ request }) => {
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
    withRpcMethod({ method: 'usuario_read' }, async ({ request }) => {
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
    withRpcMethod({ method: 'usuario_me' }, async ({ request }) => {
      const body: any = await request.json()
      const response = { id: body.id, result: user }
      return HttpResponse.json(response)
    })
  ),

  http.post(
    url,
    withRpcMethod(
      { method: 'usuario_login', params: { user: 'sicrano' } },
      async ({ request }) => {
        const body: any = await request.json()
        const response = { id: body.id, result: user }
        response.result.group_ids = '42,20'
        response.result.nome_login = 'sicrano'
        return HttpResponse.json(response)
      }
    )
  ),

  http.post(
    url,
    withRpcMethod({ method: 'usuario_login' }, async ({ request }) => {
      const body: any = await request.json()
      const response = { id: body.id, result: user }
      return HttpResponse.json(response)
    })
  ),
]
