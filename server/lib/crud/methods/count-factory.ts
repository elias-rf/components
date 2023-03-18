import { Knex } from "knex";
import type { TGenericObject, TSelect, TWhere } from "../../../../types";
import type { TTable } from "../../../../types/model";
import { knexWhere } from "../../../../utils/data/knex-where";
import { renameNameToField } from "../../../../utils/schema/rename-fields";
import { isWhere } from "../../../../utils/validate/is-where";
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
