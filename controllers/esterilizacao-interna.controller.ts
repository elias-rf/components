import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrmDatabase, ormTable } from '@/orm'
import { tEsterilizacaoInterna } from '@/schemas/oftalmo/tEsterilizacaoInterna.schema'
import type { TSchema } from '@/schemas/schema.type'
import { day } from '@/utils/date/day'
import { zsr } from '@/utils/zod/z-refine'
import { zd, zod } from '@/utils/zod/zod'

export type TEsterilizacaoInternaFields =
  keyof typeof tEsterilizacaoInterna.fields
export type TEsterilizacaoInternaKeys =
  (typeof tEsterilizacaoInterna.primary)[number]

function esterilizacaoInternaControllerFactory(
  db: OrmDatabase,
  schema: TSchema
) {
  const orm = ormTable<TEsterilizacaoInternaFields, TEsterilizacaoInternaKeys>(
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

    const qry = await db.run({
      from: 'tOperacaoOrdemProducao',
      selectRaw: ['DataInicio as dia, Sum(QtdConforme) AS quantidade'],
      orderBy: [['DataInicio', 'desc']],
      groupBy: ['DataInicio'],
      where: [['DataInicio', 'between', [inicio, fim]]],
      whereRaw: ['fkOperacao in (3058, 3158)'],
    })
    return qry.map((rec: any) => {
      rec.dia_semana = day(rec.dia).format('ddd')
      rec.dia = rec.dia.toISOString().substring(0, 10)
      return rec
    })
  }
  diario.rpc = true

  const mensal = async ({ mes }: { mes: string }) => {
    zod(mes, zd.string().superRefine(zsr.month))

    const qry = await db.run({
      from: 'tOperacaoOrdemProducao',
      selectRaw: [
        'CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade',
      ],
      orderByRaw: ['CONVERT(CHAR(7),[DataInicio],120) desc'],
      groupByRaw: ['CONVERT(CHAR(7),[DataInicio],120)'],
      whereRaw: [
        'fkOperacao in (3058, 3158) and CONVERT(CHAR(7),[DataInicio],120)>=?',
        [mes],
      ],
    })
    return qry
  }
  mensal.rpc = true

  const modelo = async ({
    data,
    produto,
  }: {
    data: string
    produto: string
  }) => {
    zod(data, zd.string().superRefine(zsr.date))
    zod(produto, zd.string())
    const knex = db.knex
    const qry = await knex(
      knex.raw(
        '((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp'
      )
    )
      .select({ modelo: 'tbl_Produto_Item.NomeProdutoItem' })
      .sum('tOperacaoOrdemProducao.QtdConforme AS quantidade')
      .groupBy(
        'tbl_Produto_Item.NomeProdutoItem',
        'tOperacaoOrdemProducao.DataInicio',
        'tbl_Produto.fkCategoria'
      )
      .where({
        DataInicio: data,
        fkCategoria: produto,
      })
      .whereIn('fkOperacao', [3058, 3158])
    return qry
  }
  modelo.rpc = true

  const produto = async ({
    data,
  }: {
    data: string
  }): Promise<{ produto: string; quantidade: number }[]> => {
    zod(data, zd.string().superRefine(zsr.date))
    const knex = db.knex
    const qry = await knex(
      knex.raw(
        '((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp'
      )
    )
      .select({ produto: 'tbl_Produto.fkCategoria' })
      .sum('tOperacaoOrdemProducao.QtdConforme AS quantidade')
      .orderBy('tbl_Produto.fkCategoria', 'asc')
      .groupBy(['tbl_Produto.fkCategoria', 'tOperacaoOrdemProducao.DataInicio'])
      .where({ DataInicio: data })
      .whereIn('fkOperacao', [3058, 3158])
    return qry as { produto: string; quantidade: number }[]
  }
  produto.rpc = true

  return {
    list: orm.list,
    read: orm.read,
    update: orm.update,
    create: orm.create,
    del: orm.del,
    diario,
    mensal,
    modelo,
    produto,
  }
}

export const esterilizacaoInternaController =
  esterilizacaoInternaControllerFactory(dbOftalmo, tEsterilizacaoInterna)
