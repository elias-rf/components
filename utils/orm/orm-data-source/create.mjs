import { ormUtils } from "./utils.mjs";

/**
 * CREATE
 */
export const create =
  (db, schema) =>
  async ({ data, returning = [] }) => {
    const util = ormUtils(schema);

    const qry = {
      from: util.getTableName(),
      insert: util.validData(data || {}),
      ...util.validReturning(returning),
    };

    return db(qry);
  };
