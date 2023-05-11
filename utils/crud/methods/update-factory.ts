import type { TGenericObject, TSelect, TTableDef, TUpdateArgs } from "@/types";
import { assertData } from "@/utils/asserts/assert-data";
import { assertIds } from "@/utils/asserts/assert-ids";
import { Knex } from "knex";
import { assertSelect } from "../../asserts/assert-select";
import {
  renameFieldToName,
  renameNameToField,
} from "../../schema/rename-fields";
import { knexSelect } from "@/utils/api/knex-select";
import { knexId } from "@/utils/api/knex-id";

export function updateFactory(connection: Knex, schema: TTableDef) {
  const response = async ({
    ids,
    data,
    select = ["*"],
  }: TUpdateArgs): Promise<TGenericObject> => {
    assertIds(ids, schema.fields);
    assertData(data, schema.fields);
    assertSelect(select as TSelect, schema.fields);


     let qry = connection(schema.table)
    if (select) qry = qry.select(knexSelect(select, schema.fields));


      qry = qry
        .update(renameNameToField(data, schema.fields))
        .where(knexId(ids, schema.fields))
        .returning(knexSelect(select, schema.fields) );
        const resp = await qry;
    return renameFieldToName(resp[0], schema.fields);
  };
  return response;
}
