import { TTable } from "../../types";
import { pksFromFields } from "./pks-from-fields";

export function pksFromTable(table: TTable) {
  return pksFromFields(table.fields);
}
