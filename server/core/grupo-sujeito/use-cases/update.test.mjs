import { beforeEach, describe, expect, test } from 'vitest'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { update } from './update.mjs'

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
