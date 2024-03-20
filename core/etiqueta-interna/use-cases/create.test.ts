import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { create } from './create.js'

describe('create', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = create(dataSource)

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('create', async () => {
    tracker.on.insert('tbl_producao_etiqueta').response([])

    const rsp = await useCase({
      data: { id: 10 },
    })

    expect(rsp).toEqual([])
    expect(oftalmoDb.log()).toEqual([
      'insert into [tbl_producao_etiqueta] ([NumControle]) values (10)',
    ])
  })
})
