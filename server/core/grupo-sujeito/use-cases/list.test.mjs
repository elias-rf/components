import { beforeEach, describe, expect, test } from 'vitest'
import { dataSource } from '../../../data/index.mjs'
import { oftalmoDb } from '../../../data/oftalmo/oftalmo.db.mjs'
import { planoDb } from '../../../data/plano/plano.db.mjs'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { list } from './list.mjs'

describe('list', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = list(dataSource)

  beforeEach(() => {
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('list', async () => {
    tracker.on.select('group').response([{ idGroup: '1' }])
    const rsp = await useCase({
      select: ['grupoId', 'sujeitoId'],
      where: [['grupoId', 1]],
      orderBy: [['grupoId', 'asc']],
    })
    expect(oftalmoDb.log()).toEqual([
      'select [idGroup], [idSubject] from [groupSubject] where [idGroup] = 1 order by [idGroup] asc',
    ])
    expect(rsp).toEqual([{ grupoId: '1' }])
  })
})
