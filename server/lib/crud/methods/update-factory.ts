import { Knex } from "knex";
import {
  TGenericObject,
  TSelect,
  TTable,
  TUpdateArgs,
} from "../../../../types";
import { namesFromTable } from "../../../../utils/schema/names-from-table";
import {
  renameFieldToName,
  renameNameToField,
} from "../../../../utils/schema/rename-fields";
import { zIdClient } from "../../../../utils/zod/z-id-client";
import { zRecord } from "../../../../utils/zod/z-record";
import { zSelect } from "../../../../utils/zod/z-select";
import { TCrudUpdate } from "../crud.type";

export function updateFactory(connection: Knex, schema: TTable): TCrudUpdate {
  const response = async ({
    id,
    data,
    select = [],
  }: TUpdateArgs): Promise<TGenericObject> => {
    zIdClient(id, schema.fields);
    zRecord(data, schema.fields);
    zSelect(select as TSelect, schema.fields);

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
