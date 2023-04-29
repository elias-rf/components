import { TTableDef } from "@mono/types";

/** busca fields em uma tabela */
export function fieldsFromTable(table: TTableDef) {
  return table.fields.map((fld) => fld.field);
}
