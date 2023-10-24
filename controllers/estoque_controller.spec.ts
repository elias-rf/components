import { dbPlano } from '@/controllers/db/db-plano.db'
import { estoqueController } from '@/controllers/estoque_controller'
import { knexMockMsql } from '@/mocks/connections.mock'
import { getTracker } from '@/mocks/database.mock'
import { knexMockHistory } from '@/mocks/knex-mock-history'
import { beforeEach, describe, expect, test } from 'vitest'

describe('EstoqueModel', () => {
  const tracker = getTracker()
  dbPlano.knex = knexMockMsql

  beforeEach(() => {
    tracker.reset()
  })

  test('increment', async () => {
    tracker.on.update('Estoque').response([{ EstAtual: '1' }])

    const rsp = await estoqueController.increment({
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
        sql: `update [Estoque] set [EstAtual] = [EstAtual] + @p0 output inserted.[EstAtual] where [CdProduto] = @p1 and [CdEmpresa] = @p2`,
      },
    ])
  })
})
