import { getTracker } from '@/mocks/database.mock'
import { knexMockHistory } from '@/mocks/knex-mock-history'
import { ordemProducaoController } from './ordem-producao.controller'
import { expect, it, describe, beforeEach } from 'vitest'
import { knexMockMsql } from '@/mocks/connections.mock'
import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { dbPlano } from '@/controllers/db-plano.db'

describe('ordemProducaoController', () => {
  const tracker = getTracker()
  dbOftalmo.knex = knexMockMsql
  dbPlano.knex = knexMockMsql

  beforeEach(() => {
    dbOftalmo.startLog()
    tracker.reset()
  })

  it('list', async () => {
    tracker.on.select('tOrdemProducao').response([{ kOp: 1, fkTipoOP: 1 }])
    tracker.on.select('tOperacaoOrdemProducao').response([{ fkOp: 1 }])
    tracker.on.select('tTipoDeOP').response([{ kTipoOP: 1 }])
    const rsp = await ordemProducaoController.list({
      filter: [['kOp', 1]],
      select: ['kOp'],
      related: '[operacao,tipo]',
    })

    expect(rsp).toEqual([{ kOp: 1, fkTipoOP: 1 }])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, 1],
        sql: 'select top (@p0) [kOp] from [tOrdemProducao] where [kOp] = @p1',
      },
      // {
      //   bindings: [1],
      //   sql: 'select [tOperacaoOrdemProducao].* from [tOperacaoOrdemProducao] where [tOperacaoOrdemProducao].[fkOp] in (@p0)',
      // },
      // {
      //   bindings: [1],
      //   sql: 'select [tTipoDeOP].* from [tTipoDeOP] where [tTipoDeOP].[kTipoOP] in (@p0)',
      // },
    ])
  })

  it('dataFabricacao em 3059', async () => {
    tracker.on.select('tOperacaoOrdemProducao').response((sql) => {
      if (sql.bindings[1] === 3059) {
        return [{ DataHoraInicio: '2020-01-01' }]
      }
      return []
    })

    const rsp = await ordemProducaoController.dataFabricacao({
      id: [['kOp', 1]],
    })
    expect(rsp).toEqual('2020-01-01')
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, 3059, 1],
        sql: 'select top (@p0) [DataHoraInicio] from [tOperacaoOrdemProducao] where [fkOperacao] = @p1 and [fkOp] = @p2 order by [DataHoraInicio] desc',
      },
    ])
  })
  it('controle', async () => {
    const rsp = await ordemProducaoController.controle({
      id: [['kOp', 100]],
      serie: '1',
    })

    expect(rsp).toEqual('000001000017')
  })

  it('dataValidade', async () => {
    tracker.on
      .any('tOperacaoOrdemProducao')
      .response([{ DataHoraInicio: '2020-01-01' }])

    const rsp = await ordemProducaoController.dataValidade({
      id: [['kOp', 1]],
    })

    expect(rsp).toEqual('2025-01-01')
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, 3059, 1],
        sql: 'select top (@p0) [DataHoraInicio] from [tOperacaoOrdemProducao] where [fkOperacao] = @p1 and [fkOp] = @p2 order by [DataHoraInicio] desc',
      },
    ])
  })

  it('isControleValid true', async () => {
    const rsp = await ordemProducaoController.ehControleValido({
      controle: '000001000017',
    })

    expect(rsp).toEqual(true)
  })

  it('isControleValid false', async () => {
    const rsp = await ordemProducaoController.ehControleValido({
      controle: '000101000017',
    })

    expect(rsp).toEqual(false)
  })

  it('etiquetaExterna', async () => {
    tracker.resetHistory()
    tracker.on.select('tEtiqueta').response([
      {
        controle: '000001000017',
        qtdImpressao: 1,
        dataFabricacao: '2020-01-01',
      },
    ])
    const response = await ordemProducaoController.etiquetaExterna({
      id: [['kOp', 100]],
    })

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1000, '000001%'],
        sql: 'select top (@p0) * from [tEtiqueta] where [controle] like @p1 order by [controle] asc',
      },
    ])

    expect(response).toEqual([
      {
        dataFabricacao: '2020-01-01',
        controle: '000001000017',
        qtdImpressao: 1,
      },
    ])
  })

  it('produtoItem', async () => {
    tracker.on.select('tOrdemProducao').response([{ fkProdutoItem: 1 }])
    tracker.on.select('tbl_Produto_Item').response([{}])
    const rsp = await ordemProducaoController.produtoItem({
      id: [['kOp', 1]],
      select: ['kProdutoItem'],
    })

    expect(rsp).toEqual({})
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, 1],
        sql: 'select top (@p0) [fkProdutoItem] from [tOrdemProducao] where [kOp] = @p1',
      },
      {
        bindings: [1, 1],
        sql: 'select top (@p0) [kProdutoItem] from [tbl_Produto_Item] where [kProdutoItem] = @p1',
      },
    ])
  })

  it('produtoPlano', async () => {
    tracker.on.select('tOrdemProducao').response([{ fkProdutoItem: 1 }])
    tracker.on
      .select('tbl_Produto_Item')
      .response([{ kProdutoItem: 1, fkProduto: 1, IdVisiontech: '1' }])
    tracker.on.select('CadPro').response([{ CdProduto: 1 }])

    const rsp = await ordemProducaoController.produtoPlano({
      id: [['kOp', 1]],
      select: ['CdProduto'],
    })

    expect(rsp).toEqual({ CdProduto: 1 })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, 1],
        sql: 'select top (@p0) [fkProdutoItem] from [tOrdemProducao] where [kOp] = @p1',
      },
      {
        bindings: [1, 1],
        sql: 'select top (@p0) [kProdutoItem] from [tbl_Produto_Item] where [kProdutoItem] = @p1',
      },
      {
        bindings: [1, 1],
        sql: 'select top (@p0) [IdVisiontech] from [tbl_Produto_Item] where [kProdutoItem] = @p1',
      },
      {
        bindings: [1, '1'],
        sql: 'select top (@p0) [CdProduto] from [CadPro] where [CdProduto] = @p1',
      },
    ])
  })
})
