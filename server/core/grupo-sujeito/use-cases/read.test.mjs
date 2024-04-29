import { beforeEach, describe, expect, test } from 'vitest'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { read } from './read.mjs'

describe('read', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = read(dataSource)

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('read', async () => {
    tracker.on.select('group').response([{ idGroup: '1' }])

    const rsp = await useCase({
      where: [
        ['grupoId', 10],
        ['sujeitoId', '1'],
      ],
      select: ['grupoId', 'sujeitoId'],
    })
    expect(rsp).toEqual({ grupoId: '1' })
    expect(oftalmoDb.log()).toEqual([
      "select top (1) [idGroup], [idSubject] from [groupSubject] where [idGroup] = 10 and [idSubject] = '1'",
    ])
  })
})
