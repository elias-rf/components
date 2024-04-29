import * as v from 'valibot'
import { formatMoney } from '../../../utils/format/format-money.mjs'

export const vendaMensalValor =
  ({ nfSaidaController }) =>
  async (args) => {
    v.parse(
      v.object({
        inicio: v.nonOptional(
          v.string([v.isoDate('data inicial inválida')]),
          'inicio deve ser informado'
        ),
        fim: v.nonOptional(
          v.string([v.isoDate('data final inválida')]),
          'fim deve ser informado'
        ),
        clienteId: v.nonOptional(
          v.union(
            [v.number(), v.string()],
            'cliente deve ser number ou string'
          ),
          'cliente deve ser informado'
        ),
      }),
      args
    )

    const data = await nfSaidaController.nfSaida_vendaMensalCliente(args)

    const rsp = {}
    data.forEach(({ anoMes, NmCategoria, valor }) => {
      rsp[NmCategoria] = rsp[NmCategoria] || {}
      rsp[NmCategoria][anoMes] = formatMoney(valor, 0)
    })
    const resp = []
    for (const item in rsp) {
      resp.push({ categoria: item, ...rsp[item] })
    }
    return resp
  }
