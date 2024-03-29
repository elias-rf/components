import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { update } from './update.js'

describe('update', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = update(dataSource)

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('update', async () => {
    tracker.on.update('group').response([{ idGroup: 10 }])
    oftalmoDb.startLog()
    const rsp = await useCase({
      where: [
        ['grupoId', 1],
        ['sujeitoId', '1'],
      ],
      data: { grupoId: 10 },
      returning: ['grupoId'],
      debug: false,
    })
    expect(oftalmoDb.log()).toEqual([
      "update [groupSubject] set [idGroup] = 10 output inserted.[idGroup] where [idGroup] = 1 and [idSubject] = '1'",
    ])
    expect(rsp).toEqual([{ grupoId: 10 }])
  })
})
