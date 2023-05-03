import type { TGenericObject, TSelect, TTableDef, TWhere } from "@/types";
import { Knex } from "knex";
import { knexWhere } from "../../data/knex-where";
import { renameNameToField } from "../../schema/rename-fields";
import { isWhere } from "../../validate/is-where";
import { TCrudCount } from "../crud.type";

export function countFactory(connection: Knex, table: TTableDef): TCrudCount {
  const response = async ({
    where = [],
    count = { ttl: "*" },
    select,
  }: {
    where?: TWhere[];
    count?: TGenericObject;
    select?: TSelect;
  }) => {
    isWhere(where, table.fields);

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
