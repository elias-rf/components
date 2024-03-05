import type { TSchema } from '@/schemas/schema.type.js'
import { TData, TUpdate } from '@/types/index.js'
import { ormUtils } from '@/utils/orm/orm-data-source/utils.js'
import { TAdapterKnex, TQueryKnex } from '../adapter-knex.js'

/**
 * UPDATE
 */
export const update =
  (db: TAdapterKnex, schema: TSchema): TUpdate =>
  async ({ where, data, returning, debug }) => {
    const util = ormUtils(schema)

    const qry = {
      from: util.getTableName(),
      update: util.validData(data || {}),
      ...util.validId(where),
      ...util.validReturning(returning),
      debug,
    } as unknown as TQueryKnex

    return db(qry) as Promise<TData[] | number>
  }
