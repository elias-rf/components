import { dbPlano } from '@/controllers/db/db-plano.db.js'
import { estoqueController } from '@/controllers/estoque_controller.js'
import { knexMockMsql } from '@/mocks/connections.mock.js'
import { getTracker } from '@/mocks/database.mock.js'
import { knexMockHistory } from '@/mocks/knex-mock-history.js'
import { beforeEach, describe, expect, test } from 'vitest'

describe('EstoqueModel', () => {
  const tracker = getTracker()
  dbPlano.setDriver(knexMockMsql)

  beforeEach(() => {
    tracker.reset()
  })

  test('increment', async () => {
    tracker.on.update('Estoque').response([{ EstAtual: '1' }])

    const rsp = await estoqueController.estoque_increment({
      where: [
        ['CdProduto', '1'],
        ['CdEmpresa', 1],
      ],
      increment: ['EstAtual', 2],
      returning: ['EstAtual'],
    })

    expect(rsp).toEqual([{ EstAtual: '1' }])

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [2, '1', 1],
        sql: 'update [Estoque] set [EstAtual] = [EstAtual] + @p0 output inserted.[EstAtual] where [CdProduto] = @p1 and [CdEmpresa] = @p2',
      },
    ])
  })
})
