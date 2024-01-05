import { dbSys } from '@/core/db/db-sys.db.js'
import { sysResourceController } from '@/core/sys-resource_controller.js'
import { knexMockMsql } from '@/mocks/connections.mock.js'
import { getTracker } from '@/mocks/database.mock.js'
import { knexMockHistory } from '@/mocks/knex-mock-history.js'
import { describe, expect, it } from 'vitest'

describe('SysResourceModel', () => {
  const tracker = getTracker()
  dbSys.setDriver(knexMockMsql)

  it('list', async () => {
    tracker.reset()
    tracker.on.select('resource').response([{ resource_id: '1' }])

    const rsp = await sysResourceController.sysResource_list({
      where: [['resource_id', '1']],
      orderBy: [['resource_id', 'asc']],
    })

    expect(rsp).toEqual([{ resource_id: '1' }])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, '1'],
        sql: 'select top (@p0) * from [resource] where [resource_id] = @p1 order by [resource_id] asc',
      },
    ])
  })

  it('read', async () => {
    tracker.reset()
    tracker.on.select('resource').response([{ resource_id: '1' }])

    const rsp = await sysResourceController.sysResource_read({
      where: [['resource_id', '1']],
    })

    expect(rsp).toEqual({ resource_id: '1' })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, '1'],
        sql: 'select top (@p0) * from [resource] where [resource_id] = @p1',
      },
    ])
  })

  it('delete', async () => {
    tracker.reset()
    tracker.on.delete('resource').response(1)

    const rsp = await sysResourceController.sysResource_del({
      where: [['resource_id', '1']],
    })

    expect(rsp).toEqual(1)
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ['1'],
        sql: 'delete from [resource] where [resource_id] = @p0;select @@rowcount',
      },
    ])
  })

  it('update', async () => {
    tracker.reset()
    tracker.on.update('resource').response({ resource_id: '10' })
    tracker.on.select('resource').response([{ resource_id: '10' }])

    const rsp = await sysResourceController.sysResource_update({
      where: [['resource_id', '10']],
      data: { resource_id: '10' },
      returning: ['resource_id'],
    })

    expect(rsp).toEqual({ resource_id: '10' })
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ['10', '10'],
        sql: 'update [resource] set [resource_id] = @p0 output inserted.[resource_id] where [resource_id] = @p1',
      },
    ])
  })

  it('create', async () => {
    tracker.reset()
    tracker.on.insert('resource').response(1)

    const rsp = await sysResourceController.sysResource_create({
      data: { resource_id: '10' },
    })

    expect(rsp).toEqual(1)
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ['10'],
        sql: 'insert into [resource] ([resource_id]) values (@p0)',
      },
    ])
  })
})
