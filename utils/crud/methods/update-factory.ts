import type { TGenericObject, TSelect, TTableDef, TUpdateArgs } from "@/types";
import { knexId } from "@/utils/api/knex-id";
import { knexSelect } from "@/utils/api/knex-select";
import { assertData } from "@/utils/asserts/assert-data";
import { assertId } from "@/utils/asserts/assert-id";
import { Knex } from "knex";
import { assertSelect } from "../../asserts/assert-select";
import {
  renameFieldToName,
  renameNameToField,
} from "../../schema/rename-fields";

export function updateFactory(connection: Knex, schema: TTableDef) {
  const response = async ({
    id,
    data,
    select = ["*"],
  }: TUpdateArgs): Promise<TGenericObject> => {
    assertId(id, schema.fields);
    assertData(data, schema.fields);
    assertSelect(select as TSelect, schema.fields);

    let qry = connection(schema.table);
    if (select) qry = qry.select(knexSelect(select, schema.fields));

    qry = qry
      .update(renameNameToField(data, schema.fields))
      .where(knexId(id, schema.fields))
      .returning(knexSelect(select, schema.fields));
    const resp = await qry;
    return renameFieldToName(resp[0], schema.fields);
  };
  return response;
}
