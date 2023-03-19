import { Knex } from "knex";
import type { TAggregate, TGenericObject, TListArgs } from "../../../../types";
import type { TTableDef } from "../../../../types/model";
import { knexOrder } from "../../../../utils/data/knex-order";
import { knexWhere } from "../../../../utils/data/knex-where";
import { namesFromTable } from "../../../../utils/schema/names-from-table";
import {
  renameFieldToName,
  renameNameToField,
} from "../../../../utils/schema/rename-fields";
import { isLimit } from "../../../../utils/validate/is-limit";
import { isSelect } from "../../../../utils/validate/is-select";
import { isWhere } from "../../../../utils/validate/is-where";
import { zAggregate } from "../../../../utils/zod/z-aggregate";
import { isOrder } from "../../../../utils/zod/z-order";
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
