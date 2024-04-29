import { beforeEach, describe, expect, test } from 'vitest'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { create } from './create.mjs'

describe('create', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = create(dataSource)

  beforeEach(() => {
    planoDb.startLog()
    tracker.reset()
  })

  test('create', async () => {
    tracker.on.insert('LotesNotaEntrada').response([])

    const rsp = await useCase({
      data: { empresaId: 10 },
    })

    expect(planoDb.log()).toEqual([
      'insert into [LotesNotaEntrada] ([CdFilial]) values (10)',
    ])
    expect(rsp).toEqual([])
  })
})
