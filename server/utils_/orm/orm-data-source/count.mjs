import { ormUtils } from './utils.mjs'

/**
 * COUNT
 */
export const count =
  (db, schema) =>
  async ({ select, count = ['* as ttl'], where = [] }) => {
    const util = ormUtils(schema)

    const qry = {
      from: util.getTableName(),
      ...util.validWhere(where),
      ...util.validSelect(select),
      count,
    }

    return db(qry)
  }
