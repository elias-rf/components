import { ormUtils } from '../../../utils/orm/orm-data-source/utils.mjs'
import { getIncludeData } from '../../../utils/orm/utils/get-include-data.mjs'
import { selectFromInclude } from '../../../utils/orm/utils/valid/select-from-include.mjs'

/**
 * LIST
 */
export const list =
  (db, schema) =>
  async ({
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
    const util = ormUtils(schema)

    if (include) {
      select = selectFromInclude(select || [], include, schema)
    }
    const qry = {
      from: util.getTableName(),
      ...util.validWhere(where),
      ...util.validOrderBy(orderBy),
      ...util.validGroupBy(groupBy),
      ...util.validSelect(select),
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
