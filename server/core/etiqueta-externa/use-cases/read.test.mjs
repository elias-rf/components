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
    tracker.on
      .select('tEtiqueta')
      .response([{ controle: '1', qtdImpressao: 10 }])

    const rsp = await useCase({
      where: [['id', 10]],
      select: ['id', 'quantidade'],
    })
    expect(oftalmoDb.log()).toEqual([
      'select top (1) [controle], [qtdImpressao] from [tEtiqueta] where [controle] = 10',
    ])
    expect(rsp).toEqual({ id: '1', quantidade: 10 })
  })
})
