import { dbLog } from '@/controllers/db/db-log.db.js'
import { knexMockMsql } from '@/mocks/connections.mock.js'
import { getTracker } from '@/mocks/database.mock.js'
import { knexMockHistory } from '@/mocks/knex-mock-history.js'
import { describe, expect, it } from 'vitest'
import { logController } from './log_controller.js'

describe('logController', () => {
  const tracker = getTracker()
  dbLog.setDriver(knexMockMsql)

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

    const rsp = await logController.del$({
      where: [['reqId', 1]],
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

    const rsp = await logController.update$({
      where: [['reqId', 1]],
      data: { reqId: 10 },
      select: ['reqId'],
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

    const rsp = await logController.create$({
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
