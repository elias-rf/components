import { TOrder, TTable } from "../../types";
import { isArray } from "../identify/is-array";
import { isNull } from "../identify/is-null";
import { isObject } from "../identify/is-object";
import { isString } from "../identify/is-string";
import { isUndefined } from "../identify/is-undefined";
import { namesFromTable } from "../schema/names-from-table";

export function isOrder(order: TOrder[], table: TTable): string | null {
  if (isNull(order) || isUndefined(order)) return "Order deve ser informado";
  if (!isArray(order) && (isObject(order) || isString(order)))
    return "Order deve ser um array";
  const nameList = namesFromTable(table);

  for (const item of order) {
    if (!isArray(item)) return "Order deve ser um array de tuplas";
    if (item.length !== 2)
      return "Order deve possuir tuplas com [field, asc|desc]";
    if (item[1] !== "asc" && item[1] !== "desc")
      return "Order dever ser asc ou desc";
    if (!nameList.includes(item[0] as any)) {
      return `${item[0].toString()} não é um campo válido para [order][${
        table.table
      }]: ${nameList}`;
    }
  }
  return null;
}
