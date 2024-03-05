import { TDataSource } from '@/data/index.js'
import * as v from 'valibot'

type TVendaMensal = {
  categoria: any
  [month: string]: any
}

type TVendaMensalQuantidade = (args: {
  inicio: string
  fim: string
  cliente: number
}) => Promise<TVendaMensal[]>

export const vendaMensalQuantidade =
  (dataSource: TDataSource['plano']['cliente']): TVendaMensalQuantidade =>
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
