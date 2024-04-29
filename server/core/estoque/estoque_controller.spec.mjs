import { beforeEach, describe, expect, test } from 'vitest'
import { estoqueController } from '../../core/estoque/estoque_controller.mjs'
import { planoDb } from '../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../utils/mocks/database.mock.mjs'
import { knexMockHistory } from '../../utils/mocks/knex-mock-history.mjs'

describe('increment', () => {
  const tracker = getTracker()
  planoDb.setDriver(knexMockMsql)

  beforeEach(() => {
    tracker.reset()
  })

  test('increment', async () => {
    tracker.on.update('Estoque').response([{ EstAtual: '1' }])

    const rsp = await estoqueController.estoque_increment({
      where: [
        ['empresaId', 1],
        ['produtoId', '1'],
      ],
      increment: ['estoqueAtual', 2],
      returning: ['estoqueAtual'],
    })

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [2, 1, '1'],
        sql: 'update [Estoque] set [EstAtual] = [EstAtual] + @p0 output inserted.[EstAtual] where [CdEmpresa] = @p1 and [CdProduto] = @p2',
      },
    ])
    expect(rsp).toEqual([{ estoqueAtual: '1' }])
  })
})
