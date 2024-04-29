import { ormUtils } from '../../../utils/orm/orm-data-source/utils.mjs'

/**
 * DELETE
 */
export const del =
  (db, schema) =>
  async ({ where, returning }) => {
    const util = ormUtils(schema)

    return db({
      del: true,
      from: util.getTableName(),
      ...util.validId(where || []),
      ...util.validReturning(returning),
    })
  }
