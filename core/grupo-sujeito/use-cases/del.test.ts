import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { del } from './del.js'

describe('delete useCase', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = del(dataSource)

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('delete', async () => {
    tracker.on.delete('group').response(1)

    const rsp = await useCase({
      where: [
        ['grupoId', 1],
        ['sujeitoId', '1'],
      ],
    })

    expect(rsp).toEqual(1)
    expect(oftalmoDb.log()).toEqual([
      "delete from [groupSubject] where [idGroup] = 1 and [idSubject] = '1';select @@rowcount",
    ])
  })
})
