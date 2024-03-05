import type { TSchema } from '@/schemas/schema.type.js'
import { TCount, TData } from '@/types/index.js'
import { ormUtils } from '@/utils/orm/orm-data-source/utils.js'
import { TAdapterKnex, TQueryKnex } from '../adapter-knex.js'

/**
 * COUNT
 */
export const count =
  (db: TAdapterKnex, schema: TSchema): TCount =>
  async ({ select, count = ['* as ttl'], where = [] }) => {
    const util = ormUtils(schema)

    const qry = {
      from: util.getTableName(),
      ...util.validWhere(where),
      ...util.validSelect(select),
      count,
    }

    return db(qry as unknown as TQueryKnex) as Promise<TData | number>
  }
