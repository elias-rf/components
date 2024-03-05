import type { TSchema } from '@/schemas/schema.type.js'
import { TData, TList } from '@/types/index.js'
import { ormUtils } from '@/utils/orm/orm-data-source/utils.js'
import { getIncludeData } from '@/utils/orm/utils/get-include-data.js'
import { selectFromInclude } from '@/utils/orm/utils/valid/select-from-include.js'
import { TAdapterKnex, TQueryKnex } from '../adapter-knex.js'

/**
 * LIST
 */
export const list =
  (db: TAdapterKnex, schema: TSchema): TList =>
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
    const qry: any = {
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

    let response = (await db(qry as TQueryKnex)) as Array<TData>

    if (include) {
      response = await getIncludeData(response, include, schema)
    }

    return response
  }
