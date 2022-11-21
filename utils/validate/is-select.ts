import { TSelect, TTable } from "../../types";
import { isNonEmptyArray } from "../identify/is-non-empty-array";
import { isString } from "../identify/is-string";
import { namesFromTable } from "../schema/names-from-table";

export function isSelect(select: TSelect, entity: TTable): string | null {
  if (!isNonEmptyArray(select)) return "Select deve ser um array de campos";
  const nameList = namesFromTable(entity);
  for (const fld of select) {
    if (!isString(fld)) return "Select deve ser um array de campos";
    if (!nameList.includes(fld)) {
      return `${fld.toString()} não é um campo válido para [select][${
        entity.table
      }]: ${nameList}`;
    }
  }
  return null;
}
