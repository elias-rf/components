import { beforeEach, describe, expect, test } from 'vitest'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { del } from './del.mjs'

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
