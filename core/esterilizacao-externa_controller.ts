import { dbOftalmo } from '@/core/db/db-oftalmo.db.js'
import { TAdapterKnex } from '@/orm/adapter-knex.js'
import { ormTable } from '@/orm/index.js'
import type { TSchema } from '@/schemas/schema.type.js'
import { day } from '@/utils/date/day.js'
import { isoDate, object, parse, regex, string } from 'valibot'

export const esterilizacaoExternaSchema: TSchema = {
  table: 'tEsterilizacaoExterna',
  primary: ['kLoteEstExt'] as const,
  fields: [
    'kLoteEstExt',
    'Data',
    'DataRetorno',
    'Quantidade',
    'QtdCaixa',
    'Fechado',
    'Resultado',
    'UsuarioResultado',
    'Obs',
    'LoteEto',
  ],
}

export type TEsterilizacaoExternaFields =
  (typeof esterilizacaoExternaSchema.fields)[number]
export type TEsterilizacaoExternaKeys =
  (typeof esterilizacaoExternaSchema.primary)[number]

function esterilizacaoExternaControllerFactory(
  db: TAdapterKnex,
  schema: TSchema
) {
  const orm = ormTable<TEsterilizacaoExternaFields, TEsterilizacaoExternaKeys>(
    db,
    schema
  )

  const esterilizacaoExterna_diario = async ({
    inicio,
    fim,
  }: {
    inicio: string
    fim: string
  }): Promise<{ dia: string; dia_semana: string; quantidade: number }[]> => {
    parse(
      object({
        inicio: string([isoDate('data inicial inválida')]),
        fim: string([isoDate('data final inválida')]),
      }),
      { inicio, fim }
    )
    const knex = db.getDriver()
    const qry = await knex(
      knex.raw(
        'tEsterilizacaoExterna LEFT JOIN (SELECT tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt'
      )
    )
      .select(
        knex.raw(
          'tEsterilizacaoExterna.Data AS dia, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade'
        )
      )
      .orderBy('tEsterilizacaoExterna.Data', 'desc')
      .groupBy('tEsterilizacaoExterna.Data')
      .where(
        knex.raw('tEsterilizacaoExterna.Data between ? and ?', [inicio, fim])
      )

    return qry.map((rec: any) => {
      rec.dia_semana = day(rec.dia).format('ddd')
      rec.dia = rec.dia.toISOString().substring(0, 10)
      return rec
    })
  }

  const esterilizacaoExterna_mensal = async ({
    mes,
  }: {
    mes: string
  }): Promise<{ mes: string; quantidade: number }[]> => {
    parse(string([regex(/^\d{4}-(?:0[1-9]|1[0-2])$/, 'mês inválido')]), mes)
    const knex = db.getDriver()
    const qry = await knex(
      knex.raw(
        'tEsterilizacaoExterna LEFT JOIN (SELECT tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt'
      )
    )
      .select(
        knex.raw(
          'CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120) AS mes, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade'
        )
      )
      .orderByRaw('CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120) desc')
      .groupBy(knex.raw('CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120)'))
      .where(
        knex.raw('CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120)>=?', [mes])
      )
    return qry
  }

  const esterilizacaoExterna_modelo = async ({
    data,
    produto,
  }: {
    data: string
    produto: string
  }): Promise<{ modelo: string; quantidade: number }[]> => {
    parse(
      object({
        data: string([isoDate('data inválida')]),
        produto: string(),
      }),
      { data, produto }
    )
    const knex = db.getDriver()
    const qry = (await knex(
      knex.raw(
        'tEsterilizacaoExterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt'
      )
    )
      .select(
        knex.raw(
          "isnull (NomeProdutoItem,'Metil') AS modelo, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderBy('NomeProdutoItem', 'desc')
      .groupBy('NomeProdutoItem')
      .where('tEsterilizacaoExterna.Data', data)
      .where(knex.raw("IsNull([fkCategoria],'Metil')=?", produto))) as any

    return qry
  }

  const esterilizacaoExterna_produto = async ({
    data,
  }: {
    data: string
  }): Promise<{ produto: string; quantidade: number }[]> => {
    parse(object({ data: string([isoDate('data inicial inválida')]) }), {
      data,
    })
    const knex = db.getDriver()
    const qry = (await knex(
      knex.raw(
        'tEsterilizacaoExterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt'
      )
    )
      .select(
        knex.raw(
          "IsNull([fkCategoria],'Metil') AS produto, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderBy('fkCategoria', 'desc')
      .groupBy('fkCategoria')
      .where(knex.raw('tEsterilizacaoExterna.Data=?', [data]))) as any

    return qry
  }

  return {
    esterilizacaoExterna_list: orm.rpc.list,
    esterilizacaoExterna_read: orm.rpc.read,
    esterilizacaoExterna_count: orm.rpc.count,
    esterilizacaoExterna_update: orm.rpc.update,
    esterilizacaoExterna_create: orm.rpc.create,
    esterilizacaoExterna_del: orm.rpc.del,
    esterilizacaoExterna_increment: orm.rpc.increment,
    esterilizacaoExterna_diario,
    esterilizacaoExterna_mensal,
    esterilizacaoExterna_modelo,
    esterilizacaoExterna_produto,
  }
}

export const esterilizacaoExternaController =
  esterilizacaoExternaControllerFactory(dbOftalmo, esterilizacaoExternaSchema)
