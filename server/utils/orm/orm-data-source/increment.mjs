import { ormUtils } from "./utils.mjs";

/**
 * INCREMENT
 */
export const increment =
  (db, schema) =>
  async ({ increment, where = [], returning }) => {
    const util = ormUtils(schema);

    const qry = {
      from: util.getTableName(),
      increment,
      ...util.validWhere(where),
      ...util.validReturning(returning),
    };

    return db(qry);
  };
