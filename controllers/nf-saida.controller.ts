import { dbPlano } from '@/controllers/db-plano.db'
import { nfSaidaFvController } from '@/controllers/nf-saida-fv.controller'
import { OrmDatabase, ormTable } from '@/orm'
import { MestreNota } from '@/schemas/plano/MestreNota.schema'
import type { TSchema } from '@/schemas/schema.type'
import { zsr } from '@/utils/zod/z-refine'
import { zd, zod } from '@/utils/zod/zod'
import { z } from 'zod'

export type TNfSaidaFields = keyof typeof MestreNota.fields
export type TNfSaidaKeys = (typeof MestreNota.primary)[number]

function nfSaidaControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TNfSaidaFields, TNfSaidaKeys>(db, schema)

  const transferenciaDiario = async ({
    inicio,
    fim,
  }: {
    inicio: string
    fim: string
  }) => {
    zod(inicio, zd.string().superRefine(zsr.date))
    zod(fim, zd.string().superRefine(zsr.date))

    const aux: any = {}
    const rsp = []
    const knex = db.knex
    const qry: any = await knex<
      any,
      { dia: string; NmCategoria: string; quantidade: number }
    >(
      knex.raw(
        'NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)'
      )
    )
      .select(
        knex.raw(
          'CONVERT(CHAR(10),[MestreNota].[DtEmissao],120) AS dia, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade'
        )
      )
      .orderBy('MestreNota.DtEmissao', 'desc')
      .groupBy('MestreNota.DtEmissao')
      .groupBy('CategPro.NmCategoria')
      .whereBetween('MestreNota.DtEmissao', [inicio, fim])
      .where('MestreNota.CdFilial', 1)
      .where('NatOpe.Nop', 5151)
      .where('MestreNota.NotadeComplemento', 'N')
      .where('MestreNota.Tipo', '<>', 'C')

    for (const item of qry) {
      aux[item.dia] = {
        ...aux[item.dia],
        ...{ [item.NmCategoria]: item.quantidade },
      }
    }

    for (const [key, value] of Object.entries(aux)) {
      const item = { dia: key, ...(<any>value) }
      rsp.push(item)
    }
    return rsp
  }
  transferenciaDiario.rpc = true

  const transferenciaMensal = async ({ mes }: { mes: string }) => {
    zod(mes, zd.string().superRefine(zsr.month))
    const aux: any = {}
    const rsp = []
    const knex = db.knex
    const qry = await knex(
      knex.raw(
        'NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)'
      )
    )
      .select(
        knex.raw(
          'CONVERT(CHAR(7),[MestreNota].[DtEmissao],120) AS mes, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade'
        )
      )
      .orderByRaw('CONVERT(CHAR(7),[MestreNota].[DtEmissao],120) desc')
      .groupBy(
        knex.raw(
          'CONVERT(CHAR(7),[MestreNota].[DtEmissao],120), CategPro.NmCategoria'
        )
      )
      .where(
        knex.raw('CONVERT(CHAR(7),[MestreNota].[DtEmissao],120)>=?', [mes])
      )
      .andWhere(
        knex.raw(
          "MestreNota.CdFilial= 1 AND NatOpe.Nop= 5151 AND MestreNota.Tipo<> 'C' AND MestreNota.NotadeComplemento= 'N'"
        )
      )

    for (const item of qry) {
      aux[item.mes] = {
        ...aux[item.mes],
        ...{ [item.NmCategoria]: item.quantidade },
      }
    }

    for (const [key, value] of Object.entries(aux)) {
      const item = { mes: key, ...(<any>value) }
      rsp.push(item)
    }

    return rsp
  }
  transferenciaMensal.rpc = true

  const transferenciaModelo = async ({ data }: { data: string }) => {
    zod(data, zd.string().superRefine(zsr.date))
    const knex = db.knex
    const qry = await knex(
      knex.raw(
        'NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)'
      )
    )
      .select(
        knex.raw(
          'CadPro.Descricao as modelo, Sum(ItemNota.Quantidade) AS quantidade'
        )
      )
      .orderByRaw('CadPro.Descricao asc')
      .groupBy(knex.raw('CadPro.Descricao'))
      .where(knex.raw('MestreNota.DtEmissao = ?', [data]))
      .andWhere(
        knex.raw(
          "MestreNota.CdFilial=1 AND NatOpe.Nop=5151 AND MestreNota.Tipo<>'C' AND MestreNota.NotadeComplemento='N'"
        )
      )
    return qry
  }
  transferenciaModelo.rpc = true

  const vendaAnalitico = async ({
    inicio,
    fim,
  }: {
    inicio: string
    fim: string
  }) => {
    zod(inicio, z.string().superRefine(zsr.date))
    zod(fim, z.string().superRefine(zsr.date))
    const knex = db.knex
    const qryPlano = knex('MestreNota')
      .select(knex.raw("'VT' as origem"))
      .select([
        'CategPro.NmCategoria',
        'MestreNota.DtEmissao',
        'MestreNota.NumNota',
        'MestreNota.Serie',
        'MestreNota.Tipo',
        'ItemNota.CdProduto',
        'ItemNota.Quantidade',
        'ItemNota.VlTotal',
        'CadPro.Descricao',
        'MestreNota.CdVendedor',
        'CadVen.NmVendedor',
        'CidadesERF.uf',
      ])
      .join('ItemNota', function () {
        this.on('ItemNota.CdFilial', '=', 'MestreNota.CdFilial')
          .andOn('ItemNota.NumNota', '=', 'MestreNota.NumNota')
          .andOn('ItemNota.Serie', '=', 'MestreNota.Serie')
          .andOn('ItemNota.Modelo', '=', 'MestreNota.Modelo')
      })
      .join('CadVen', 'MestreNota.CdVendedor', 'CadVen.CdVendedor')
      .join('CadCli', 'MestreNota.CdCliente', 'CadCli.CdCliente')
      .join('cidadesErf', 'CadCli.Cidade', 'cidadesErf.NmCidadeIBGE')
      .join('CadPro', 'ItemNota.CdProduto', 'CadPro.CdProduto')
      .join('CategPro', 'CadPro.CdCategoria', 'CategPro.CdCategoria')
      .where({
        'MestreNota.CdFilial': 2,
        'CadVen.FgControle': 'S',
        'MestreNota.FgEstatistica': 'S',
        'CadPro.FgEstatistica': 'S',
        'ItemNota.ImprimeComponentes': 'N',
      })
      .where('ItemNota.Sequencia', '<>', 0)
      .where('MestreNota.cdcliente', '<>', 3158)
      .whereBetween('MestreNota.DtEmissao', [inicio, fim])
      .whereIn('MestreNota.Tipo', ['E', 'S'])
    const qryFullvision = nfSaidaFvController.vendaAnalitico({
      inicio,
      fim,
    })
    const resp: any = await Promise.all([qryPlano, qryFullvision])
    return resp[0].concat(resp[1])
  }
  vendaAnalitico.rpc = true

  const vendaDiario = async ({
    inicio,
    fim,
    uf,
  }: {
    inicio: string
    fim: string
    uf: string[]
  }) => {
    zod(inicio, z.string().superRefine(zsr.date))
    zod(fim, z.string().superRefine(zsr.date))
    zod(uf, z.array(z.string()))
    const knex = db.knex
    const qry = await knex<
      any,
      {
        NmCategoria: string
        DtEmissao: string
        quantidade: number
        valor: number
      }
    >(
      knex.raw(
        'MestreNota, ItemNota, CadVen, NatOpe, CadPro, CadCli, CategPro, CidadesERF'
      )
    )
      .select([
        'NmCategoria',
        'MestreNota.DtEmissao',
        knex.raw(
          "sum(itemNota.Quantidade * (case MestreNota.tipo when 'E' then ItemNota.VlLiquido * -1 else ItemNota.VlLiquido end)) as valor"
        ),
      ])
      .sum({ quantidade: 'ItemNota.Quantidade' })
      .where({
        'MestreNota.FgEstatistica': 'S',
        'MestreNota.CdFilial': 2,
        'CadPro.FgEstatistica': 'S',
        'CadVen.FgControle': 'S',
        'ItemNota.ImprimeComponentes': 'N',
      })
      .where('ItemNota.Sequencia', '>', 0)
      .where('MestreNota.Tipo', '<>', 'C')
      .where('MestreNota.cdcliente', '<>', 3158)
      .whereBetween('MestreNota.DtEmissao', [inicio, fim])
      .whereRaw(
        'ItemNota.CdFilial = MestreNota.CdFilial and ItemNota.Serie = MestreNota.Serie and ItemNota.Modelo = MestreNota.Modelo and ItemNota.NumNota = MestreNota.NumNota and CadPro.CdCategoria = CategPro.CdCategoria and NatOpe.Nop = MestreNota.Nop and CadVen.CdVendedor = MestreNota.CdVendedor and CadCli.CdCliente = MestreNota.CdCliente and CadPro.CdProduto = ItemNota.CdProduto and Cadcli.Cidade = cidadeserf.NmCidadeIBGE'
      )
      .whereIn('cidadeserf.uf', uf)
      .groupBy('NmCategoria', 'MestreNota.DtEmissao')
      .orderBy('NmCategoria')
      .orderBy('MestreNota.DtEmissao', 'desc')
    return qry as {
      NmCategoria: string
      DtEmissao: string
      quantidade: number
      valor: number
    }[]
  }
  vendaDiario.rpc = true

  const vendaMensalCliente = async ({
    inicio,
    fim,
    cliente,
  }: {
    inicio: string
    fim: string
    cliente: number
  }) => {
    zod(inicio, z.string().superRefine(zsr.date))
    zod(fim, z.string().superRefine(zsr.date))
    zod(cliente, z.number())
    const knex = db.knex
    const rsp = knex<
      any,
      {
        NmCategoria: string
        CdCliente: number
        anoMes: string
        quantidade: number
        valor: number
      }
    >('MestreNota')
      .join('ItemNota', {
        'MestreNota.CdFilial': 'ItemNota.CdFilial',
        'MestreNota.Serie': 'ItemNota.Serie',
        'MestreNota.Modelo': 'ItemNota.Modelo',
        'MestreNota.NumNota': 'ItemNota.NumNota',
      })
      .join('NatOpe', { 'NatOpe.Nop': 'MestreNota.Nop' })
      .join('CadVen', { 'CadVen.CdVendedor': 'MestreNota.CdVendedor' })
      .join('CadPro', {
        'CadPro.CdProduto': 'ItemNota.CdProduto',
      })
      .join('CategPro', {
        'CadPro.CdCategoria': 'CategPro.CdCategoria',
      })
      .where({
        'MestreNota.FgEstatistica': 'S',
        'MestreNota.CdFilial': 2,
        'CadPro.FgEstatistica': 'S',
        'CadVen.FgControle': 'S',
        'ItemNota.ImprimeComponentes': 'N',
      })
      .select([
        'CategPro.NmCategoria',
        'MestreNota.CdCliente',
        knex.raw(
          "CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor"
        ),
      ])
      .groupBy('CdCliente', 'NmCategoria')
      .groupByRaw('CONVERT(char(7), dbo.MestreNota.DtEmissao, 126)')
      .where('ItemNota.Sequencia', '>', 0)
      .where('MestreNota.Tipo', '<>', 'C')
      .whereBetween('MestreNota.DtEmissao', [inicio, fim])
      .where({ 'MestreNota.CdCliente': cliente })
    return (await rsp) as {
      NmCategoria: string
      CdCliente: number
      anoMes: string
      quantidade: number
      valor: number
    }[]
  }
  vendaMensalCliente.rpc = true

  return {
    ...orm.rpc,
    vendaMensalCliente,
    vendaDiario,
    transferenciaDiario,
    transferenciaMensal,
    vendaAnalitico,
    transferenciaModelo,
  }
}

export const nfSaidaController = nfSaidaControllerFactory(dbPlano, MestreNota)
