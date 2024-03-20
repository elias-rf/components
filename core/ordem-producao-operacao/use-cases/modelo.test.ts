import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { knexMockHistory } from '@/utils/mocks/knex-mock-history.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { modelo } from './modelo.js'

describe('modelo useCase', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  dataSource.oftalmo.ds.setDriver(knexMockMsql)
  const useCase = modelo(dataSource)

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('modelo', async () => {
    tracker.on
      .select('tbl_Produto_Item')
      .response([{ dia: '2020-01-01', quantidade: 10 }])

    const rsp = await useCase({
      operacao: '1010',
      data: '2020-01-01',
      produto: 'produto1',
    })
    expect(rsp).toEqual([{ dia: '2020-01-01', quantidade: 10 }])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ['1010', '2020-01-01', 'produto1'],
        sql: 'select tbl_Produto_Item.NomeProdutoItem as modelo, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from ((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp where [fkOperacao] = @p0 and [DataInicio] = @p1 and [fkCategoria] = @p2 group by tbl_Produto_Item.NomeProdutoItem, tOperacaoOrdemProducao.DataInicio, tbl_Produto.fkCategoria',
      },
    ])
  })
})
