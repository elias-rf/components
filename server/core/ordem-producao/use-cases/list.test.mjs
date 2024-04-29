import { beforeEach, describe, expect, test } from 'vitest'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { list } from './list.mjs'

describe('list useCase', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = list(dataSource)

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('list', async () => {
    tracker.on.select('tOrdemProducao').response([{ kOp: '1' }])
    const rsp = await useCase({
      select: ['id'],
      where: [['id', 1]],
      orderBy: [['id', 'asc']],
    })
    expect(rsp).toEqual([{ id: '1' }])
    expect(oftalmoDb.log()).toEqual([
      'select [kOp] from [tOrdemProducao] where [kOp] = 1 order by [kOp] asc',
    ])
  })

  // test('list with include', async () => {
  //   tracker.on.select('tOrdemProducao').response([{ kOp: '1' }, { kOp: '2' }])
  //   tracker.on.select('tOperacaoOrdemProducao').response([{ fkOp: '1' }])

  //   const rsp = await ordemProducaoController.ordemProducao_list({
  //     where: [['id', 1]],
  //     orderBy: [['id', 'asc']],
  //     include: { operacoes: ['fkOp'] },
  //   })

  //   expect(knexMockHistory(tracker)).toEqual([
  //     {
  //       bindings: [1],
  //       sql: 'select [kOp] from [tOrdemProducao] where [kOp] = @p0 order by [kOp] asc',
  //     },
  //     {
  //       bindings: ['1'],
  //       sql: 'select [fkOp] from [tOperacaoOrdemProducao] where [fkOp] = @p0',
  //     },
  //     {
  //       bindings: ['2'],
  //       sql: 'select [fkOp] from [tOperacaoOrdemProducao] where [fkOp] = @p0',
  //     },
  //   ])
  //   expect(rsp).toEqual([
  //     { kOp: '1', operacoes: [{ fkOp: '1' }] },
  //     { kOp: '2', operacoes: [{ fkOp: '1' }] },
  //   ])
  // })
})
