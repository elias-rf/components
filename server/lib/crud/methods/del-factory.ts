import { Knex } from "knex";
import type { TDelArgs, TTable } from "../../../../types";
import { renameNameToField } from "../../../../utils/schema/rename-fields";
import { zIdClient } from "../../../../utils/zod/z-id-client";
import { TCrudDel } from "../crud.type";

export function delFactory(db: Knex, schema: TTable): TCrudDel {
  const response = async ({ id }: TDelArgs): Promise<number> => {
    zIdClient(id, schema.fields);

    const tbl = schema.table;

    const qry = await db(tbl).del().where(renameNameToField(id, schema.fields));
    if (Array.isArray(qry) && qry.length > 0) {
      return qry[0];
    }
    return qry;
  };

  response.help = "Apaga registro indicado por sua chave primária";
  return response;
}
