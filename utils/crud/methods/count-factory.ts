import type { TCountArgs, TTableDef } from "@/types";
import { knexWhere } from "@/utils/api/knex-where";
import { assertFilters } from "@/utils/asserts/assert-filters";
import { Knex } from "knex";
import { renameNameToField } from "../../schema/rename-fields";

export const countFactory = (connection: Knex, table: TTableDef) => {
  const response = async ({
    filters = [],
    count = { ttl: "*" },
    select,
  }: TCountArgs) => {
    assertFilters(filters, table.fields);

    let qry = connection(table.table)
      .where(knexWhere(filters, table.fields))
      .count(count);
    if (select) qry = qry.select(renameNameToField(select, table.fields));
    const data = await qry;
    return data;
  };
  return response;
};
