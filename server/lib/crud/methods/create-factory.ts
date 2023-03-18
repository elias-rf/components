import { Knex } from "knex";
import { TCreateArgs, TSelect } from "../../../../types";
import type { TTable } from "../../../../types/model";
import { namesFromTable } from "../../../../utils/schema/names-from-table";
import {
  renameFieldToName,
  renameNameToField,
} from "../../../../utils/schema/rename-fields";
import { isSelect } from "../../../../utils/validate/is-select";
import { isRecord } from "../../../../utils/zod/z-record";
import { TCrudCreate } from "../crud.type";

export function createFactory(connection: Knex, schema: TTable): TCrudCreate {
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
