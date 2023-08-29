import { Knex } from 'knex'
import { pipe } from './utils/pipe'
import { getValuesList } from './utils/get-values-list'
import { getAssociations } from './utils/get-associations'
import { fillAssociations } from './utils/fill-associations'
import { Query } from '@/orm/orm.type'

export class OrmDatabase {
  knex: Knex
  private _logged: boolean
  private _log: string[]

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
      this.method('select'),
      this.method('first'),
      this.method('insert'),
      this.method('update'),
      this.method('del'),
      this.method('from'),
      this.method('returning'),
      this.method('offset'),
      this.method('limit'),
      this.method('count'),
      this.method('min'),
      this.method('max'),
      this.method('sum'),
      this.method('avg'),
      this.method('increment'),
      this.method('groupBy'),
      this.method('join'),
      this.method('orderBy'),
      this.method('where'),
      this.method('whereNot'),
      this.method('raw'),
      this.method('having')
    )(param)
    this._log.push(param.knex.toString())
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
        knex = this.knex.raw(...query[method])
        return { knex, query }
      }

      // method não possui argumentos
      if (['del', 'columnInfo'].includes(method)) {
        knex = knex[method]()
        return { knex, query }
      }

      // method possui varios argumentos em lista
      if (['where', 'whereNot', 'join', 'having', 'orderBy'].includes(method)) {
        for (const whr of query[method]) {
          if (whr.raw !== undefined) {
            knex = knex[method](this.knex.raw(...whr.raw))
          } else {
            knex = knex[method](...whr)
          }
        }
        return { knex, query }
      }

      // method possui varios argumentos
      if (['returning', 'increment', 'groupBy'].includes(method)) {
        knex = knex[method](...query[method])
        return { knex, query }
      }

      if (['select', 'first'].includes(method)) {
        // select
        if (
          typeof query[method] === 'object' &&
          query[method].raw !== undefined
        ) {
          // select { raw: [""] }
          knex = knex[method](this.knex.raw(...query[method].raw))
          return { knex, query }
        }
        // select ["", !association]
        knex = knex[method](
          query[method].filter((fld) => typeof fld === 'string')
        )
        return { knex, query }
      }

      // method possui 1 argumento array
      // possui raw
      if (
        typeof query[method] === 'object' &&
        query[method].raw !== undefined
      ) {
        knex = knex[method](this.knex.raw(...query[method].raw))
        return { knex, query }
      }

      // method possui 1 argumento
      knex = knex[method](query[method])
      return { knex, query }
    }
  }
}
