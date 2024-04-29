import { beforeEach, describe, expect, it } from 'vitest'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { adapterKnex } from '../../../utils/orm/adapter-knex.mjs'
import { esterilizacaoInternaDataSource } from './esterilizacao-interna.data-source.mjs'

describe('agendaTelefoneDataSource', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = esterilizacaoInternaDataSource(db)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.startLog()
  })

  it('count', async () => {
    tracker.on.select('tEsterilizacaoInterna').response([])
    const rsp = await tb.count({
      where: [[`id`, 10]],
      select: ['id', 'usuarioResultado'],
      count: ['* as ttl'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'select [kLoteEstInt], [UsuarioResultado], count(*) as [ttl] from [tEsterilizacaoInterna] where [kLoteEstInt] = 10',
    ])
  })

  it('create with select', async () => {
    tracker.on.insert('tEsterilizacaoInterna').response([{ kLoteEstInt: 10 }])
    const rsp = await tb.create({
      data: { id: 10, usuarioResultado: 'test' },
      returning: ['id'],
    })
    expect(rsp).toEqual([{ id: 10 }])
    expect(db.log()).toEqual([
      "insert into [tEsterilizacaoInterna] ([UsuarioResultado], [kLoteEstInt]) output inserted.[kLoteEstInt] values ('test', 10)",
    ])
  })

  it('create without select', async () => {
    tracker.on.insert('tEsterilizacaoInterna').response([])
    const rsp = await tb.create({
      data: { id: 1 },
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'insert into [tEsterilizacaoInterna] ([kLoteEstInt]) values (1)',
    ])
  })

  it('del', async () => {
    tracker.on.delete('tEsterilizacaoInterna').response(1)
    const rsp = await tb.del({
      where: [['id', 10]],
    })
    expect(rsp).toEqual(1)
    expect(db.log()).toEqual([
      'delete from [tEsterilizacaoInterna] where [kLoteEstInt] = 10;select @@rowcount',
    ])
  })

  it('increment', async () => {
    tracker.on.update('tEsterilizacaoInterna').response([])
    const rsp = await tb.increment({
      where: [[`id`, 10]],
      increment: [`id`, 2],
      returning: ['id'],
    })
    expect(rsp).toEqual([])
    expect(db.log()).toEqual([
      'update [tEsterilizacaoInterna] set [kLoteEstInt] = [kLoteEstInt] + 2 output inserted.[kLoteEstInt] where [kLoteEstInt] = 10',
    ])
  })

  it('list', async () => {
    tracker.on
      .select('from [tEsterilizacaoInterna]')
      .response([{ kLoteEstInt: 1 }])
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
      "select top (50) [kLoteEstInt], [UsuarioResultado] from [tEsterilizacaoInterna] where [kLoteEstInt] = 1 and [UsuarioResultado] > 'a' order by [kLoteEstInt] asc, [UsuarioResultado] desc",
    ])
  })

  it('read', async () => {
    tracker.on.select('tEsterilizacaoInterna').response({ kLoteEstInt: '1' })
    const rsp = await tb.read({
      where: [['id', 10]],
      select: ['id', 'usuarioResultado'],
    })
    expect(rsp).toEqual({ id: '1' })
    expect(db.log()).toEqual([
      'select top (1) [kLoteEstInt], [UsuarioResultado] from [tEsterilizacaoInterna] where [kLoteEstInt] = 10',
    ])
  })

  it('update', async () => {
    tracker.on.update('tEsterilizacaoInterna').response([{ kLoteEstInt: 10 }])
    const rsp = await tb.update({
      where: [['id', 10]],
      data: { id: 11 },
      returning: ['id'],
    })
    expect(rsp).toEqual([{ id: 10 }])
    expect(db.log()).toEqual([
      'update [tEsterilizacaoInterna] set [kLoteEstInt] = 11 output inserted.[kLoteEstInt] where [kLoteEstInt] = 10',
    ])
  })
})
