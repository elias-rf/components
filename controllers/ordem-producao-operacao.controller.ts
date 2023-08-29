import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { OrdemProducaoOperacao } from '@/database'
import { OrmDatabase, OrmTable } from '@/orm'
import {
  TtOperacaoOrdemProducao,
  tOperacaoOrdemProducao,
} from '@/schemas/oftalmo/tOperacaoOrdemProducao.schema'
import { TSchema } from '@/schemas/schema.type'
import { day } from '@/utils/date/day'
import { zDate } from '@/utils/zod/z-date'
import { zsr } from '@/utils/zod/z-refine'
import { zd, zod } from '@/utils/zod/zod'
import { raw } from 'objection'

class OrdemProducaoOperacaoController extends OrmTable<TtOperacaoOrdemProducao> {
  constructor(db: OrmDatabase, schema: TSchema) {
    super(db, schema)
  }

  async diario({
    operacao,
    inicio,
    fim,
  }: {
    operacao: string
    inicio: string
    fim: string
  }) {
    zod(operacao, zd.string().length(4))
    zDate(inicio)
    zDate(fim)

    const qry = OrdemProducaoOperacao.query()
      .select('DataInicio as dia')
      .sum('QtdConforme as quantidade')
      .orderBy('DataInicio', 'desc')
      .groupBy('DataInicio')
      .where({ fkOperacao: operacao })
      .whereBetween('DataInicio', [inicio, fim])

    const data = await qry
    return data.map((item: any) => {
      item.diaSemana = day.utc(item.dia).format('ddd')
      item.dia = day.utc(item.dia).format('YYYY-MM-DD')
      return item
    })
  }

  async mensal({ operacao, mes }: { operacao: string; mes: string }) {
    zod(operacao, zd.string())
    zod(mes, zd.string().superRefine(zsr.month))

    const qry = await OrdemProducaoOperacao.query()
      .select(
        raw(
          'CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade'
        )
      )
      .orderByRaw('CONVERT(CHAR(7),[DataInicio],120) desc')
      .groupBy(raw('CONVERT(CHAR(7),[DataInicio],120)'))
      .having(raw('CONVERT(CHAR(7),[DataInicio],120)>=?', [mes]))
      .where({ fkOperacao: operacao })
    return qry
  }

  async modelo({
    operacao,
    data,
    produto,
  }: {
    operacao: string
    data: string
    produto: string
  }) {
    zod(operacao, zd.string())
    zod(produto, zd.string())
    zod(data, zd.string().superRefine(zsr.date))
    const knex = OrdemProducaoOperacao.knex()
    const qry = await knex(
      knex.raw(
        '((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp'
      )
    )
      .select(
        knex.raw(
          'tbl_Produto_Item.NomeProdutoItem as modelo, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade'
        )
      )
      .groupBy(
        knex.raw(
          'tbl_Produto_Item.NomeProdutoItem, tOperacaoOrdemProducao.DataInicio, tbl_Produto.fkCategoria'
        )
      )
      .where({
        fkOperacao: operacao,
        DataInicio: data,
        fkCategoria: produto,
      })
    return qry
  }

  async produto({ operacao, data }: { operacao: string; data: string }) {
    zod(operacao, zd.string())
    zod(data, zd.string().superRefine(zsr.date))
    const knex = OrdemProducaoOperacao.knex()
    const qry = await knex<any, { produto: string; quantidade: number }[]>(
      knex.raw(
        '((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp'
      )
    )
      .select(
        knex.raw(
          'tbl_Produto.fkCategoria as produto, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade'
        )
      )
      .orderBy('tbl_Produto.fkCategoria', 'asc')
      .groupBy(['tbl_Produto.fkCategoria', 'tOperacaoOrdemProducao.DataInicio'])
      .where({ fkOperacao: operacao, DataInicio: data })
    return qry as { produto: string; quantidade: number }[]
  }

  async turno({ operacao, data }: { operacao: string; data: string }) {
    zod(operacao, zd.string())
    zod(data, zd.string().superRefine(zsr.date))
    const knex = OrdemProducaoOperacao.knex()
    const qry = await knex(
      knex.raw(
        '((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp'
      )
    )
      .select(
        raw(
          "case when tOperacaoOrdemProducao.HoraInicio <='06:00:00' then 'T3' when tOperacaoOrdemProducao.HoraInicio <='14:00:00' then 'T1' when tOperacaoOrdemProducao.HoraInicio <='22:30:00' then 'T2' else 'T3' end as turno, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
        )
      )
      .groupBy(
        knex.raw(
          "case when tOperacaoOrdemProducao.HoraInicio <='06:00:00' then 'T3' when tOperacaoOrdemProducao.HoraInicio <='14:00:00' then 'T1' when tOperacaoOrdemProducao.HoraInicio <='22:30:00' then 'T2' else 'T3' end"
        )
      )
      .where({ fkOperacao: operacao, DataInicio: data })
    return qry
  }
}

export const ordemProducaoOperacaoController =
  new OrdemProducaoOperacaoController(dbOftalmo, tOperacaoOrdemProducao)
