import { dbOftalmo } from '@/controllers/db-oftalmo.db'
import { etiquetaExternaController } from '@/controllers/etiqueta-externa.controller'
import { knexMockMsql } from '@/mocks/connections.mock'
import { getTracker } from '@/mocks/database.mock'
import { knexMockHistory } from '@/mocks/knex-mock-history'
import { beforeEach, describe, expect, it } from 'vitest'

describe('ordemProducaoModel', () => {
  const tracker = getTracker()
  dbOftalmo.knex = knexMockMsql

  beforeEach(() => {
    tracker.reset()
  })

  it('list', async () => {
    tracker.on.select('tEtiqueta').response([{ controle: '1' }])
    const rsp = await etiquetaExternaController.list({
      where: [['controle', '1']],
      orderBy: [['controle', 'asc']],
    })

    expect(rsp).toEqual([{ controle: '1' }])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, '1'],
        sql: 'select top (@p0) * from [tEtiqueta] where [controle] = @p1 order by [controle] asc',
      },
    ])
  })

  it('read', async () => {
    tracker.on.select('tEtiqueta').response([{ controle: '1' }])
    const rsp = await etiquetaExternaController.read({
      id: [['controle', '1']],
    })

    expect(rsp).toEqual({ controle: '1' })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, '1'],
        sql: 'select top (@p0) * from [tEtiqueta] where [controle] = @p1',
      },
    ])
  })
})
