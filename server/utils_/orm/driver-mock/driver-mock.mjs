import { pipe } from '../../../utils/orm/utils/pipe.mjs'
import { fnClone } from './clone.mjs'
import { fnDelete } from './delete.mjs'
import { fnOrderBy } from './orderBy.mjs'
import { fnSelect } from './select.mjs'
import { fnUpdate } from './update.mjs'
import { fnWhere } from './where.mjs'

export function driverMock(database) {
  const _database = database

  const response = {
    _query: {},

    from(from) {
      this._query.from = from
      return this
    },

    where(where) {
      this._query.where = where
      return this
    },

    select(select) {
      this._query.select = select
      return this
    },

    orderBy(orderBy) {
      this._query.orderBy = orderBy
      return this
    },

    insert(record) {
      this._query.operation = 'insert'
      this._query.insert = record
      return this
    },

    del() {
      this._query.operation = 'delete'
      return this
    },

    update(record) {
      this._query.operation = 'update'
      this._query.update = record
      return this
    },

    toString() {
      return JSON.stringify(this._query)
    },

    then(resolve, reject) {
      if (this._query.from === undefined || this._query.from === '')
        return reject(new Error('from is required'))
      if (!Object.hasOwn(_database, this._query.from))
        return reject(new Error('unknown table'))

      let response = _database[this._query.from]

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
