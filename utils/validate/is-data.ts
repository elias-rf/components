import { TTable } from "../../types";
import { isArray } from "../identify/is-array";
import { isObject } from "../identify/is-object";
import { namesFromTable } from "../schema/names-from-table";

export function isData<Rec>(data: Rec, entity: TTable): string | null {
  if (!isArray(data) && !isObject(data))
    return "Select deve ser um array ou objeto";
  const nameList = namesFromTable(entity);

  for (const fld in data) {
    if (!nameList.includes(fld)) {
      return `${fld} não é um campo válido para [data][${entity.table}]: ${nameList}`;
    }
  }
  return null;
}
