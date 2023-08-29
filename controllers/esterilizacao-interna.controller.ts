import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { EsterilizacaoInterna, OrdemProducaoOperacao } from '@/database'
import { OrmDatabase, OrmTable } from '@/orm'
import {
  TtEsterilizacaoInterna,
  tEsterilizacaoInterna,
} from '@/schemas/oftalmo/tEsterilizacaoInterna.schema'
import type { TSchema } from '@/schemas/schema.type'
import { day } from '@/utils/date/day'
import { zsr } from '@/utils/zod/z-refine'
import { zd, zod } from '@/utils/zod/zod'
import { raw } from 'objection'

class EsterilizacaoInternaController extends OrmTable<TtEsterilizacaoInterna> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }

  async diario({
    inicio,
    fim,
  }: {
    inicio: string
    fim: string
  }): Promise<{ dia: string; dia_semana: string; quantidade: number }[]> {
    zod(inicio, zd.string().superRefine(zsr.date))
    zod(fim, zd.string().superRefine(zsr.date))
    const qry = await OrdemProducaoOperacao.query()
      .select({ dia: 'DataInicio' })
      .select(raw('Sum(QtdConforme) AS quantidade'))
      .orderBy('DataInicio', 'desc')
      .groupBy('DataInicio')
      .whereBetween('DataInicio', [inicio, fim])
      .where(raw('fkOperacao in (3058, 3158)'))
    return qry.map((rec: any) => {
      rec.dia_semana = day(rec.dia).format('ddd')
      rec.dia = rec.dia.toISOString().substring(0, 10)
      return rec
    })
  }

  async mensal({ mes }: { mes: string }) {
    zod(mes, zd.string().superRefine(zsr.month))

    const knex = EsterilizacaoInterna.knex()
    const qry = OrdemProducaoOperacao.query()
      .select(
        knex.raw(
          'CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade'
        )
      )
      .orderByRaw('CONVERT(CHAR(7),[DataInicio],120) desc')
      .groupBy(raw('CONVERT(CHAR(7),[DataInicio],120)'))
      .where(knex.raw('CONVERT(CHAR(7),[DataInicio],120)>=?', [mes]))
      .where(knex.raw('fkOperacao in (3058, 3158)'))

    return qry
  }

  async modelo({ data, produto }: { data: string; produto: string }) {
    zod(data, zd.string().superRefine(zsr.date))
    zod(produto, zd.string())
    const knex = EsterilizacaoInterna.knex()
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

  async produto({
    data,
  }: {
    data: string
  }): Promise<{ produto: string; quantidade: number }[]> {
    zod(data, zd.string().superRefine(zsr.date))
    const knex = EsterilizacaoInterna.knex()
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
}

export const esterilizacaoInternaController =
  new EsterilizacaoInternaController(dbOftalmo, tEsterilizacaoInterna)
