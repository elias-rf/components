import { Select, TEntity } from "../types";
import { isNonEmptyArray } from "./is-non-empty-array";
import { isString } from "./is-string";
import { namesFromEntity } from "./names-from-entity";

export function isSelect(select: Select, entity: TEntity): string | null {
  if (!isNonEmptyArray(select)) return "Select deve ser um array de campos";
  const nameList = namesFromEntity(entity);
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
