import { dbOftalmo } from '@/controllers/db/db-oftalmo.db'
import { dbPlano } from '@/controllers/db/db-plano.db'
import { knexMockMsql } from '@/mocks/connections.mock'
import { getTracker } from '@/mocks/database.mock'
import { clientMock } from '@/mocks/prim'
import { beforeEach, describe, expect, test } from 'vitest'

describe('cidadeRpc', () => {
  const tracker = getTracker()
  dbOftalmo.knex = knexMockMsql
  dbPlano.knex = knexMockMsql

  beforeEach(() => {
    dbOftalmo.startLog()
    dbPlano.startLog()
    tracker.reset()
  })

  test('list', async () => {
    tracker.on.select('cidadesERF').response([{ id: '1' }])

    const rsp = await clientMock.cidade.list({
      where: [['CdCidadeIBGE', '1']],
      orderBy: [['CdCidadeIBGE', 'asc']],
    })

    expect(rsp).toEqual([{ id: '1' }])
    expect(dbPlano.sql()).toEqual([
      "select top (50) * from [cidadesERF] where [CdCidadeIBGE] = '1' order by [CdCidadeIBGE] asc",
    ])
  })

  test('read', async () => {
    tracker.on.select('cidadesERF').response([{ id: '1' }])

    const rsp = await clientMock.cidade.read({
      where: [['CdCidadeIBGE', '1']],
      select: ['CdCidadeIBGE'],
    })

    expect(rsp).toEqual({ id: '1' })
    expect(dbPlano.sql()).toEqual([
      "select top (1) [CdCidadeIBGE] from [cidadesERF] where [CdCidadeIBGE] = '1'",
    ])
  })

  test('update', async () => {
    tracker.on.update('cidadesERF').response(1)

    const rsp = await clientMock.cidade.update({
      id: [['CdCidadeIBGE', '1']],
      data: { NmCidadeIBGE: 'test' },
    })

    expect(rsp).toEqual(1)
    expect(dbPlano.sql()).toEqual([
      "update [cidadesERF] set [NmCidadeIBGE] = 'test' where [CdCidadeIBGE] = '1';select @@rowcount",
    ])
  })

  test('create', async () => {
    tracker.on.insert('cidadesERF').response(1)

    const rsp = await clientMock.cidade.create({
      data: { CdCidadeIBGE: '1', NmCidadeIBGE: 'test' },
    })

    expect(rsp).toEqual(1)
    expect(dbPlano.sql()).toEqual([
      "insert into [cidadesERF] ([CdCidadeIBGE], [NmCidadeIBGE]) values ('1', 'test')",
    ])
  })

  test('del', async () => {
    tracker.on.delete('cidadesERF').response(1)

    const rsp = await clientMock.cidade.del({
      id: [['CdCidadeIBGE', '1']],
    })

    expect(rsp).toEqual(1)
    expect(dbPlano.sql()).toEqual([
      "delete from [cidadesERF] where [CdCidadeIBGE] = '1';select @@rowcount",
    ])
  })
})
