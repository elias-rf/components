import { Knex } from "knex";
import { TGenericObject, TSelect, TWhere } from "../../../../types";
import type { TTable } from "../../../../types/model";
import { knexWhere } from "../../../../utils/data/knex-where";
import { namesFromTable } from "../../../../utils/schema/names-from-table";
import {
  renameFieldToName,
  renameNameToField,
} from "../../../../utils/schema/rename-fields";
import { isSelect } from "../../../../utils/validate/is-select";
import { isWhere } from "../../../../utils/validate/is-where";
import { TCrudIncrement } from "../crud.type";

export function incrementFactory(db: Knex, schema: TTable): TCrudIncrement {
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