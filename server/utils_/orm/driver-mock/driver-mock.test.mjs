import { describe, expect, it } from 'vitest'
import { driverMock } from './driver-mock.mjs'

describe('driver-mock', () => {
  const data = {
    user: [
      { id: 2, name: 'Jane' },
      { id: 1, name: 'John' },
      { id: 3, name: 'Paul' },
    ],
  }
  const db = driverMock(data)

  it('deve disparar Error quando tabela não for indicada', async () => {
    await expect(db).rejects.toThrow('from is required')
  })

  it('deve disparar Error quando tabela for desconhecida', async () => {
    await expect(db.from('unknown')).rejects.toThrow('unknown table')
  })

  it('deve excutar query', async () => {
    const query = db
      .from('user')
      .select(['id'])
      .orderBy([['name', 'asc']])
      .where([['id', '<=', 2]])

    expect(query._query).toEqual({
      from: 'user',
      select: ['id'],
      orderBy: [['name', 'asc']],
      where: [['id', '<=', 2]],
    })
    expect(await query).toEqual([{ id: 2 }, { id: 1 }])
  })

  describe('select', () => {
    it('deve selecionar 1 campo', async () => {
      const query = db.from('user').select(['id'])
      expect(query._query).toEqual({
        from: 'user',
        select: ['id'],
      })
      expect(await query).toEqual([{ id: 2 }, { id: 1 }, { id: 3 }])
    })
    it('deve selecionar 2 campos', async () => {
      const query = db.from('user').select(['id', 'name'])
      expect(query._query).toEqual({
        from: 'user',
        select: ['id', 'name'],
      })
      expect(await query).toEqual(data.user)
    })
    it('deve selecionar todos os campos', async () => {
      const query = db.from('user').select(['*'])
      expect(query._query).toEqual({
        from: 'user',
        select: ['*'],
      })
      expect(await query).toEqual(data.user)
    })
  })

  describe('orderBy', () => {
    it('deve ordernar number asc e desc', async () => {
      const query = db.from('user').orderBy([['id', 'asc']])
      expect(query._query).toEqual({
        from: 'user',
        orderBy: [['id', 'asc']],
      })
      expect(await query).toEqual([
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Paul' },
      ])
      const query2 = db.from('user').orderBy([['id', 'desc']])
      expect(query2._query).toEqual({
        from: 'user',
        orderBy: [['id', 'desc']],
      })
      expect(await query2).toEqual([
        { id: 3, name: 'Paul' },
        { id: 2, name: 'Jane' },
        { id: 1, name: 'John' },
      ])
    })
    it('deve ordernar string asc e desc', async () => {
      const query = db.from('user').orderBy([['name', 'asc']])
      expect(query._query).toEqual({
        from: 'user',
        orderBy: [['name', 'asc']],
      })
      expect(await db.from('user').orderBy([['name', 'asc']])).toEqual([
        { id: 2, name: 'Jane' },
        { id: 1, name: 'John' },
        { id: 3, name: 'Paul' },
      ])
      const query2 = db.from('user').orderBy([['name', 'desc']])
      expect(query2._query).toEqual({
        from: 'user',
        orderBy: [['name', 'desc']],
      })
      expect(await db.from('user').orderBy([['name', 'desc']])).toEqual([
        { id: 3, name: 'Paul' },
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
      ])
    })
  })

  describe('where', () => {
    it('deve filtrar por 1 parametro', async () => {
      const query = db.from('user').where([['id', 2]])
      expect(query._query).toEqual({
        from: 'user',
        where: [['id', 2]],
      })
      expect(await query).toEqual([{ id: 2, name: 'Jane' }])
    })
    it('deve filtrar por 2 parametros', async () => {
      const query = db.from('user').where([
        ['id', 2],
        ['name', 'Jane'],
      ])
      expect(query._query).toEqual({
        from: 'user',
        where: [
          ['id', 2],
          ['name', 'Jane'],
        ],
      })
      expect(await query).toEqual([{ id: 2, name: 'Jane' }])
    })
    it('deve filtrar com relações', async () => {
      expect(
        await db.from('user').where([
          ['id', '>', 1],
          ['name', 'Jane'],
        ])
      ).toEqual([{ id: 2, name: 'Jane' }])
    })
  })
  describe('insert', () => {
    it('deve inserir um registro', async () => {
      const query = db.from('user').insert({ id: 9, name: 'Zulu' })
      expect(await query).toEqual([
        { id: 2, name: 'Jane' },
        { id: 1, name: 'John' },
        { id: 3, name: 'Paul' },
        { id: 9, name: 'Zulu' },
      ])
    })
  })

  describe('update', () => {
    it('deve alterar um registro', async () => {
      const query = db
        .from('user')
        .where([['id', 9]])
        .update({ name: 'Pelé' })
      expect(await query).toEqual([{ id: 9, name: 'Pelé' }])
      expect(await db.from('user')).toEqual([
        { id: 2, name: 'Jane' },
        { id: 1, name: 'John' },
        { id: 3, name: 'Paul' },
        { id: 9, name: 'Pelé' },
      ])
    })
  })

  describe('delete', () => {
    it('deve excluir um registro', async () => {
      const query = db
        .from('user')
        .del()
        .where([['id', 1]])
      expect(await query).toBe(1)
      expect(await db.from('user')).toEqual([
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Paul' },
        { id: 9, name: 'Pelé' },
      ])
    })
  })
})
