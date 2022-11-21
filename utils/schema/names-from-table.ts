import { TTable } from "../../types";

/** busca fields em uma tabela */
export function namesFromTable(table: TTable) {
  return table.fields.map((fld) => fld.name);
}
