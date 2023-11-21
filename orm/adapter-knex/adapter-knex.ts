// @ts-nocheck
import { TDbAdapter, TQuery } from '@/orm/orm.type.js'
import { Knex } from 'knex'
import { pipe } from '../utils/pipe.js'

export class AdapterKnex implements TDbAdapter {
  knex: Knex
  private _logged: boolean
  private _log: Array<string>

  constructor(driver: Knex) {
    this.knex = driver
    this._log = []
    this._logged = false
  }

  setDriver(driver: Knex) {
    this.knex = driver
  }

  getDriver() {
    return this.knex
  }

  startLog() {
    this._log = []
    this._logged = true
  }

  stopLog() {
    this._log = []
    this._logged = false
  }

  sql() {
    return this._log
  }

  async run(query: TQuery) {
    const knex = this.knex.queryBuilder()
    let param = { knex, query }

    param = pipe(
      this.method('avg'),
      this.method('count'),
      this.method('del'),
      this.method('first'),
      this.method('from'),
      this.method('fromRaw'),
      this.method('groupBy'),
      this.method('groupByRaw'),
      this.method('having'),
      this.method('havingRaw'),
      this.method('increment'),
      this.method('insert'),
      this.method('join'),
      this.method('limit'),
      this.method('max'),
      this.method('min'),
      this.method('offset'),
      this.method('orderBy'),
      this.method('orderByRaw'),
      this.method('raw'),
      this.method('returning'),
      this.method('select'),
      this.method('selectRaw'),
      this.method('sum'),
      this.method('update'),
      this.method('where'),
      this.method('whereNot'),
      this.method('whereRaw')
    )(param)
    if (this._logged) this._log.push(param.knex.toString())
    const response = await param.knex

    return response
  }

  private method(method: keyof TQuery) {
    return ({ knex, query }: { knex: Knex.QueryBuilder; query: TQuery }) => {
      // method não foi usado
      if (query[method] === undefined) return { knex, query }

      if (['raw'].includes(method)) {
        knex = this.knex.raw(
          ...(query[method] as [string, any])
        ) as unknown as Knex.QueryBuilder
        return { knex, query }
      }

      if (
        [
          'orderByRaw',
          'groupByRaw',
          'havingRaw',
          'whereRaw',
          'fromRaw',
        ].includes(method)
      ) {
        knex = knex[method](
          ...(query[method] as [string, any])
        ) as unknown as Knex.QueryBuilder

        console.log(knex.toString())

        return { knex, query }
      }

      if (['selectRaw'].includes(method)) {
        knex = knex.select(this.knex.raw(...(query.selectRaw as [string, any])))

        console.log(knex.toString())

        return { knex, query }
      }

      // method não possui argumentos
      if (['del'].includes(method)) {
        knex = knex[method]()
        return { knex, query }
      }

      // method possui varios argumentos em lista
      if (['where', 'whereNot', 'join', 'having', 'orderBy'].includes(method)) {
        for (const whr of query[method]) {
          if (whr.raw !== undefined) {
            knex = knex[method](this.knex.raw(...(whr.raw as [string, any])))
          } else {
            knex = knex[method](...whr)
          }
        }
        return { knex, query }
      }

      // method possui varios argumentos
      if (['increment', 'groupBy'].includes(method)) {
        knex = knex[method](...(query[method] as [string]))
        return { knex, query }
      }

      if (['returning'].includes(method)) {
        knex = knex[method as 'returning'](query[method] as [string])
        return { knex, query }
      }

      if (['select', 'first'].includes(method)) {
        // select
        // select ["", !association]
        knex = knex[method as 'select'](
          query[method].filter((fld: any) => typeof fld === 'string')
        )
        return { knex, query }
      }

      // method possui 1 argumento array
      // possui raw
      if (
        typeof query[method] === 'object' &&
        query[method].raw !== undefined
      ) {
        knex = knex[method](
          this.knex.raw(...(query[method].raw as [string, any]))
        )
        return { knex, query }
      }

      // method possui 1 argumento
      knex = knex[method](query[method])
      return { knex, query }
    }
  }
}
