import { format, isBefore, parse, subDays } from 'date-fns'
import { HttpResponse, http } from 'msw'
import { withRpcMethod } from '../../../utils/mocks/core-msw/with-rpc-method.mjs'

const url = 'http://localhost:3333/api/rpc2'

export const nfSaidaHandlers = [
  http.post(
    url,
    withRpcMethod(
      { method: 'nfSaida_transferenciaDiario' },
      async ({ request }) => {
        const body = await request.json()
        const params = body.params
        const response = {
          id: body.id,
          result: [
            {
              dia: params.fim,
              dia_semana: 'qua',
              LITEFLEX: 10,
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
      { method: 'nfSaida_transferenciaMensal' },
      async ({ request }) => {
        const body = await request.json()
        const params = body.params
        const response = {
          id: body.id,
          result: [
            {
              mes: params.mes,
              LITEFLEX: 10,
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
      { method: 'nfSaida_transferenciaModelo' },
      async ({ request }) => {
        const body = await request.json()
        const params = body.params
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
    withRpcMethod({ method: 'nfSaida_vendaDiario' }, async ({ request }) => {
      const body = await request.json()
      const params = body.params
      const result = []
      let dia = parse(params.fim, 'yyyy-MM-dd', new Date())
      do {
        result.push({
          DtEmissao: format(dia, 'yyyy-MM-dd'),
          NmCategoria: 'LITEFLEX',
          quantidade: 10 + Math.round(Math.random() * 10),
          valor: 1000,
        })
        result.push({
          DtEmissao: format(dia, 'yyyy-MM-dd'),
          NmCategoria: 'ENLITE',
          quantidade: 20 + Math.round(Math.random() * 10),
          valor: 3000,
        })
        dia = subDays(dia, 1)
      } while (isBefore(parse(params.inicio, 'yyyy-MM-dd', new Date()), dia))
      const response = {
        id: body.id,
        result,
      }
      return HttpResponse.json(response)
    })
  ),
]
