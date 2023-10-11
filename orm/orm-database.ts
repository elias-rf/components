// @ts-nocheck
import { Query } from '@/orm/orm.type'
import { Knex } from 'knex'
import { fillAssociations } from './utils/fill-associations'
import { getAssociations } from './utils/get-associations'
import { getValuesList } from './utils/get-values-list'
import { pipe } from './utils/pipe'

export class OrmDatabase {
  knex: Knex
  private _logged: boolean
  private _log: Array<string>

  constructor(knex: Knex) {
    this.knex = knex
    this._log = []
    this._logged = false
  }

  resetLog() {
    this._log = []
  }
  startLog() {
    this.resetLog()
    this._logged = true
  }
  stopLog() {
    this.resetLog()
    this._logged = false
  }

  sql() {
    return this._log
  }

  async run(query: Query) {
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

    const associations = getAssociations(query)
    if (associations.length > 0) {
      for (const association of associations) {
        const field = Object.keys(association)[0]
        const multipleKeys = Array.isArray(association[field].source)
        if (multipleKeys) {
          const valuesList = getValuesList(response, association[field].source)
          const keysTarget = association[field].target
          const responseAssociation = []
          for (const value of valuesList) {
            const query = {
              select: association[field].select,
              from: association[field].from,
              where: value.map((v: any, i: number) => [keysTarget[i], v]),
            }
            responseAssociation.push(...(await this.run(query)))
          }
          fillAssociations(response, responseAssociation, association)
        } else {
          const query: Query = {
            select: association[field].select,
            from: association[field].from,
            where: [
              [
                association[field].target,
                'in',
                getValuesList(response, association[field].source),
              ],
            ],
          }
          const responseAssociation = await this.run(query)
          fillAssociations(response, responseAssociation, association)
        }
      }
    }
    return response
  }

  private method(method: keyof Query) {
    return ({ knex, query }: { knex: Knex.QueryBuilder; query: Query }) => {
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
