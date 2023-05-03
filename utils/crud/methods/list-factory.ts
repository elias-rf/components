import type { TAggregate, TGenericObject, TListArgs, TTableDef } from "@/types";
import { Knex } from "knex";
import { knexOrder } from "../../data/knex-order";
import { knexWhere } from "../../data/knex-where";
import { namesFromTable } from "../../schema/names-from-table";
import {
  renameFieldToName,
  renameNameToField,
} from "../../schema/rename-fields";
import { isLimit } from "../../validate/is-limit";
import { isSelect } from "../../validate/is-select";
import { isWhere } from "../../validate/is-where";
import { zAggregate } from "../../zod/z-aggregate";
import { isOrder } from "../../zod/z-order";
import { TCrudList } from "../crud.type";

export function listFactory(connection: Knex, table: TTableDef): TCrudList {
  const response = async ({
    where = [],
    order = [],
    limit = 50,
    select = [],
    group = [],
    sum = {},
    min = {},
    max = {},
  }: TListArgs = {}): Promise<TGenericObject[]> => {
    isWhere(where, table.fields);
    isOrder(order, table.fields);
    isLimit(limit);
    isSelect(select as string[], table.fields);
    isSelect(group as string[], table.fields);
    zAggregate(sum as TAggregate, table.fields);
    zAggregate(min as TAggregate, table.fields);
    zAggregate(max as TAggregate, table.fields);
    const tbl = table.table;
    if (select.length === 0) {
      select = namesFromTable(table);
    }

    let qry = connection(tbl);
    if (select) qry = qry.select(renameNameToField(select, table.fields));
    if (limit) qry = qry.limit(limit);
    if (where.length > 0)
      qry = qry.where(knexWhere(renameNameToField(where, table.fields)));
    if (order.length > 0)
      qry = qry.orderBy(knexOrder(renameNameToField(order, table.fields)));
    if (Object.keys(sum).length > 0) qry = qry.sum(sum);

    if (Object.keys(min).length > 0) qry = qry.min(min);

    if (Object.keys(max).length > 0) qry = qry.max(max);

    if (group.length > 0)
      qry = qry.groupBy(renameNameToField(group, table.fields));

    const data = await qry;
    return renameFieldToName(data, table.fields);
  };

  response.help = "Restorna lista de registros filtrados";
  return response;
}
