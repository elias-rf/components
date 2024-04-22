import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, test } from 'vitest'
import { read } from './read.js'

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
    tracker.on.select('tbl_Seguranca_Grupo').response([{ kGrupo: '1' }])

    const rsp = await useCase({
      where: [['id', 10]],
      select: ['id', 'nome'],
    })
    expect(oftalmoDb.log()).toEqual([
      'select top (1) [kGrupo], [NomeGrupo] from [tbl_Seguranca_Grupo] where [kGrupo] = 10',
    ])
    expect(rsp).toEqual({ id: '1' })
  })
})
