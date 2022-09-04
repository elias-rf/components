import { Where } from "@er/types/*";
import { isArray } from "@er/utils/src/is-array";
import { isNull } from "@er/utils/src/is-null";
import { isObject } from "@er/utils/src/is-object";
import { isString } from "@er/utils/src/is-string";
import { isUndefined } from "@er/utils/src/is-undefined";

export function isWhere(where: Where[], nameList: string[]): string | null {
  if (isNull(where) || isUndefined(where)) return "Where deve ser informado";
  if (!isArray(where) && (isObject(where) || isString(where)))
    return "Where deve ser um array";
  for (const item of where) {
    if (!isArray(item)) return "Where deve ser um array de tuplas";
    if (item.length !== 3)
      return "Where deve possuir tuplas com [field, asc|desc]";
    if (!nameList.includes(item[0]))
      return `${item[0].toString()} não é um campo válido`;
  }
  return null;
}
