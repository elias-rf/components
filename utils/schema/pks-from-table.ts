import { TTable } from "../../types";
import { pksFromFieldsServer } from "./pks-from-fields";

export function pksFromTable(table: TTable) {
  return pksFromFieldsServer(table.fields);
}
