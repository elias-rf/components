import { etiquetaExternaController } from '@/core/etiqueta-externa_controller.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { knexMockHistory } from '@/utils/mocks/knex-mock-history.js'
import { beforeEach, describe, expect, it } from 'vitest'

describe('ordemProducaoModel', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)

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
        bindings: ['1'],
        sql: 'select * from [tEtiqueta] where [controle] = @p0 order by [controle] asc',
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
