import { beforeEach, describe, expect, it, test } from 'vitest'
import { knexMockMsql } from '../../../utils/mocks/connections.mock.mjs'
import { getTracker } from '../../../utils/mocks/database.mock.mjs'
import { adapterKnex } from '../adapter-knex.mjs'
import { ormTableDataSource } from './index.mjs'

const phonebook = {
  table: 'phonebook',
  primary: ['id'],
  fields: ['id', 'name', 'department', 'email'],
}

describe('ormTableDataSource', () => {
  const tracker = getTracker()
  const db = adapterKnex(knexMockMsql)
  const tb = ormTableDataSource(db, phonebook)
  db.startLog()

  beforeEach(() => {
    tracker.reset()
    db.startLog()
  })

  it('deve validar select', () => {
    expect(tb.util.validSelect()).toEqual({ select: [] })
    expect(tb.util.validSelect(['name'])).toEqual({ select: ['name'] })
    expect(tb.util.validSelect(['id', 'name'])).toEqual({
      select: ['id', 'name'],
    })
  })

  it('deve invalidar select', () => {
    expect(() => tb.util.validSelect(['names'])).toThrow(
      '[names] não é um campo válido para select em phonebook use: id,name,department,email'
    )
  })

  it('deve validar sort', () => {
    expect(tb.util.validOrderBy([['name', 'asc']])).toEqual({
      orderBy: [['name', 'asc']],
    })
  })

  it('deve invalidar sort', () => {
    expect(() => tb.util.validOrderBy([['names', 'asc']])).toThrow(
      '[names] não é um campo válido para where em phonebook use: id,name,department,email'
    )
  })

  it('deve validar idColumn', () => {
    expect(tb.util.validId([['id', 1]])).toEqual({ where: [['id', 1]] })
  })
  it('deve invalidar idColumn', () => {
    expect(() => tb.util.validId([['name', 1]])).toThrow(
      '[id] não foi usado em phonebook use: id'
    )
    // @ts-ignore
    expect(() => tb.util.validId([['id']])).toThrow(
      'where deve ser Array<[string, any]>'
    )
    // @ts-ignore
    expect(() => tb.util.validId([[1, 'id']])).toThrow(
      'where deve ser Array<[string, any]>'
    )
  })

  it('deve validar where', () => {
    expect(tb.util.validWhere([['name', 'a']])).toEqual({
      where: [['name', 'a']],
    })
  })

  it('deve invalidar where', () => {
    expect(() => tb.util.validWhere([['name2', 'a']])).toThrow(
      '[name2] não é um campo válido para where em phonebook use: id,name,department,email'
    )
  })

  it('deve validar where In', () => {
    expect(tb.util.validWhere([['name', 'a']])).toEqual({
      where: [['name', 'a']],
    })
  })

  it('deve invalidar select 2', () => {
    expect(() => tb.util.validWhere([['names', 'a']])).toThrow(
      '[names] não é um campo válido para where em phonebook use: id,name,department,email'
    )
  })

  it('deve validar data', () => {
    expect(tb.util.validData({ name: 'a' })).toEqual({ name: 'a' })
  })

  it('deve invalidar data', () => {
    expect(() => tb.util.validData({ names: 'a' })).toThrow(
      '[names] não é um campo válido para data em phonebook use: id,name,department,email'
    )
  })
})
