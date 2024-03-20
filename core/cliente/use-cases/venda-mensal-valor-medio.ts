import { TModules } from '@/core/index.js'
import { TNfSaidaController } from '@/core/nf-saida/nf-saida_controller.js'
import { TDataSource } from '@/data/index.js'
import { formatMoney } from '@/utils/format/format-money.js'
import * as v from 'valibot'

type TVendaMensal = {
  categoria: any
  [month: string]: any
}

type TVendaMensalValorMedio = (args: {
  inicio: string
  fim: string
  clienteId: number
}) => Promise<TVendaMensal[]>

export const vendaMensalValorMedio =
  ({
    nfSaidaController,
  }: {
    nfSaidaController: TNfSaidaController
  }): TVendaMensalValorMedio =>
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
        [month: string]: string
      }
    }
    data.forEach(
      ({
        anoMes,
        NmCategoria,
        valor,
        quantidade,
      }: {
        anoMes: string
        NmCategoria: string
        quantidade: number
        valor: number
      }) => {
        rsp[NmCategoria] = rsp[NmCategoria] || {}
        rsp[NmCategoria][anoMes] =
          quantidade > 0 ? formatMoney(valor / quantidade, 2) : '0,00'
      }
    )
    const resp = []
    for (const item in rsp) {
      resp.push({ categoria: item, ...rsp[item] })
    }
    return resp as TVendaMensal[]
  }
