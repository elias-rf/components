import { TTable } from "../../types";

/** busca fields em uma tabela */
export function fieldsFromTable(table: TTable) {
  return table.fields.map((fld) => fld.field);
}
