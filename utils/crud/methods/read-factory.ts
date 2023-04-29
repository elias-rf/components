import type { TGenericObject, TReadArgs, TTableDef } from "@mono/types";
import { Knex } from "knex";
import { namesFromTable } from "../../schema/names-from-table";
import {
  renameFieldToName,
  renameNameToField,
} from "../../schema/rename-fields";
import { isSelect } from "../../validate/is-select";
import { zIdClient } from "../../zod/z-id-client";
import { TCrudRead } from "../crud.type";

export function readFactory(connection: Knex, table: TTableDef): TCrudRead {
  const response = async ({
    id,
    select = [],
  }: TReadArgs): Promise<TGenericObject> => {
    zIdClient(id, table.fields);
    isSelect(select as string[], table.fields);

    const tbl = table.table;
    if (select.length === 0) {
      select = namesFromTable(table);
    }

    let qry = connection(tbl).where(renameNameToField(id, table.fields));
    if (select) qry = qry.select(renameNameToField(select, table.fields));

    const data = await qry;
    const [rec] = renameFieldToName(data, table.fields);
    return rec || ({} as TGenericObject);
  };

  response.help = "Retorna um registro indicado por sua chave primária";
  return response;
}
