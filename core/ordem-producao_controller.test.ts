import { dbOftalmo } from '@/core/db/db-oftalmo.db.js'
import { dbPlano } from '@/core/db/db-plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { knexMockHistory } from '@/utils/mocks/knex-mock-history.js'
import { beforeEach, describe, expect, it, test } from 'vitest'
import { ordemProducaoController } from './ordem-producao_controller.js'

describe('ordemProducaoController', () => {
  const tracker = getTracker()
  dbOftalmo.setDriver(knexMockMsql)
  dbPlano.setDriver(knexMockMsql)

  beforeEach(() => {
    dbOftalmo.startLog()
    tracker.reset()
  })

  it('list', async () => {
    tracker.on.select('tOrdemProducao').response([{ kOp: 1, fkTipoOP: 1 }])
    tracker.on.select('tOperacaoOrdemProducao').response([{ fkOp: 1 }])
    tracker.on.select('tTipoDeOP').response([{ kTipoOP: 1 }])
    const rsp = await ordemProducaoController.ordemProducao_list({
      where: [['kOp', 1]],
      select: ['kOp'],
    })

    expect(rsp).toEqual([{ kOp: 1, fkTipoOP: 1 }])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, 1],
        sql: 'select top (@p0) [kOp] from [tOrdemProducao] where [kOp] = @p1',
      },
    ])
  })

  it('dataFabricacao em 3059', async () => {
    tracker.on.select('tOperacaoOrdemProducao').response((sql) => {
      if (sql.bindings[1] === 3059) {
        return [{ DataHoraInicio: '2020-01-01' }]
      }
      return []
    })

    const rsp = await ordemProducaoController.ordemProducao_dataFabricacao({
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
    const rsp = await ordemProducaoController.ordemProducao_controle({
      id: [['kOp', 100]],
      serie: '1',
    })

    expect(rsp).toEqual('000001000017')
  })

  it('dataValidade', async () => {
    tracker.on
      .any('tOperacaoOrdemProducao')
      .response([{ DataHoraInicio: '2020-01-01' }])

    const rsp = await ordemProducaoController.ordemProducao_dataValidade({
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
    const rsp = await ordemProducaoController.ordemProducao_ehControleValido({
      controle: '000001000017',
    })

    expect(rsp).toEqual(true)
  })

  it('isControleValid false', async () => {
    const rsp = await ordemProducaoController.ordemProducao_ehControleValido({
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
    const response =
      await ordemProducaoController.ordemProducao_etiquetaExterna({
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
    const rsp = await ordemProducaoController.ordemProducao_produtoItem({
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

    const rsp = await ordemProducaoController.ordemProducao_produtoPlano({
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

  test('list with include', async () => {
    tracker.on.select('tOrdemProducao').response([{ kOp: '1' }, { kOp: '2' }])
    tracker.on.select('tOperacaoOrdemProducao').response([{ fkOp: '1' }])

    const rsp = await ordemProducaoController.ordemProducao_list({
      where: [['kOp', 1]],
      orderBy: [['kOp', 'asc']],
      include: { operacoes: ['fkOp'] },
    })

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, 1],
        sql: 'select top (@p0) * from [tOrdemProducao] where [kOp] = @p1 order by [kOp] asc',
      },
      {
        bindings: [50, '1'],
        sql: 'select top (@p0) [fkOp] from [tOperacaoOrdemProducao] where [fkOp] = @p1',
      },
      {
        bindings: [50, '2'],
        sql: 'select top (@p0) [fkOp] from [tOperacaoOrdemProducao] where [fkOp] = @p1',
      },
    ])
    expect(rsp).toEqual([
      { kOp: '1', operacoes: [{ fkOp: '1' }] },
      { kOp: '2', operacoes: [{ fkOp: '1' }] },
    ])
  })

  it('read with include', async () => {
    tracker.on.select('tOrdemProducao').response({ kOp: '1' })
    tracker.on.select('tOperacaoOrdemProducao').response([{ fkOp: '1' }])

    const rsp = await ordemProducaoController.ordemProducao_read({
      where: [['kOp', 1]],
      include: { operacoes: ['fkOp'] },
    })

    expect(rsp).toEqual({ kOp: '1', operacoes: [{ fkOp: '1' }] })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, 1],
        sql: 'select top (@p0) [kOp] from [tOrdemProducao] where [kOp] = @p1',
      },
      {
        bindings: [50, '1'],
        sql: 'select top (@p0) [fkOp] from [tOperacaoOrdemProducao] where [fkOp] = @p1',
      },
    ])
  })

  it('read with nested include', async () => {
    tracker.on.select('tOrdemProducao').response({ kOp: 1, fkProdutoItem: 1 })
    tracker.on.select('tOperacaoOrdemProducao').response([{ fkOp: 1 }])
    tracker.on
      .select('tbl_Produto_Item')
      .response({ kProdutoItem: 1, fkProduto: 1 })
    tracker.on.select('tbl_Produto').response([{ kProduto: 1 }])

    const rsp = await ordemProducaoController.ordemProducao_read({
      where: [['kOp', 1]],
      include: {
        operacoes: ['fkOp'],
        produtoItem: ['kProdutoItem'],
        'produtoItem.produto': ['NomeComercial'],
      },
    })

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, 1],
        sql: 'select top (@p0) [kOp], [fkProdutoItem] from [tOrdemProducao] where [kOp] = @p1',
      },
      {
        bindings: [50, 1],
        sql: 'select top (@p0) [fkOp] from [tOperacaoOrdemProducao] where [fkOp] = @p1',
      },
      {
        bindings: [1, 1],
        sql: 'select top (@p0) [kProdutoItem], [fkProduto] from [tbl_Produto_Item] where [kProdutoItem] = @p1',
      },
      {
        bindings: [1, 1],
        sql: 'select top (@p0) [NomeComercial] from [tbl_Produto] where [kProduto] = @p1',
      },
    ])
    expect(rsp).toEqual({
      fkProdutoItem: 1,
      kOp: 1,
      operacoes: [{ fkOp: 1 }],
      produtoItem: { fkProduto: 1, kProdutoItem: 1, produto: { kProduto: 1 } },
    })
  })

  it('delete', async () => {
    tracker.on.delete('tOrdemProducao').response(1)

    const rsp = await ordemProducaoController.ordemProducao_del({
      where: [['kOp', 1]],
    })

    expect(rsp).toEqual(1)
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: 'delete from [tOrdemProducao] where [kOp] = @p0;select @@rowcount',
      },
    ])
  })

  it('update', async () => {
    tracker.on.update('tOrdemProducao').response({ id: 10 })
    // tracker.on.select('tOrdemProducao').response([{ id: 10 }])

    const rsp = await ordemProducaoController.ordemProducao_update({
      where: [['kOp', 1]],
      data: { kOp: 10 },
      returning: ['kOp'],
    })

    expect(rsp).toEqual({ id: 10 })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10, 1],
        sql: 'update [tOrdemProducao] set [kOp] = @p0 output inserted.[kOp] where [kOp] = @p1',
      },
    ])
  })

  it('create', async () => {
    tracker.on.insert('tOrdemProducao').response(1)

    const rsp = await ordemProducaoController.ordemProducao_create({
      data: { kOp: 10 },
    })

    expect(rsp).toEqual(1)
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10],
        sql: 'insert into [tOrdemProducao] ([kOp]) values (@p0)',
      },
    ])
  })
})
