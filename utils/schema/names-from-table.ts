import { TTable } from "../../types/model";

/** busca names em uma tabela */
export function namesFromTable(table: TTable) {
  return table.fields.map((fld) => fld.name);
}
