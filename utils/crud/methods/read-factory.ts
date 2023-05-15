import type { TGenericObject, TReadArgs, TTableDef } from "@/types";
import { knexId } from "@/utils/api/knex-id";
import { assertIds } from "@/utils/asserts/assert-ids";
import { Knex } from "knex";
import { assertSelect } from "../../asserts/assert-select";
import { namesFromTable } from "../../schema/names-from-table";
import {
  renameFieldToName,
  renameNameToField,
} from "../../schema/rename-fields";

export function crudReadFactory(connection: Knex, table: TTableDef) {
  const response = async ({
    ids,
    select = [],
  }: TReadArgs): Promise<TGenericObject> => {
    assertIds(ids, table.fields);
    assertSelect(select as string[], table.fields);

    const tbl = table.table;
    if (select.length === 0) {
      select = namesFromTable(table);
    }

    let qry = connection(tbl).where(knexId(ids, table.fields));
    if (select) qry = qry.select(renameNameToField(select, table.fields));

    const data = await qry;
    const [rec] = renameFieldToName(data, table.fields);
    return rec || ({} as TGenericObject);
  };

  return response;
}
