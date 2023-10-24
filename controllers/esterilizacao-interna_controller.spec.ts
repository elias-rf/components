import { dbOftalmo } from '@/controllers/db/db-oftalmo.db'
import { knexMockMsql } from '@/mocks/connections.mock'
import { getTracker } from '@/mocks/database.mock'
import { knexMockHistory } from '@/mocks/knex-mock-history'
import { beforeEach, describe, expect, test } from 'vitest'
import { esterilizacaoInternaController } from './esterilizacao-interna_controller'

describe('esterilizacaoInterna', () => {
  const tracker = getTracker()
  dbOftalmo.knex = knexMockMsql

  beforeEach(() => {
    tracker.reset()
  })

  test('diario', async () => {
    tracker.on
      .select('tOperacaoOrdemProducao')
      .response([{ quantidade: 1, dia: new Date('2020-01-01T00:00:00') }])

    const rsp = await esterilizacaoInternaController.diario({
      inicio: '2020-01-01',
      fim: '2020-01-31',
    })

    expect(rsp).toEqual([
      { quantidade: 1, dia: '2020-01-01', dia_semana: 'qua' },
    ])

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ['2020-01-01', '2020-01-31'],
        sql: 'select DataInicio as dia, Sum(QtdConforme) AS quantidade from [tOperacaoOrdemProducao] where [DataInicio] between @p0 and @p1 and fkOperacao in (3058, 3158) group by [DataInicio] order by [DataInicio] desc',
      },
    ])
  })

  test('mensal', async () => {
    tracker.on
      .select('tOperacaoOrdemProducao')
      .response([{ quantidade: 1, dia: new Date('2020-01-01T00:00:00') }])
    const rsp = await esterilizacaoInternaController.mensal({
      mes: '2020-01',
    })

    expect(rsp).toEqual([
      { quantidade: 1, dia: new Date('2020-01-01T00:00:00') },
    ])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ['2020-01'],
        sql: 'select CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade from [tOperacaoOrdemProducao] where fkOperacao in (3058, 3158) and CONVERT(CHAR(7),[DataInicio],120)>=@p0 group by CONVERT(CHAR(7),[DataInicio],120) order by CONVERT(CHAR(7),[DataInicio],120) desc',
      },
    ])
  })

  test('modelo', async () => {
    tracker.on.select('tOperacaoOrdemProducao').response([])
    const rsp = await esterilizacaoInternaController.modelo({
      data: '2020-01-01',
      produto: '01',
    })

    expect(rsp).toEqual([])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ['2020-01-01', '01', 3058, 3158],
        sql: 'select [tbl_Produto_Item].[NomeProdutoItem] as [modelo], sum([tOperacaoOrdemProducao].[QtdConforme]) as [quantidade] from ((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp where [DataInicio] = @p0 and [fkCategoria] = @p1 and [fkOperacao] in (@p2, @p3) group by [tbl_Produto_Item].[NomeProdutoItem], [tOperacaoOrdemProducao].[DataInicio], [tbl_Produto].[fkCategoria]',
      },
    ])
  })

  test('produto', async () => {
    tracker.on.select('tOperacaoOrdemProducao').response([])
    const rsp = await esterilizacaoInternaController.produto({
      data: '2020-01-01',
    })

    expect(rsp).toEqual([])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ['2020-01-01', 3058, 3158],
        sql: 'select [tbl_Produto].[fkCategoria] as [produto], sum([tOperacaoOrdemProducao].[QtdConforme]) as [quantidade] from ((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp where [DataInicio] = @p0 and [fkOperacao] in (@p1, @p2) group by [tbl_Produto].[fkCategoria], [tOperacaoOrdemProducao].[DataInicio] order by [tbl_Produto].[fkCategoria] asc',
      },
    ])
  })
})
