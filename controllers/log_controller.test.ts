import { dbLog } from '@/controllers/db/db-log.db'
import { knexMockMsql } from '@/mocks/connections.mock'
import { getTracker } from '@/mocks/database.mock'
import { knexMockHistory } from '@/mocks/knex-mock-history'
import { describe, expect, it } from 'vitest'
import { logController } from './log_controller'

describe('logController', () => {
  const tracker = getTracker()
  dbLog.knex = knexMockMsql

  it('list', async () => {
    tracker.reset()
    tracker.on.select('log').response([{ reqId: '1' }])

    const rsp = await logController.list({
      where: [['reqId', 1]],
      orderBy: [['reqId', 'asc']],
    })

    expect(rsp).toEqual([{ reqId: '1' }])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, 1],
        sql: 'select top (@p0) * from [log] where [reqId] = @p1 order by [reqId] asc',
      },
    ])
  })

  it('read', async () => {
    tracker.reset()
    tracker.on.select('log').response({ reqId: '1' })

    const rsp = await logController.read({
      where: [['reqId', 1]],
    })

    expect(rsp).toEqual({ reqId: '1' })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, 1],
        sql: 'select top (@p0) * from [log] where [reqId] = @p1',
      },
    ])
  })

  it('delete', async () => {
    tracker.reset()
    tracker.on.delete('log').response(1)

    const rsp = await logController.del({
      id: [['reqId', 1]],
    })

    expect(rsp).toEqual(1)
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: 'delete from [log] where [reqId] = @p0;select @@rowcount',
      },
    ])
  })

  it('update', async () => {
    tracker.reset()
    tracker.on.update('log').response({ reqId: 10 })
    tracker.on.select('log').response([{ reqId: 10 }])

    const rsp = await logController.update({
      id: [['reqId', 1]],
      data: { reqId: 10 },
      returning: ['reqId'],
    })

    expect(rsp).toEqual({ reqId: 10 })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10, 1],
        sql: 'update [log] set [reqId] = @p0 output inserted.[reqId] where [reqId] = @p1',
      },
    ])
  })

  it('create', async () => {
    tracker.reset()
    tracker.on.insert('log').response(1)

    const rsp = await logController.create({
      data: { reqId: 10 },
    })

    expect(rsp).toEqual(1)
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [10],
        sql: 'insert into [log] ([reqId]) values (@p0)',
      },
    ])
  })
})
