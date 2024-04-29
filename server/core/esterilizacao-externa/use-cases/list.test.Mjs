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

  test('lista sem argumentos', async () => {
    tracker.on.select('tEsterilizacaoExterna').response([{ kLoteEstExt: 1 }])
    const rsp = await useCase({})
    expect(oftalmoDb.log()).toEqual(['select * from [tEsterilizacaoExterna]'])
    expect(rsp).toEqual([{ id: 1 }])
  })

  test('lista com argumentos', async () => {
    tracker.on.select('tEsterilizacaoExterna').response([{ kLoteEstExt: 1 }])
    const rsp = await useCase({
      where: [['id', 1]],
      select: ['id'],
    })
    expect(oftalmoDb.log()).toEqual([
      'select [kLoteEstExt] from [tEsterilizacaoExterna] where [kLoteEstExt] = 1',
    ])
    expect(rsp).toEqual([{ id: 1 }])
  })
})
