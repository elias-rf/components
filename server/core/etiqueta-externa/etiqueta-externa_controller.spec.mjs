import { beforeEach, describe, expect, it } from 'vitest'
import { etiquetaExternaController } from '../../core/etiqueta-externa/etiqueta-externa_controller.mjs'
import { oftalmoDb } from '../../data/oftalmo/oftalmo.db.mjs'
import { knexMockMsql } from '../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../utils/mocks/database.mock.mjs'
import { knexMockHistory } from '../../utils/mocks/knex-mock-history.mjs'

describe('ordemProducaoModel', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)

  beforeEach(() => {
    tracker.reset()
  })

  it('list', async () => {
    tracker.on.select('tEtiqueta').response([{ controle: '1' }])
    const rsp = await etiquetaExternaController.etiquetaExterna_list({
      where: [['id', '1']],
      orderBy: [['id', 'asc']],
    })

    expect(rsp).toEqual([{ id: '1' }])
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
      where: [['id', '1']],
    })

    expect(rsp).toEqual({ id: '1' })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, '1'],
        sql: 'select top (@p0) * from [tEtiqueta] where [controle] = @p1',
      },
    ])
  })
})
