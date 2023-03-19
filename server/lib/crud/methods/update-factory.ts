import { Knex } from "knex";
import { TGenericObject, TSelect, TUpdateArgs } from "../../../../types";
import type { TTableDef } from "../../../../types/model";
import { namesFromTable } from "../../../../utils/schema/names-from-table";
import {
  renameFieldToName,
  renameNameToField,
} from "../../../../utils/schema/rename-fields";
import { isSelect } from "../../../../utils/validate/is-select";
import { zIdClient } from "../../../../utils/zod/z-id-client";
import { isRecord } from "../../../../utils/zod/z-record";
import { TCrudUpdate } from "../crud.type";

export function updateFactory(
  connection: Knex,
  schema: TTableDef
): TCrudUpdate {
  const response = async ({
    id,
    data,
    select = [],
  }: TUpdateArgs): Promise<TGenericObject> => {
    zIdClient(id, schema.fields);
    isRecord(data, schema.fields);
    isSelect(select as TSelect, schema.fields);

    const tbl = schema.table;
    if (select.length === 0) {
      select = namesFromTable(schema);
    }

    const qry = await connection(tbl)
      .update(renameNameToField(data, schema.fields))
      .where(renameNameToField(id, schema.fields))
      .returning(renameNameToField(select, schema.fields) as any);
    return renameFieldToName(qry[0], schema.fields);
  };
  response.help = "Altera informações do registro";
  return response;
}
