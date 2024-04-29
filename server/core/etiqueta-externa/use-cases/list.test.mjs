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
    tracker.on.select('tEtiqueta').response([{ controle: '1' }])
    const rsp = await useCase({
      select: ['id', 'quantidade'],
      where: [['id', 1]],
      orderBy: [['id', 'asc']],
    })
    expect(oftalmoDb.log()).toEqual([
      'select [controle], [qtdImpressao] from [tEtiqueta] where [controle] = 1 order by [controle] asc',
    ])
    expect(rsp).toEqual([{ id: '1' }])
  })
})
