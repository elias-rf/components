import { getIncludeData } from "../utils/get-include-data.mjs";
import { selectFromInclude } from "../utils/valid/select-from-include.mjs";
import { ormUtils } from "./utils.mjs";

/**
 * READ
 */
export const read =
  (db, schema) =>
  async ({ where, select = [], include = [] }) => {
    const util = ormUtils(schema);

    if (include) {
      select = selectFromInclude(select, include, schema);
    }
    const qry = {
      from: util.getTableName(),
      ...util.validId(where),
      ...util.validFirst(select),
      limit: 1,
    };
    let response = await db(qry);
    if (include) {
      response = await getIncludeData(response, include, schema);
    }

    return response;
  };
