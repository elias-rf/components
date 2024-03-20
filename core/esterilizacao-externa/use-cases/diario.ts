import { TDataSource } from '@/data/index.js'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import * as v from 'valibot'

export const diario =
  (dataSource: TDataSource) =>
  async ({
    inicio,
    fim,
  }: {
    inicio: string
    fim: string
  }): Promise<{ dia: string; dia_semana: string; quantidade: number }[]> => {
    v.parse(
      v.object({
        inicio: v.string([v.isoDate('data inicial inválida')]),
        fim: v.string([v.isoDate('data final inválida')]),
      }),
      { inicio, fim }
    )
    const knex = dataSource.oftalmo.ds.getDriver()
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
      rec.dia_semana = format(rec.dia, 'EEEEEE', { locale: ptBR })
      rec.dia = format(rec.dia, 'yyyy-MM-dd')
      return rec
    })
  }
