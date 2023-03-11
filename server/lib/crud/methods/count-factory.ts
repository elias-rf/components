import { Knex } from "knex";
import type {
  TGenericObject,
  TSelect,
  TTable,
  TWhere,
} from "../../../../types";
import { knexWhere } from "../../../../utils/data/knex-where";
import { renameNameToField } from "../../../../utils/schema/rename-fields";
import { zWhere } from "../../../../utils/zod/z-where";
import { TCrudCount } from "../crud.type";

export function countFactory(connection: Knex, table: TTable): TCrudCount {
  const response = async ({
    where = [],
    count = { ttl: "*" },
    select,
  }: {
    where?: TWhere[];
    count?: TGenericObject;
    select?: TSelect;
  }) => {
    zWhere(where, table.fields);

    let qry = connection(table.table)
      .where(knexWhere(renameNameToField(where, table.fields)))
      .count(count);
    if (select) qry = qry.select(renameNameToField(select, table.fields));
    const data = await qry;
    return data;
  };
  response.help = `Conta o total de registros filtrados`;
  return response;
}
