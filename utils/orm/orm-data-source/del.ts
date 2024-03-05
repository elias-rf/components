import type { TSchema } from '@/schemas/schema.type.js'
import { TData, TDel, TWhere } from '@/types/index.js'
import { ormUtils } from '@/utils/orm/orm-data-source/utils.js'
import { TAdapterKnex, TQueryKnex } from '../adapter-knex.js'

/**
 * DELETE
 */
export const del =
  <TFields extends string, TKeys extends string>(
    db: TAdapterKnex,
    schema: TSchema
  ): TDel =>
  async ({ where, returning }) => {
    const util = ormUtils(schema)

    return db({
      del: true,
      from: util.getTableName(),
      ...util.validId(where || []),
      ...util.validReturning(returning),
    } as unknown as TQueryKnex) as unknown as number
  }
