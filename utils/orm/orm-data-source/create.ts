import type { TSchema } from '@/schemas/schema.type.js'
import { TCreate, TData } from '@/types/index.js'
import { ormUtils } from '@/utils/orm/orm-data-source/utils.js'
import { TAdapterKnex, TQueryKnex } from '../adapter-knex.js'

/**
 * CREATE
 */
export const create =
  (db: TAdapterKnex, schema: TSchema): TCreate =>
  async ({ data, returning }) => {
    const util = ormUtils(schema)

    const qry = {
      from: util.getTableName(),
      insert: util.validData(data || {}),
      ...util.validReturning(returning),
    } as unknown as TQueryKnex

    return db(qry) as Promise<TData[]>
  }
