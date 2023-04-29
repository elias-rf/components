import { TTableDef } from "@mono/types/model";

/** busca names em uma tabela */
export function namesFromTable(table: TTableDef) {
  return table.fields.map((fld) => fld.name);
}
