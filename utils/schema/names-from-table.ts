import { TTableDef } from "../../types/model";

/** busca names em uma tabela */
export function namesFromTable(table: TTableDef) {
  return table.fields.map((fld) => fld.name);
}
