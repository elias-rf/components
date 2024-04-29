import { http, HttpResponse } from 'msw'
import { withRpcMethod } from '../../../utils/mocks/core-msw/with-rpc-method.mjs'

const url = 'http://localhost:3333/api/rpc2'

const data = [
  {
    kGrupo: 17,
    NomeGrupo: 'Diretoria',
  },
  {
    kGrupo: 18,
    NomeGrupo: 'Gestor Financeiro',
  },
  {
    kGrupo: 20,
    NomeGrupo: 'Auxiliar Qualidade',
  },
]

export const groupHandlers = [
  http.post(
    url,
    withRpcMethod({ method: 'group_list' }, async ({ request }) => {
      const body = await request.json()
      const response = {
        id: body.id,
        result: data,
      }
      return HttpResponse.json(response)
    })
  ),
]
