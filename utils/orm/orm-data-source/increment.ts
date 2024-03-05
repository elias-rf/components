import type { TSchema } from '@/schemas/schema.type.js'
import { TData, TIncrement } from '@/types/index.js'
import { ormUtils } from '@/utils/orm/orm-data-source/utils.js'
import { TAdapterKnex, TQueryKnex } from '../adapter-knex.js'

/**
 * INCREMENT
 */
export const increment =
  (db: TAdapterKnex, schema: TSchema): TIncrement =>
  async ({ increment, where = [], returning }) => {
    const util = ormUtils(schema)

    const qry = {
      from: util.getTableName(),
      increment,
      ...util.validWhere(where),
      ...util.validReturning(returning),
    } as unknown as TQueryKnex

    return db(qry) as Promise<TData | number>
  }
