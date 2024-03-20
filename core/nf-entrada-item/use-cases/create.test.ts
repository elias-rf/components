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
    planoDb.startLog()
    tracker.reset()
  })

  test('create', async () => {
    tracker.on.insert('NFItem').response([])

    const rsp = await useCase({
      data: { empresaId: 10 },
    })

    expect(planoDb.log()).toEqual([
      'insert into [NFItem] ([CdEmpresa]) values (10)',
    ])
    expect(rsp).toEqual([])
  })
})
