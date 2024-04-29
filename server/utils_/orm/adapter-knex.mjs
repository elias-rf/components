export function adapterKnex(driver) {
  const orm = (query) => {
    return new Promise((resolve, reject) => {
      let data = orm.knex.queryBuilder()
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
          data = data[method](query[method])
        }
        // method: [[arg1, ...]] => for each (knex(arg1,...))
        if (['where', 'orderBy', 'join'].includes(method)) {
          for (const whr of query[method]) {
            if (whr.raw !== undefined) {
              data = data[method](orm.knex.raw(...whr.raw))
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
          data = data[method](...query[method])
        }
        if (['selectRaw'].includes(method)) {
          data = data.select(orm.knex.raw(query.selectRaw?.[0]))
        }
        if (['raw'].includes(method)) {
          data = orm.knex.raw(...query[method])
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
  orm._log = []
  orm.knex = driver
  orm._query = {}

  orm.setDriver = (driver) => {
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
