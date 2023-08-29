import { dbPlano } from '@/controllers/db-plano.db'
import { nfSaidaController } from '@/controllers/nf-saida.controller'
import { OrmDatabase, OrmTable } from '@/orm'
import { CadCli, TCadCli } from '@/schemas/plano/CadCli.schema'
import type { TSchema } from '@/schemas/schema.type'
import { formatMoney } from '@/utils/format/format-money'
import { zsr } from '@/utils/zod/z-refine'
import { zd, zod } from '@/utils/zod/zod'

class ClienteController extends OrmTable<TCadCli> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }

  async vendaMensalQuantidade(args: {
    inicio: string
    fim: string
    cliente: number
  }) {
    zod(
      args,
      zd.object({
        inicio: zd.string().superRefine(zsr.date),
        fim: zd.string().superRefine(zsr.date),
        cliente: zd.number(),
      })
    )

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

  async vendaMensalValorMedio(args: {
    inicio: string
    fim: string
    cliente: number
  }) {
    zod(
      args,
      zd.object({
        inicio: zd.string().superRefine(zsr.date),
        fim: zd.string().superRefine(zsr.date),
        cliente: zd.number(),
      })
    )

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

  async vendaMensalValor(args: {
    inicio: string
    fim: string
    cliente: number
  }) {
    zod(
      args,
      zd.object({
        inicio: zd.string().superRefine(zsr.date),
        fim: zd.string().superRefine(zsr.date),
        cliente: zd.number(),
      })
    )

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
}

export const clienteController = new ClienteController(dbPlano, CadCli)
