import { Order } from "@er/types/*";
import { isArray } from "@er/utils/src/is-array";
import { isNull } from "@er/utils/src/is-null";
import { isObject } from "@er/utils/src/is-object";
import { isString } from "@er/utils/src/is-string";
import { isUndefined } from "@er/utils/src/is-undefined";

export function isOrder<Rec>(
  order: Order<Rec>[],
  nameList: (keyof Rec)[]
): string | null {
  if (isNull(order) || isUndefined(order)) return "Order deve ser informado";
  if (!isArray(order) && (isObject(order) || isString(order)))
    return "Order deve ser um array";
  for (const item of order) {
    if (!isArray(item)) return "Order deve ser um array de tuplas";
    if (item.length !== 2)
      return "Order deve possuir tuplas com [field, asc|desc]";
    if (item[1] !== "asc" && item[1] !== "desc")
      return "Order dever ser asc ou desc";
    if (!nameList.includes(item[0] as any)) {
      return `${item[0].toString()} não é um campo válido`;
    }
  }
  return null;
}
