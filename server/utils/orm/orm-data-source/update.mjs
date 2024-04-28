import { ormUtils } from "./utils.mjs";

/**
 * UPDATE
 */
export const update =
  (db, schema) =>
  async ({ where, data, returning = [], debug = false }) => {
    const util = ormUtils(schema);

    const qry = {
      from: util.getTableName(),
      update: util.validData(data || {}),
      ...util.validId(where),
      ...util.validReturning(returning),
      debug,
    };

    return db(qry);
  };
