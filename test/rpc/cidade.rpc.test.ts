import { dbOftalmo } from '@/controllers/db/db-oftalmo.db.js'
import { dbPlano } from '@/controllers/db/db-plano.db.js'
import { clientRpcMock } from '@/mocks/client-rpc.mock.js'
import { knexMockMsql } from '@/mocks/connections.mock.js'
import { getTracker } from '@/mocks/database.mock.js'
import { beforeEach, describe, expect, test } from 'vitest'

describe('cidadeRpc', () => {
  const tracker = getTracker()
  dbOftalmo.setDriver(knexMockMsql)
  dbPlano.setDriver(knexMockMsql)

  beforeEach(() => {
    dbOftalmo.startLog()
    dbPlano.startLog()
    tracker.reset()
  })

  test('list', async () => {
    tracker.on.select('cidadesERF').response([{ id: '1' }])

    const rsp = await clientRpcMock.request('cidade_list', {
      where: [['CdCidadeIBGE', '1']],
      orderBy: [['CdCidadeIBGE', 'asc']],
    })

    expect(rsp).toEqual([{ id: '1' }])
    expect(dbPlano.log()).toEqual([
      "select top (50) * from [cidadesERF] where [CdCidadeIBGE] = '1' order by [CdCidadeIBGE] asc",
    ])
  })

  test('read', async () => {
    tracker.on.select('cidadesERF').response([{ id: '1' }])

    const rsp = await clientRpcMock.request('cidade_read', {
      where: [['CdCidadeIBGE', '1']],
      select: ['CdCidadeIBGE'],
    })

    expect(rsp).toEqual({ id: '1' })
    expect(dbPlano.log()).toEqual([
      "select top (1) [CdCidadeIBGE] from [cidadesERF] where [CdCidadeIBGE] = '1'",
    ])
  })

  test('update', async () => {
    tracker.on.update('cidadesERF').response(1)

    const rsp = await clientRpcMock.request('cidade_update', {
      where: [['CdCidadeIBGE', '1']],
      data: { NmCidadeIBGE: 'test' },
    })

    expect(rsp).toEqual(1)
    expect(dbPlano.log()).toEqual([
      "update [cidadesERF] set [NmCidadeIBGE] = 'test' where [CdCidadeIBGE] = '1';select @@rowcount",
    ])
  })

  test('create', async () => {
    tracker.on.insert('cidadesERF').response(1)

    const rsp = await clientRpcMock.request('cidade_create', {
      data: { CdCidadeIBGE: '1', NmCidadeIBGE: 'test' },
    })

    expect(rsp).toEqual(1)
    expect(dbPlano.log()).toEqual([
      "insert into [cidadesERF] ([CdCidadeIBGE], [NmCidadeIBGE]) values ('1', 'test')",
    ])
  })

  test('del', async () => {
    tracker.on.delete('cidadesERF').response(1)

    const rsp = await clientRpcMock.request('cidade_del', {
      where: [['CdCidadeIBGE', '1']],
    })

    expect(rsp).toEqual(1)
    expect(dbPlano.log()).toEqual([
      "delete from [cidadesERF] where [CdCidadeIBGE] = '1';select @@rowcount",
    ])
  })
})
