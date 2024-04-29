import * as v from 'valibot'

export const vendaMensalQuantidade =
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
    data.forEach(({ anoMes, NmCategoria, quantidade }) => {
      rsp[NmCategoria] = rsp[NmCategoria] || {}
      rsp[NmCategoria][anoMes] = quantidade
    })
    const resp = []
    for (const item in rsp) {
      const it = {
        ...rsp[item],
        categoria: item,
      }
      resp.push(it)
    }
    return resp
  }
