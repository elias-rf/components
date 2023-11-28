import { TOrderBy, TWhere } from '@/types/index.js'
import { Knex } from 'knex'

export type TQueryKnex = {
  avg?: string[]
  count?: string[]
  debug?: boolean
  del?: boolean
  delete?: boolean
  first?: string[]
  from?: string
  fromRaw?: [sql: string, bindings?: any[]]
  groupBy?: string[]
  groupByRaw?: [sql: string, bindings?: any[]]
  havingRaw?: [sql: string, bindings?: any[]]
  increment?: any
  insert?: any
  join?: (
    | [table: string, first: string, second: string, method?: string]
    | [table: string, first: { [field: string]: string }]
  )[]

  limit?: number
  max?: string[]
  min?: string[]
  offset?: number
  orderBy?: TOrderBy<any>
  orderByRaw?: [sql: string, bindings?: any[]]
  raw?: [sql: string, bindings?: any[]]
  returning?: string[]
  select?: string[]
  selectRaw?: [sql: string, bindings?: any[]]
  sum?: string[]
  update?: any
  where?: TWhere<any>
  whereRaw?: [sql: string, bindings?: any[]]
}

export type TAdapterKnex = {
  (query: TQueryKnex): Promise<any>
  _logged: boolean
  _log: string[]
  knex: Knex
  _query: TQueryKnex
  setDriver: (driver: Knex) => void
  getDriver: () => Knex
  startLog: () => void
  stopLog: () => void
  log: () => string[]
}

export function adapterKnex(driver: Knex) {
  const orm: TAdapterKnex = (query: TQueryKnex) => {
    return new Promise((resolve, reject) => {
      let data: any = orm.knex.queryBuilder()
      for (const method in query) {
        // method: arg => knex(arg)
        if (
          [
            'from',
            'select',
            'offset',
            'limit',

            'update',
            'insert',
            'delete',
            'del',
            'returning',
            'first',
          ].includes(method)
        ) {
          data = data[method](query[method as keyof TQueryKnex])
        }
        // method: [[arg1, ...]] => for each (knex(arg1,...))
        if (['where', 'orderBy', 'join'].includes(method)) {
          for (const whr of query[method as keyof TQueryKnex]) {
            if (whr.raw !== undefined) {
              data = data[method](orm.knex.raw(...(whr.raw as [string, any])))
            } else {
              data = data[method](...whr)
            }
          }
        }
        // method: [arg1, arg2, ...] => knex(arg1, arg2, ...)
        if (
          [
            'groupBy',
            'increment',
            'groupByRaw',
            'orderByRaw',
            'whereRaw',
            'havingRaw',
            'fromRaw',
            'sum',
            'count',
            'min',
            'max',
            'avg',
          ].includes(method)
        ) {
          data = data[method](
            ...(query[method as keyof TQueryKnex] as [string])
          )
        }
        if (['selectRaw'].includes(method)) {
          data = data.select(orm.knex.raw(query.selectRaw?.[0] as string))
        }
        if (['raw'].includes(method)) {
          data = orm.knex.raw(
            ...(query[method as keyof TQueryKnex] as [string])
          )
        }
      }
      if (orm._logged) orm._log.push(data.toString())
      if (query.debug) {
        console.group('adapter-knex')
        console.log('query:', query)
        console.groupEnd()
      }

      resolve(data)
    })
  }

  orm._logged = false
  orm._log = [] as Array<string>
  orm.knex = driver
  orm._query = {}

  orm.setDriver = (driver: Knex) => {
    orm.knex = driver
  }

  orm.getDriver = () => {
    return orm.knex
  }

  orm.startLog = () => {
    orm._log = []
    orm._logged = true
  }

  orm.stopLog = () => {
    orm._log = []
    orm._logged = false
  }

  orm.log = () => {
    return orm._log
  }
  return orm
}
