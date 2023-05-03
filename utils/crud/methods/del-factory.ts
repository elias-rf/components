import type { TDelArgs, TTableDef } from "@/types";
import { Knex } from "knex";
import { renameNameToField } from "../../schema/rename-fields";
import { zIdClient } from "../../zod/z-id-client";
import { TCrudDel } from "../crud.type";

export function delFactory(db: Knex, schema: TTableDef): TCrudDel {
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
