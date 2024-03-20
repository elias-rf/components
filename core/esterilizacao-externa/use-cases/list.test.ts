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
