import type { TCreateArgs, TSelect, TTableDef } from "@/types";
import { knexData } from "@/utils/api/knex-data";
import { knexSelect } from "@/utils/api/knex-select";
import { assertData } from "@/utils/asserts/assert-data";
import { Knex } from "knex";
import { assertSelect } from "../../asserts/assert-select";
import { namesFromTable } from "../../schema/names-from-table";
import { renameFieldToName } from "../../schema/rename-fields";

export const createFactory = (connection: Knex, schema: TTableDef) => {
  const response = async ({ data, select = [] }: TCreateArgs) => {
    assertData(data, schema.fields);
    assertSelect(select as TSelect, schema.fields);

    if (select.length === 0) {
      select = namesFromTable(schema);
    }

    const [qry] = await connection(schema.table)
      .insert(knexData(data, schema.fields))
      .returning(knexSelect(select, schema.fields) as any);

    return renameFieldToName(qry, schema.fields);
  };
  return response;
};
