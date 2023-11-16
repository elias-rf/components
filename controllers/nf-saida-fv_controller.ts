import { dbFullvision } from '@/controllers/db/db-fullvision.db'
import { MestreNota } from '@/controllers/nf-saida_controller'
import { OrmDatabase, ormTable } from '@/orm'
import type { TSchema } from '@/schemas/schema.type'
import { array, isoDate, number, object, parse, string, union } from 'valibot'

export type TNfSaidaFvFields = (typeof MestreNota.fields)[number]
export type TNfSaidaFvKeys = (typeof MestreNota.primary)[number]

function nfSaidaFvControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TNfSaidaFvFields, TNfSaidaFvKeys>(db, schema)

  const vendaAnalitico = async ({
    inicio,
    fim,
  }: {
    inicio: string
    fim: string
  }) => {
    parse(
      object({
        inicio: string([isoDate('data inicial inválida')]),
        fim: string([isoDate('data final inválida')]),
      }),
      {
        inicio,
        fim,
      }
    )
    const knex = db.knex
    const qryPlano = knex('MestreNota')
      .select(knex.raw("'FV' as origem"))
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
        'MestreNota.CdFilial': 1,
        'CadVen.FgControle': 'S',
        'MestreNota.FgEstatistica': 'S',
        'CadPro.FgEstatistica': 'S',
        'ItemNota.ImprimeComponentes': 'N',
      })
      .where('ItemNota.Sequencia', '<>', 0)
      .where('MestreNota.cdcliente', '<>', 3158)
      .whereBetween('MestreNota.DtEmissao', [inicio, fim])
      .whereIn('MestreNota.Tipo', ['E', 'S'])
    return qryPlano
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
    parse(
      object({
        inicio: string([isoDate('data inicial inválida')]),
        fim: string([isoDate('data final inválida')]),
        uf: array(string()),
      }),
      {
        inicio,
        fim,
        uf,
      }
    )
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
        'MestreNota.CdFilial': 1,
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
    parse(
      object({
        inicio: string([isoDate('data inicial inválida')]),
        fim: string([isoDate('data final inválida')]),
        cliente: union([number(), string()]),
      }),
      { inicio, fim, cliente }
    )
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
        'MestreNota.CdFilial': 1,
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
    vendaAnalitico,
    vendaDiario,
    vendaMensalCliente,
  }
}

export const nfSaidaFvController = nfSaidaFvControllerFactory(
  dbFullvision,
  MestreNota
)