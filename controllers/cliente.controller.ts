import { dbPlano } from '@/controllers/db-plano.db'
import { nfSaidaController } from '@/controllers/nf-saida.controller'
import { OrmDatabase, ormTable } from '@/orm'
import { CadCli } from '@/schemas/plano/CadCli.schema'
import type { TSchema } from '@/schemas/schema.type'
import { formatMoney } from '@/utils/format/format-money'
import { zsr } from '@/utils/zod/z-refine'
import { zd, zod } from '@/utils/zod/zod'

export type TClienteFields = keyof typeof CadCli.fields
export type TClienteKeys = (typeof CadCli.primary)[number]

function clienteControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TClienteFields, TClienteKeys>(db, schema)

  async function vendaMensalQuantidade(args: {
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
  vendaMensalQuantidade.rpc = true

  const vendaMensalValorMedio = async (args: {
    inicio: string
    fim: string
    cliente: number
  }) => {
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
  vendaMensalValorMedio.rpc = true

  const vendaMensalValor = async (args: {
    inicio: string
    fim: string
    cliente: number
  }) => {
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
  vendaMensalValor.rpc = true

  return {
    list: orm.list,
    read: orm.read,
    update: orm.update,
    create: orm.create,
    del: orm.del,
    orm,
    vendaMensalQuantidade,
    vendaMensalValor,
    vendaMensalValorMedio,
  }
}

export const clienteController = clienteControllerFactory(dbPlano, CadCli)
