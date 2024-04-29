import { beforeEach, describe, expect, test } from 'vitest'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { knexMockHistory } from '../../../utils/mocks/knex-mock-history.mjs'
import { produto } from './produto.mjs'

describe('produto useCase', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  dataSource.oftalmo.ds.setDriver(knexMockMsql)
  const useCase = produto(dataSource)

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('produto', async () => {
    tracker.on
      .select('tbl_Produto_Item')
      .response([{ dia: '2020-01-01', quantidade: 10 }])

    const rsp = await useCase({
      operacao: '1010',
      data: '2020-01-01',
    })
    expect(rsp).toEqual([{ dia: '2020-01-01', quantidade: 10 }])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ['1010', '2020-01-01'],
        sql: 'select tbl_Produto.fkCategoria as produto, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from ((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp where [fkOperacao] = @p0 and [DataInicio] = @p1 group by [tbl_Produto].[fkCategoria], [tOperacaoOrdemProducao].[DataInicio] order by [tbl_Produto].[fkCategoria] asc',
      },
    ])
  })
})
