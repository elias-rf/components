import type { TCountArgs, TTableDef } from "@/types";
import { knexWhere } from "@/utils/api/knex-where";
import { assertFilter } from "@/utils/asserts/assert-filter";
import { Knex } from "knex";
import { renameNameToField } from "../../schema/rename-fields";

export const countFactory = (connection: Knex, table: TTableDef) => {
  const response = async ({
    filter = {},
    count = { ttl: "*" },
    select,
  }: TCountArgs) => {
    assertFilter(filter, table.fields);

    let qry = connection(table.table)
      .where(knexWhere(filter, table.fields))
      .count(count);
    if (select) qry = qry.select(renameNameToField(select, table.fields));
    const data = await qry;
    return data;
  };
  return response;
};
