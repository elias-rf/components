import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import { tEsterilizacaoExterna } from '@/schemas/oftalmo/tEsterilizacaoExterna.schema'
import type { TSchema } from '@/schemas/schema.type'
import { day } from '@/utils/date/day'
import { zsr } from '@/utils/zod/z-refine'
import { zd, zod } from '@/utils/zod/zod'

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
    zod(inicio, zd.string().superRefine(zsr.date))
    zod(fim, zd.string().superRefine(zsr.date))
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

  const mensal = async ({ mes }: { mes: string }) => {
    zod(mes, zd.string().superRefine(zsr.month))
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

  const modelo = ({ data, produto }: { data: string; produto: string }) => {
    zod(data, zd.string().superRefine(zsr.date))
    zod(produto, zd.string())
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

  const produto = ({
    data,
  }: {
    data: string
  }): Promise<{ produto: string; quantidade: number }[]> => {
    zod(data, zd.string().superRefine(zsr.date))
    const knex = db.knex
    const qry = knex(
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

    return qry
  }
  produto.rpc = true

  return {
    list: orm.list,
    read: orm.read,
    update: orm.update,
    create: orm.create,
    del: orm.del,
    orm,
    diario,
    mensal,
    modelo,
    produto,
  }
}

export const esterilizacaoExternaController =
  esterilizacaoExternaControllerFactory(dbOftalmo, tEsterilizacaoExterna)
