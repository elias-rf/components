import { dbPlano } from '@/controllers/db/db-plano.db'
import { OrmDatabase, ormTable } from '@/orm'
import { CadCli } from '@/schemas/plano/CadCli.schema'
import type { TSchema } from '@/schemas/schema.type'
import { formatMoney } from '@/utils/format/format-money'
import {
  isoDate,
  nonOptional,
  number,
  object,
  parse,
  string,
  union,
} from 'valibot'

export type TClienteFields = keyof typeof CadCli.fields
export type TClienteKeys = (typeof CadCli.primary)[number]
;(CadCli as TSchema).relations = {
  nfSaida: {
    method: () =>
      import('./nf-saida_controller').then((m) => m.nfSaidaController.list),
    where: [['CdProduto', 'CdProduto']],
  },
}
function clienteControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TClienteFields, TClienteKeys>(db, schema)

  async function vendaMensalQuantidade(args: {
    inicio: string
    fim: string
    cliente: number
  }) {
    parse(
      object({
        inicio: nonOptional(
          string([isoDate('data inicial inválida')]),
          'inicio deve ser informado'
        ),
        fim: nonOptional(
          string([isoDate('data final inválida')]),
          'fim deve ser informado'
        ),
        cliente: nonOptional(
          union([number(), string()], 'cliente deve ser number ou string'),
          'cliente deve ser informado'
        ),
      }),
      args
    )

    const { nfSaidaController } = await import('./nf-saida_controller')
    const data = await nfSaidaController.vendaMensalCliente(args)

    const rsp: any = {}
    data.forEach(
      ({
        anoMes,
        NmCategoria,
        quantidade,
      }: {
        anoMes: string
        NmCategoria: string
        quantidade: number
        valor: number
      }) => {
        rsp[NmCategoria] = rsp[NmCategoria] || {}
        rsp[NmCategoria][anoMes] = quantidade
      }
    )
    const resp = []
    for (const item in rsp) {
      resp.push({ categoria: item, ...rsp[item] })
    }
    return resp
  }
  vendaMensalQuantidade.rpc = true

  const vendaMensalValorMedio = async (args: {
    inicio: string
    fim: string
    cliente: number
  }) => {
    parse(
      object({
        inicio: string([isoDate('data inicial inválida')]),
        fim: string([isoDate('data final inválida')]),
        cliente: union(
          [number(), string()],
          'cliente deve ser number ou string'
        ),
      }),
      args
    )
    const { nfSaidaController } = await import('./nf-saida_controller')
    const data = await nfSaidaController.vendaMensalCliente(args)
    const rsp: any = {}
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
    return resp
  }
  vendaMensalValorMedio.rpc = true

  const vendaMensalValor = async (args: {
    inicio: string
    fim: string
    cliente: number
  }) => {
    parse(
      object({
        inicio: string([isoDate('data inicial inválida')]),
        fim: string([isoDate('data final inválida')]),
        cliente: union(
          [number(), string()],
          'cliente deve ser number ou string'
        ),
      }),
      args
    )
    const { nfSaidaController } = await import('./nf-saida_controller')
    const data = await nfSaidaController.vendaMensalCliente(args)
    const rsp: any = {}
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
    return resp
  }
  vendaMensalValor.rpc = true

  return {
    ...orm.rpc,
    vendaMensalQuantidade,
    vendaMensalValor,
    vendaMensalValorMedio,
  }
}

export const clienteController = clienteControllerFactory(dbPlano, CadCli)
