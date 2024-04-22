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
    tracker.on.select('CadPro').response([{ CdProduto: 1 }])
    const rsp = await useCase({})
    expect(rsp).toEqual([{ id: 1 }])
    expect(planoDb.log()).toEqual(['select * from [CadPro]'])
  })

  test('lista com argumentos', async () => {
    tracker.on.select('CadPro').response([{ CdProduto: 1 }])
    const rsp = await useCase({
      where: [['id', 1]],
      select: ['id'],
    })
    expect(rsp).toEqual([{ id: 1 }])
    expect(planoDb.log()).toEqual([
      'select [CdProduto] from [CadPro] where [CdProduto] = 1',
    ])
  })
})
