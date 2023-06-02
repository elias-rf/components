import type { TGenericObject, TReadArgs, TTableDef } from "@/types";
import { knexId } from "@/utils/api/knex-id";
import { assertId } from "@/utils/asserts/assert-id";
import { Knex } from "knex";
import { assertSelect } from "../../asserts/assert-select";
import { namesFromTable } from "../../schema/names-from-table";
import {
  renameFieldToName,
  renameNameToField,
} from "../../schema/rename-fields";

export function crudReadFactory(connection: Knex, table: TTableDef) {
  const response = async ({
    id,
    select = [],
  }: TReadArgs): Promise<TGenericObject> => {
    assertId(id, table.fields);
    assertSelect(select as string[], table.fields);

    const tbl = table.table;
    if (select.length === 0) {
      select = namesFromTable(table);
    }

    let qry = connection(tbl).where(knexId(id, table.fields));
    if (select) qry = qry.select(renameNameToField(select, table.fields));

    const data = await qry;
    const [rec] = renameFieldToName(data, table.fields);
    return rec || ({} as TGenericObject);
  };

  return response;
}
