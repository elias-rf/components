import { getIncludeData } from '../../utils/orm/utils/get-include-data.mjs'
import { selectFromInclude } from '../../utils/orm/utils/valid/select-from-include.mjs'
import { validData as vldData } from '../../utils/orm/utils/valid/valid-data.mjs'
import { validFirst as vldFirst } from '../../utils/orm/utils/valid/valid-first.mjs'
import { validGroupBy as vldGroupBy } from '../../utils/orm/utils/valid/valid-group-by.mjs'
import { validId as vldId } from '../../utils/orm/utils/valid/valid-id.mjs'
import { validOrderBy as vldOrderBy } from '../../utils/orm/utils/valid/valid-order-by.mjs'
import { validReturning as vldReturning } from '../../utils/orm/utils/valid/valid-returning.mjs'
import { validSelect as vldSelect } from '../../utils/orm/utils/valid/valid-select.mjs'
import { validWhere as vldWhere } from '../../utils/orm/utils/valid/valid-where.mjs'

export function ormTable(db, schema) {
  /**
   * READ
   */
  const read = async ({ where, select = [], include }) => {
    if (include) {
      select = selectFromInclude(select, include, schema)
    }
    const qry = {
      from: getTableName(),
      ...validId(where),
      ...validFirst(select),
      limit: 1,
    }
    let response = await db(qry)
    if (include) {
      response = await getIncludeData(response, include, schema)
    }

    return response
  }

  /**
   * LIST
   */
  const list = async ({
    select,
    where = [],
    orderBy = [],
    limit,
    groupBy = [],
    sum,
    min,
    max,
    include,
  } = {}) => {
    if (include) {
      select = selectFromInclude(select || [], include, schema)
    }
    const qry = {
      from: getTableName(),
      ...validWhere(where),
      ...validOrderBy(orderBy),
      ...validGroupBy(groupBy),
      ...validSelect(select),
    }

    if (limit) qry.limit = limit
    if (sum) qry.sum = sum
    if (min) qry.min = min
    if (max) qry.max = max

    let response = await db(qry)

    if (include) {
      response = await getIncludeData(response, include, schema)
    }

    return response
  }

  /**
   * COUNT
   */
  const count = async ({ select, count = ['* as ttl'], where = [] }) => {
    const qry = {
      from: getTableName(),
      ...validWhere(where),
      ...validSelect(select),
      count,
    }

    return db(qry)
  }

  /**
   * UPDATE
   */
  const update = async ({ where, data, returning, debug }) => {
    const qry = {
      from: getTableName(),
      update: validData(data),
      ...validId(where),
      ...validReturning(returning),
      debug,
    }

    return db(qry)
  }

  /**
   * CREATE
   */
  const create = async ({ data, returning }) => {
    const qry = {
      from: getTableName(),
      insert: validData(data),
      ...validReturning(returning),
    }

    return db(qry)
  }
  create.rpc = true

  /**
   * DELETE
   */
  const del = async ({ where, returning }) => {
    return db({
      del: true,
      from: getTableName(),
      ...validId(where),
      ...validReturning(returning),
    })
  }
  del.rpc = true

  /**
   * INCREMENT
   */
  const increment = async ({ increment, where = [], returning }) => {
    const qry = {
      from: getTableName(),
      increment,
      ...validWhere(where),
      ...validReturning(returning),
    }

    return db(qry)
  }
  increment.rpc = true

  const validWhere = (where) => {
    return vldWhere(where, schema)
  }

  const validOrderBy = (orderBy) => {
    return vldOrderBy(orderBy, schema)
  }

  const validId = (id) => {
    return vldId(id, schema)
  }

  const validSelect = (select) => {
    return vldSelect(select, schema)
  }

  const validReturning = (returning) => {
    return vldReturning(returning, schema)
  }

  const validFirst = (first) => {
    return vldFirst(first, schema)
  }

  const validGroupBy = (groupBy) => {
    return vldGroupBy(groupBy, schema)
  }

  const validData = (data) => {
    return vldData(data, schema)
  }

  const getFields = () => {
    return Object.keys(schema.fields)
  }

  const getIdColumns = () => {
    return schema.primary
  }

  const getTableName = () => {
    return schema.table
  }

  const getAdapter = () => {
    return db
  }
  const getSchema = () => {
    return schema
  }

  return {
    rpc: {
      list,
      read,
      count,
      update,
      create,
      del,
      increment,
    },
    util: {
      getFields,
      getIdColumns,
      validWhere,
      validOrderBy,
      validId,
      validSelect,
      validReturning,
      validFirst,
      validGroupBy,
      validData,
      getTableName,
      getAdapter,
      getSchema,
    },
  }
}
