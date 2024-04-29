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
    planoDb.startLog()
    tracker.reset()
  })

  test('lista sem argumentos', async () => {
    tracker.on.select('MestreNota').response([{ NumNota: 1 }])
    const rsp = await useCase({})
    expect(rsp).toEqual([{ numero: 1 }])
    expect(planoDb.log()).toEqual(['select * from [MestreNota]'])
  })

  test('lista com argumentos', async () => {
    tracker.on.select('MestreNota').response([{ NumNota: 1 }])
    const rsp = await useCase({
      where: [['numero', 1]],
      select: ['numero'],
    })
    expect(rsp).toEqual([{ numero: 1 }])
    expect(planoDb.log()).toEqual([
      'select [NumNota] from [MestreNota] where [NumNota] = 1',
    ])
  })
})
