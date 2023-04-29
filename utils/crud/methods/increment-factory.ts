import type { TGenericObject, TSelect, TTableDef, TWhere } from "@mono/types";
import { Knex } from "knex";
import { knexWhere } from "../../data/knex-where";
import { namesFromTable } from "../../schema/names-from-table";
import {
  renameFieldToName,
  renameNameToField,
} from "../../schema/rename-fields";
import { isSelect } from "../../validate/is-select";
import { isWhere } from "../../validate/is-where";
import { TCrudIncrement } from "../crud.type";

export function incrementFactory(db: Knex, schema: TTableDef): TCrudIncrement {
  const response = async ({
    where = [],
    increment = {},
    select = [],
  }: {
    where?: TWhere[];
    increment?: TGenericObject;
    select?: TSelect;
  }): Promise<TGenericObject[]> => {
    isWhere(where, schema.fields);
    isSelect(select as string[], schema.fields);
    const tbl = schema.table;
    const entity = schema;
    if (select.length > 0) {
      select = namesFromTable(entity);
    }

    const data: TGenericObject[] = await db(tbl)
      .where(knexWhere(renameNameToField(where, entity.fields)))
      .increment(renameNameToField(increment, entity.fields))
      .returning(select as string[]);
    return renameFieldToName(data, schema.fields);
  };

  response.help = "Incrementa um campo para registros filtrados";
  return response;
}
