import type { TGenericObject, TIncrementArgs, TTableDef } from "@/types";
import { knexIncrement } from "@/utils/api/knex-increment";
import { knexWhere } from "@/utils/api/knex-where";
import { assertFilters } from "@/utils/asserts/assert-filters";
import { Knex } from "knex";
import { assertSelect } from "../../asserts/assert-select";
import { namesFromTable } from "../../schema/names-from-table";
import { renameFieldToName } from "../../schema/rename-fields";

export function incrementFactory(db: Knex, schema: TTableDef) {
  const response = async ({
    filters = [],
    increment,
    select = [],
  }: TIncrementArgs): Promise<TGenericObject[]> => {
    assertFilters(filters, schema.fields);
    assertSelect(select as string[], schema.fields);
    const tbl = schema.table;
    const entity = schema;
    if (select.length > 0) {
      select = namesFromTable(entity);
    }

    const data: TGenericObject[] = await db(tbl)
      .where(knexWhere(filters, entity.fields))
      .increment(knexIncrement(increment, schema.fields))
      .returning(select as string[]);
    return renameFieldToName(data, schema.fields);
  };

  return response;
}
