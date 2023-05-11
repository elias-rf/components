import type { TDelArgs, TTableDef } from "@/types";
import { knexId } from "@/utils/api/knex-id";
import { assertIds } from "@/utils/asserts/assert-ids";
import { Knex } from "knex";

export function delFactory(db: Knex, schema: TTableDef) {
  const response = async ({ ids }: TDelArgs): Promise<number> => {
    assertIds(ids, schema.fields);

    const tbl = schema.table;

    const qry = await db(tbl).del().where(knexId(ids, schema.fields));
    if (Array.isArray(qry) && qry.length > 0) {
      return qry[0];
    }
    return qry;
  };

  return response;
}
