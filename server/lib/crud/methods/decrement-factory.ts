import { Knex } from "knex";
import { TGenericObject, TSelect, TTable, TWhere } from "../../../../types";
import { knexWhere } from "../../../../utils/data/knex-where";
import { namesFromTable } from "../../../../utils/schema/names-from-table";
import {
  renameFieldToName,
  renameNameToField,
} from "../../../../utils/schema/rename-fields";
import { zSelect } from "../../../../utils/zod/z-select";
import { zWhere } from "../../../../utils/zod/z-where";
import { TCrudDecrement } from "../crud.type";

export function decrementFactory(db: Knex, table: TTable): TCrudDecrement {
  const response = async ({
    where = [],
    decrement = {},
    select = [],
  }: {
    where?: TWhere[];
    decrement?: TGenericObject;
    select?: TSelect;
  }): Promise<TGenericObject[]> => {
    zWhere(where, table.fields);
    zSelect(select as string[], table.fields);
    const tbl = table.table;
    const entity = table;
    if (select.length > 0) {
      select = namesFromTable(entity);
    }

    const data: TGenericObject[] = await db(tbl)
      .where(knexWhere(renameNameToField(where, entity.fields)))
      .decrement(renameNameToField(decrement, entity.fields))
      .returning(select as string[]);
    return renameFieldToName(data, table.fields);
  };

  response.help = "Decrementa um campo para registros filtrados";
  return response;
}
