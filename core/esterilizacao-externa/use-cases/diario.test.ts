import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { knexMockHistory } from '@/utils/mocks/knex-mock-history.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { diario } from './diario.js'

describe('diario', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = diario(dataSource)

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('diario', async () => {
    tracker.on
      .select('tEsterilizacaoExterna')
      .response([{ dia: '2020-01-01T00:00:00', quantidade: 10 }])
    const rsp = await useCase({
      inicio: '2020-01-01',
      fim: '2020-01-31',
    })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ['2020-01-01', '2020-01-31'],
        sql: 'select tEsterilizacaoExterna.Data AS dia, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade from tEsterilizacaoExterna LEFT JOIN (SELECT tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt where tEsterilizacaoExterna.Data between @p0 and @p1 group by [tEsterilizacaoExterna].[Data] order by [tEsterilizacaoExterna].[Data] desc',
      },
    ])
    expect(rsp).toEqual([
      { dia: '2020-01-01', dia_semana: 'qua', quantidade: 10 },
    ])
  })
})
