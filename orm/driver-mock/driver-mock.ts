import { pipe } from '@/orm/utils/pipe.js'
import { TOrderBy, TSelect, TWhere } from '@/types/index.js'
import { fnClone } from './clone.js'
import { fnDelete } from './delete.js'
import { fnOrderBy } from './orderBy.js'
import { fnSelect } from './select.js'
import { fnUpdate } from './update.js'
import { fnWhere } from './where.js'

type Resolve<T> = (v: T) => void
type Reject = (e: Error) => void

export type TQuery = {
  operation?: 'insert' | 'update' | 'delete' | 'select'
  select?: TSelect<any>
  where?: TWhere<any>
  orderBy?: TOrderBy<any>
  from?: string
  insert?: Record<string, any>
  update?: Record<string, any>
}

export function driverMock(database: Record<string, Record<string, any>[]>) {
  const _database = database

  const response = {
    _query: {} as TQuery,

    from(from: string) {
      this._query.from = from
      return this
    },

    where(where: TWhere<any>) {
      this._query.where = where
      return this
    },

    select(select: TSelect<any>) {
      this._query.select = select
      return this
    },

    orderBy(orderBy: TOrderBy<any>) {
      this._query.orderBy = orderBy
      return this
    },

    insert(record: Record<string, any>) {
      this._query.operation = 'insert'
      this._query.insert = record
      return this
    },

    del() {
      this._query.operation = 'delete'
      return this
    },

    update(record: Record<string, any>) {
      this._query.operation = 'update'
      this._query.update = record
      return this
    },

    toString() {
      return JSON.stringify(this._query)
    },

    then(resolve: Resolve<any>, reject: Reject) {
      if (this._query.from === undefined || this._query.from === '')
        return reject(new Error('from is required'))
      if (!Object.hasOwn(_database, this._query.from))
        return reject(new Error('unknown table'))

      let response: Record<string, any>[] | number = _database[this._query.from]

      if (
        this._query.operation === undefined ||
        this._query.operation === 'select'
      ) {
        response = pipe(
          fnClone,
          fnWhere,
          fnOrderBy,
          fnSelect
        )({
          data: response,
          query: this._query,
        }).data
      }

      if (this._query.operation === 'insert') {
        if (!this._query.insert) return reject(new Error('record is required'))
        _database[this._query.from].push(this._query.insert)
        response = fnSelect({
          data: _database[this._query.from],
          query: this._query,
        }).data
      }

      if (this._query.operation === 'update') {
        if (!this._query.update) return reject(new Error('record is required'))
        response = pipe(
          fnUpdate,
          fnSelect
        )({
          data: _database[this._query.from],
          query: this._query,
        }).data
      }

      if (this._query.operation === 'delete') {
        const initial = _database[this._query.from].length
        fnDelete({ data: _database[this._query.from], query: this._query })
        response = initial - _database[this._query.from].length
      }

      this._query = {}
      return resolve(response)
    },
  }
  return response
}

export type TDriverMock = ReturnType<typeof driverMock>
