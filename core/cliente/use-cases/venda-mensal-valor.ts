import { TDataSource } from '@/data/index.js'
import { formatMoney } from '@/utils/format/format-money.js'
import * as v from 'valibot'

type TVendaMensal = {
  categoria: any
  [month: string]: any
}

type TVendaMensalValor = (args: {
  inicio: string
  fim: string
  cliente: number
}) => Promise<TVendaMensal[]>

export const vendaMensalValor =
  (dataSource: TDataSource['plano']['cliente']): TVendaMensalValor =>
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
        cliente: v.nonOptional(
          v.union(
            [v.number(), v.string()],
            'cliente deve ser number ou string'
          ),
          'cliente deve ser informado'
        ),
      }),
      args
    )

    const { nfSaidaController } = await import(
      '../../nf-saida/nf-saida_controller.js'
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
      }: {
        anoMes: string
        NmCategoria: string
        quantidade: number
        valor: number
      }) => {
        rsp[NmCategoria] = rsp[NmCategoria] || {}
        rsp[NmCategoria][anoMes] = formatMoney(valor, 0)
      }
    )
    const resp = []
    for (const item in rsp) {
      resp.push({ categoria: item, ...rsp[item] })
    }
    return resp as TVendaMensal[]
  }
