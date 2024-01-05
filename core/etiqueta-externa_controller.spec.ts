import { dbOftalmo } from '@/core/db/db-oftalmo.db.js'
import { etiquetaExternaController } from '@/core/etiqueta-externa_controller.js'
import { knexMockMsql } from '@/mocks/connections.mock.js'
import { getTracker } from '@/mocks/database.mock.js'
import { knexMockHistory } from '@/mocks/knex-mock-history.js'
import { beforeEach, describe, expect, it } from 'vitest'

describe('ordemProducaoModel', () => {
  const tracker = getTracker()
  dbOftalmo.setDriver(knexMockMsql)

  beforeEach(() => {
    tracker.reset()
  })

  it('list', async () => {
    tracker.on.select('tEtiqueta').response([{ controle: '1' }])
    const rsp = await etiquetaExternaController.etiquetaExterna_list({
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
    const rsp = await etiquetaExternaController.etiquetaExterna_read({
      where: [['controle', '1']],
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
