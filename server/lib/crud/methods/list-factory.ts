import { Knex } from "knex";
import type {
  TAggregate,
  TGenericObject,
  TListArgs,
  TTable,
} from "../../../../types";
import { knexOrder } from "../../../../utils/data/knex-order";
import { knexWhere } from "../../../../utils/data/knex-where";
import { namesFromTable } from "../../../../utils/schema/names-from-table";
import {
  renameFieldToName,
  renameNameToField,
} from "../../../../utils/schema/rename-fields";
import { zAggregate } from "../../../../utils/zod/z-aggregate";
import { zLimit } from "../../../../utils/zod/z-limit";
import { zOrder } from "../../../../utils/zod/z-order";
import { zSelect } from "../../../../utils/zod/z-select";
import { zWhere } from "../../../../utils/zod/z-where";
import { TCrudList } from "../crud.type";

export function listFactory(connection: Knex, table: TTable): TCrudList {
  const response = async ({
    where = [],
    order = [],
    limit = 50,
    select = [],
    group = [],
    sum = {},
    min = {},
    max = {},
  }: TListArgs): Promise<TGenericObject[]> => {
    zWhere(where, table.fields);
    zOrder(order, table.fields);
    zLimit(limit);
    zSelect(select as string[], table.fields);
    zSelect(group as string[], table.fields);
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
