import type { TSchema } from '@/schemas/schema.type.js'
import { TData, TRead } from '@/types/index.js'
import { ormUtils } from '@/utils/orm/orm-data-source/utils.js'
import { getIncludeData } from '@/utils/orm/utils/get-include-data.js'
import { selectFromInclude } from '@/utils/orm/utils/valid/select-from-include.js'
import { TAdapterKnex, TQueryKnex } from '../adapter-knex.js'

/**
 * READ
 */
export const read =
  (db: TAdapterKnex, schema: TSchema): TRead =>
  async ({ where, select = [], include }) => {
    const util = ormUtils(schema)

    if (include) {
      select = selectFromInclude(select, include, schema)
    }
    const qry = {
      from: util.getTableName(),
      ...util.validId(where),
      ...util.validFirst(select),
      limit: 1,
    }
    let response = (await db(qry as TQueryKnex)) as TData
    if (include) {
      response = await getIncludeData(response, include, schema)
    }

    return response
  }
