import { beforeEach, describe, expect, test } from 'vitest'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { read } from './read.mjs'

describe('read', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = read(dataSource)

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('read', async () => {
    tracker.on.select('tOperacaoDeProducao').response([{ kOperacao: '1' }])

    const rsp = await useCase({
      where: [['id', 10]],
      select: ['id', 'operacao'],
    })
    expect(oftalmoDb.log()).toEqual([
      'select top (1) [kOperacao], [Operacao] from [tOperacaoDeProducao] where [kOperacao] = 10',
    ])
    expect(rsp).toEqual({ id: '1' })
  })

  // it('read with include', async () => {
  //   tracker.on.select('tOrdemProducao').response({ kOp: '1' })
  //   tracker.on.select('tOperacaoOrdemProducao').response([{ fkOp: '1' }])

  //   const rsp = await ordemProducaoController.ordemProducao_read({
  //     where: [['id', 1]],
  //     include: { operacoes: ['fkOp'] },
  //   })

  //   expect(rsp).toEqual({ kOp: '1', operacoes: [{ fkOp: '1' }] })
  //   expect(knexMockHistory(tracker)).toEqual([
  //     {
  //       bindings: [1, 1],
  //       sql: 'select top (@p0) [kOp] from [tOrdemProducao] where [kOp] = @p1',
  //     },
  //     {
  //       bindings: ['1'],
  //       sql: 'select [fkOp] from [tOperacaoOrdemProducao] where [fkOp] = @p0',
  //     },
  //   ])
  // })

  // it('read with nested include', async () => {
  //   tracker.on.select('tOrdemProducao').response({ kOp: 1, fkProdutoItem: 1 })
  //   tracker.on.select('tOperacaoOrdemProducao').response([{ fkOp: 1 }])
  //   tracker.on
  //     .select('tbl_Produto_Item')
  //     .response({ kProdutoItem: 1, fkProduto: 1 })
  //   tracker.on.select('tbl_Produto').response([{ kProduto: 1 }])

  //   const rsp = await ordemProducaoController.ordemProducao_read({
  //     where: [['id', 1]],
  //     include: {
  //       operacoes: ['fkOp'],
  //       produtoItem: ['kProdutoItem'],
  //       'produtoItem.produto': ['NomeComercial'],
  //     },
  //   })

  //   expect(knexMockHistory(tracker)).toEqual([
  //     {
  //       bindings: [1, 1],
  //       sql: 'select top (@p0) [kOp], [fkProdutoItem] from [tOrdemProducao] where [kOp] = @p1',
  //     },
  //     {
  //       bindings: [1],
  //       sql: 'select [fkOp] from [tOperacaoOrdemProducao] where [fkOp] = @p0',
  //     },
  //     {
  //       bindings: [1, 1],
  //       sql: 'select top (@p0) [kProdutoItem], [fkProduto] from [tbl_Produto_Item] where [kProdutoItem] = @p1',
  //     },
  //     {
  //       bindings: [1, 1],
  //       sql: 'select top (@p0) [NomeComercial] from [tbl_Produto] where [kProduto] = @p1',
  //     },
  //   ])
  //   expect(rsp).toEqual({
  //     fkProdutoItem: 1,
  //     kOp: 1,
  //     operacoes: [{ fkOp: 1 }],
  //     produtoItem: { fkProduto: 1, kProdutoItem: 1, produto: { kProduto: 1 } },
  //   })
  // })
})
