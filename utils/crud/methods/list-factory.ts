import type { TAggregate, TGenericObject, TListArgs, TTableDef } from "@/types";
import { knexAggregate } from "@/utils/api/knex-aggregate";
import { knexOrder } from "@/utils/api/knex-order";
import { knexSelect } from "@/utils/api/knex-select";
import { knexWhere } from "@/utils/api/knex-where";
import { assertAggregate } from "@/utils/asserts/assert-aggregate";
import { assertFilters } from "@/utils/asserts/assert-filters";
import { assertLimit } from "@/utils/asserts/assert-limit";
import { assertSorts } from "@/utils/asserts/assert-sorts";
import { Knex } from "knex";
import { assertSelect } from "../../asserts/assert-select";
import {
  renameFieldToName,
  renameNameToField,
} from "../../schema/rename-fields";

export function listFactory(connection: Knex, table: TTableDef) {
  const response = async ({
    filters = [],
    sorts = [],
    limit = 50,
    select = ["*"],
    group = [],
    sum,
    min,
    max,
  }: TListArgs = {}): Promise<TGenericObject[]> => {
    // valida parametros
    assertLimit(limit);
    assertFilters(filters, table.fields);
    assertSorts(sorts, table.fields);
    assertSelect(select as string[], table.fields);
    assertSelect(group as string[], table.fields);



    let qry = connection(table.table);
    if (select) qry = qry.select(knexSelect(select, table.fields));
    if (limit) qry = qry.limit(limit);
    if (filters.length > 0) qry = qry.where(knexWhere(filters, table.fields));
    if (sorts.length > 0) qry = qry.orderBy(knexOrder(sorts, table.fields));
    if (sum) {
      assertAggregate(sum as TAggregate, table.fields);
      qry = qry.sum(knexAggregate(sum, table.fields));
    }
    if (min) {
      assertAggregate(min as TAggregate, table.fields);
      qry = qry.sum(knexAggregate(min, table.fields));
    }
    if (max) {
      assertAggregate(max as TAggregate, table.fields);
      qry = qry.max(knexAggregate(max, table.fields));
    }

    if (group.length > 0)
      qry = qry.groupBy(renameNameToField(group, table.fields));

    const data = await qry;
    return renameFieldToName(data, table.fields);
  };
  return response;
}
