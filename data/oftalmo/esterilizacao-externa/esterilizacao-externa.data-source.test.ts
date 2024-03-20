import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { adapterKnex } from '@/utils/orm/adapter-knex.js'
import { beforeEach, describe, expect, it } from 'vitest'
import { esterilizacaoExternaDataSource } from './esterilizacao-externa.data-source.js'

describe('agendaTelefoneDataSource', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = esterilizacaoExternaDataSource(db)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.startLog()
  })

  it('count', async () => {
    tracker.on.select('tEsterilizacaoExterna').response([])
    const rsp = await tb.count({
      where: [[`id`, 10]],
      select: ['id', 'usuarioResultado'],
      count: ['* as ttl'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'select [kLoteEstExt], [UsuarioResultado], count(*) as [ttl] from [tEsterilizacaoExterna] where [kLoteEstExt] = 10',
    ])
  })

  it('create with select', async () => {
    tracker.on.insert('tEsterilizacaoExterna').response([{ kLoteEstExt: 10 }])
    const rsp = await tb.create({
      data: { id: 10, usuarioResultado: 'test' },
      returning: ['id'],
    })
    expect(rsp).toEqual([{ id: 10 }])
    expect(db.log()).toEqual([
      "insert into [tEsterilizacaoExterna] ([UsuarioResultado], [kLoteEstExt]) output inserted.[kLoteEstExt] values ('test', 10)",
    ])
  })

  it('create without select', async () => {
    tracker.on.insert('tEsterilizacaoExterna').response([])
    const rsp = await tb.create({
      data: { id: 1 },
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'insert into [tEsterilizacaoExterna] ([kLoteEstExt]) values (1)',
    ])
  })

  it('del', async () => {
    tracker.on.delete('tEsterilizacaoExterna').response(1)
    const rsp = await tb.del({
      where: [['id', 10]],
    })
    expect(rsp).toEqual(1)
    expect(db.log()).toEqual([
      'delete from [tEsterilizacaoExterna] where [kLoteEstExt] = 10;select @@rowcount',
    ])
  })

  it('increment', async () => {
    tracker.on.update('tEsterilizacaoExterna').response([])
    const rsp = await tb.increment({
      where: [[`id`, 10]],
      increment: [`id`, 2],
      returning: ['id'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'update [tEsterilizacaoExterna] set [kLoteEstExt] = [kLoteEstExt] + 2 output inserted.[kLoteEstExt] where [kLoteEstExt] = 10',
    ])
  })

  it('list', async () => {
    tracker.on
      .select('from [tEsterilizacaoExterna]')
      .response([{ kLoteEstExt: 1 }])
    const rsp = await tb.list({
      where: [
        ['id', 1],
        ['usuarioResultado', '>', 'a'],
      ],
      orderBy: [
        ['id', 'asc'],
        ['usuarioResultado', 'desc'],
      ],
      limit: 50,
      select: ['id', 'usuarioResultado'],
    })

    expect(rsp).toEqual([{ id: 1 }])
    expect(db.log()).toEqual([
      "select top (50) [kLoteEstExt], [UsuarioResultado] from [tEsterilizacaoExterna] where [kLoteEstExt] = 1 and [UsuarioResultado] > 'a' order by [kLoteEstExt] asc, [UsuarioResultado] desc",
    ])
  })

  it('read', async () => {
    tracker.on.select('tEsterilizacaoExterna').response({ kLoteEstExt: '1' })
    const rsp = await tb.read({
      where: [['id', 10]],
      select: ['id', 'usuarioResultado'],
    })
    expect(rsp).toEqual({ id: '1' })
    expect(db.log()).toEqual([
      'select top (1) [kLoteEstExt], [UsuarioResultado] from [tEsterilizacaoExterna] where [kLoteEstExt] = 10',
    ])
  })

  it('update', async () => {
    tracker.on.update('tEsterilizacaoExterna').response([{ kLoteEstExt: 10 }])
    const rsp = await tb.update({
      where: [['id', 10]],
      data: { id: 11 },
      returning: ['id'],
    })
    expect(rsp).toEqual([{ id: 10 }])
    expect(db.log()).toEqual([
      'update [tEsterilizacaoExterna] set [kLoteEstExt] = 11 output inserted.[kLoteEstExt] where [kLoteEstExt] = 10',
    ])
  })
})
