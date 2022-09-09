import { TEntity } from "@er/types/*";
import { isArray } from "./is-array";
import { isObject } from "./is-object";
import { namesFromEntity } from "./names-from-entity";

export function isData<Rec>(data: Rec, entity: TEntity): string | null {
  if (!isArray(data) && !isObject(data))
    return "Select deve ser um array ou objeto";
  const nameList = namesFromEntity(entity);

  for (const fld in data) {
    if (!nameList.includes(fld)) {
      return `${fld} não é um campo válido para [data][${entity.table}]: ${nameList}`;
    }
  }
  return null;
}
