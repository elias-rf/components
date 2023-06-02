import type { TGenericObject, TIncrementArgs, TTableDef } from "@/types";
import { knexIncrement } from "@/utils/api/knex-increment";
import { knexWhere } from "@/utils/api/knex-where";
import { assertFilter } from "@/utils/asserts/assert-filter";
import { Knex } from "knex";
import { assertSelect } from "../../asserts/assert-select";
import { namesFromTable } from "../../schema/names-from-table";
import { renameFieldToName } from "../../schema/rename-fields";

export function incrementFactory(db: Knex, schema: TTableDef) {
  const response = async ({
    filter = {},
    increment,
    select = [],
  }: TIncrementArgs): Promise<TGenericObject[]> => {
    assertFilter(filter, schema.fields);
    assertSelect(select as string[], schema.fields);
    const tbl = schema.table;
    const entity = schema;
    if (select.length > 0) {
      select = namesFromTable(entity);
    }
    const inc = knexIncrement(increment, schema.fields);
    const data: TGenericObject[] = await db(tbl)
      .where(knexWhere(filter, entity.fields))
      .increment(...inc)
      .returning(select as string[]);
    return renameFieldToName(data, schema.fields);
  };

  return response;
}
