import { dbOftalmo } from '@/controllers/db/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import { tEsterilizacaoExterna } from '@/schemas/oftalmo/tEsterilizacaoExterna.schema'
import type { TSchema } from '@/schemas/schema.type'
import { day } from '@/utils/date/day'
import { isoDate, object, parse, regex, string } from 'valibot'

export type TEsterilizacaoExternaFields =
  keyof typeof tEsterilizacaoExterna.fields
export type TEsterilizacaoExternaKeys =
  (typeof tEsterilizacaoExterna.primary)[number]

function esterilizacaoExternaControllerFactory(
  db: OrmDatabase,
  schema: TSchema
) {
  const orm = ormTable<TEsterilizacaoExternaFields, TEsterilizacaoExternaKeys>(
    db,
    schema
  )

  const diario = async ({
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
    const knex = db.knex
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
  diario.rpc = true

  const mensal = async ({
    mes,
  }: {
    mes: string
  }): Promise<{ mes: string; quantidade: number }[]> => {
    parse(string([regex(/^\d{4}-(?:0[1-9]|1[0-2])$/, 'mês inválido')]), mes)
    const knex = db.knex
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
  mensal.rpc = true

  const modelo = ({
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
    const knex = db.knex
    const qry = knex(
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
      .where(knex.raw("IsNull([fkCategoria],'Metil')=?", produto))

    return qry
  }
  modelo.rpc = true

  const produto = async ({
    data,
  }: {
    data: string
  }): Promise<{ produto: string; quantidade: number }[]> => {
    parse(object({ data: string([isoDate('data inicial inválida')]) }), {
      data,
    })
    const knex = db.knex
    const qry = await knex(
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
      .where(knex.raw('tEsterilizacaoExterna.Data=?', [data]))

    return qry as { produto: string; quantidade: number }[]
  }
  produto.rpc = true

  return {
    ...orm.rpc,
    diario,
    mensal,
    modelo,
    produto,
  }
}

export const esterilizacaoExternaController =
  esterilizacaoExternaControllerFactory(dbOftalmo, tEsterilizacaoExterna)
