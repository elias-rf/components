import { isEmpty } from "../../../../utils/identify/is-empty.mjs";
import { getIncludeData } from "../utils/get-include-data.mjs";
import { selectFromInclude } from "../utils/valid/select-from-include.mjs";
import { ormUtils } from "./utils.mjs";

/**
 * LIST
 */
export const list =
  (db, schema) =>
  async ({
    select = [],
    where = [],
    orderBy = [],
    limit = 500,
    groupBy = [],
    sum = [],
    min = [],
    max = [],
    include = [],
  }) => {
    const util = ormUtils(schema);

    if (include) {
      select = selectFromInclude(select || [], include, schema);
    }
    const qry = {
      from: util.getTableName(),
      ...util.validWhere(where),
      ...util.validOrderBy(orderBy),
      ...util.validGroupBy(groupBy),
      ...util.validSelect(select),
    };

    if (limit) qry.limit = limit;
    if (!isEmpty(sum)) qry.sum = sum;
    if (!isEmpty(min)) qry.min = min;
    if (!isEmpty(max)) qry.max = max;

    let response = await db(qry);

    if (include) {
      response = await getIncludeData(response, include, schema);
    }

    return response;
  };
