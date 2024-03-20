import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { list } from './list.js'

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
    tracker.on.select('LotesNota').response([{ NumNota: 1 }])
    const rsp = await useCase({})
    expect(rsp).toEqual([{ numero: 1 }])
    expect(planoDb.log()).toEqual(['select * from [LotesNota]'])
  })

  test('lista com argumentos', async () => {
    tracker.on.select('LotesNota').response([{ NumNota: 1 }])
    const rsp = await useCase({
      where: [['numero', 1]],
      select: ['numero'],
    })
    expect(rsp).toEqual([{ numero: 1 }])
    expect(planoDb.log()).toEqual([
      'select [NumNota] from [LotesNota] where [NumNota] = 1',
    ])
  })
})
