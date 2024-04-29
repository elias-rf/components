import { beforeEach, describe, expect, it } from 'vitest'
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
    planoDb.startLog()
    tracker.reset()
  })

  it('read', async () => {
    tracker.on.select('CadCli').response({ CdCliente: '1' })
    const rsp = await useCase({
      where: [['id', 10]],
      select: ['id', 'razaoSocial'],
    })
    expect(rsp).toEqual({ id: '1' })
    expect(planoDb.log()).toEqual([
      'select top (1) [CdCliente], [RzSocial] from [CadCli] where [CdCliente] = 10',
    ])
  })
})
