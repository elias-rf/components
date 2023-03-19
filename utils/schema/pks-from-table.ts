import { TTableDef } from "../../types";
import { pksFromFieldsServer } from "./pks-from-fields";

export function pksFromTable(table: TTableDef) {
  return pksFromFieldsServer(table.fields);
}
