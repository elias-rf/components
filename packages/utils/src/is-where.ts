import { TEntity, Where } from "@er/types/*";
import { isArray } from "./is-array";
import { isNull } from "./is-null";
import { isObject } from "./is-object";
import { isString } from "./is-string";
import { isUndefined } from "./is-undefined";
import { namesFromEntity } from "./names-from-entity";

export function isWhere(where: Where[], entity: TEntity): string | null {
  if (isNull(where) || isUndefined(where)) return "Where deve ser informado";
  if (!isArray(where) && (isObject(where) || isString(where)))
    return "Where deve ser um array";
  const nameList = namesFromEntity(entity);
  for (const item of where) {
    if (!isArray(item)) return "Where deve ser um array de tuplas";
    if (item.length !== 3)
      return "Where deve possuir tuplas com [field, igualdade, valor]";
    if (!nameList.includes(item[0]))
      return `${item[0].toString()} não é um campo válido para [where][${
        entity.table
      }]: ${nameList}`;
  }
  return null;
}
