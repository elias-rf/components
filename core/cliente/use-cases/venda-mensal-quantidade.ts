import { TModules } from '@/core/index.js'
import { TNfSaidaController } from '@/core/nf-saida/nf-saida.controller.js'
import * as v from 'valibot'

type TVendaMensal = {
  categoria: any
  [month: string]: any
}

type TVendaMensalQuantidade = (args: {
  inicio: string
  fim: string
  clienteId: number
}) => Promise<TVendaMensal[]>

export const vendaMensalQuantidade =
  ({
    nfSaidaController,
  }: {
    nfSaidaController: TNfSaidaController
  }): TVendaMensalQuantidade =>
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

    const rsp = {} as {
      [category: string]: {
        [month: string]: number
      }
    }
    data.forEach(
      ({
        anoMes,
        NmCategoria,
        quantidade,
      }: {
        anoMes: string
        NmCategoria: string
        quantidade: number
        // valor: number
      }) => {
        rsp[NmCategoria] = rsp[NmCategoria] || {}
        rsp[NmCategoria][anoMes] = quantidade
      }
    )
    const resp = [] as TVendaMensal[]
    for (const item in rsp) {
      const it = {
        ...rsp[item],
        categoria: item,
      }
      resp.push(it)
    }
    return resp as TVendaMensal[]
  }
