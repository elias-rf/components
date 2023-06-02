import type { TDelArgs, TTableDef } from "@/types";
import { knexId } from "@/utils/api/knex-id";
import { assertId } from "@/utils/asserts/assert-id";
import { Knex } from "knex";

export function delFactory(db: Knex, schema: TTableDef) {
  const response = async ({ id }: TDelArgs): Promise<number> => {
    assertId(id, schema.fields);

    const tbl = schema.table;

    const qry = await db(tbl).del().where(knexId(id, schema.fields));
    if (Array.isArray(qry) && qry.length > 0) {
      return qry[0];
    }
    return qry;
  };

  return response;
}
