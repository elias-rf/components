import type { TCreateArgs, TSelect, TTableDef } from "@mono/types";
import { Knex } from "knex";
import { namesFromTable } from "../../schema/names-from-table";
import {
  renameFieldToName,
  renameNameToField,
} from "../../schema/rename-fields";
import { isSelect } from "../../validate/is-select";
import { isRecord } from "../../zod/z-record";
import { TCrudCreate } from "../crud.type";

export function createFactory(
  connection: Knex,
  schema: TTableDef
): TCrudCreate {
  const response = async ({ data, select = [] }: TCreateArgs) => {
    isRecord(data, schema.fields);
    isSelect(select as TSelect, schema.fields);

    if (select.length === 0) {
      select = namesFromTable(schema);
    }

    const [qry] = await connection(schema.table)
      .insert(renameNameToField(data, schema.fields))
      .returning(renameNameToField(select, schema.fields) as any);

    return renameFieldToName(qry, schema.fields);
  };
  response.help = "Cria um novo registro";
  return response;
}
