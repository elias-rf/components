import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { beforeEach, describe, expect, it } from 'vitest'
import { read } from './read.js'

describe('read', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = read(dataSource)

  beforeEach(() => {
    planoDb.startLog()
    tracker.reset()
  })

  it('read', async () => {
    tracker.on.select('NfMestre').response({ NroNf: '1' })
    const rsp = await useCase({
      where: [
        ['empresaId', 1],
        ['modelo', '1'],
        ['numero', 1],
        ['serie', 'a'],
      ],
      select: ['numero'],
    })
    expect(planoDb.log()).toEqual([
      "select top (1) [NroNf] from [NfMestre] where [CdEmpresa] = 1 and [Modelo] = '1' and [NroNf] = 1 and [Serie] = 'a'",
    ])
    expect(rsp).toEqual({ numero: '1' })
  })
})
