import { TField, TOrder } from "../../types";
import { isArray } from "../identify/is-array";
import { isNull } from "../identify/is-null";
import { isObject } from "../identify/is-object";
import { isString } from "../identify/is-string";
import { isUndefined } from "../identify/is-undefined";
import { namesFromFields } from "../schema/names-from-fields";

export function isOrder(order: TOrder[], fields: TField[]): string | null {
  if (isNull(order) || isUndefined(order))
    return "order deve ser informado no formato [[field, asc|desc]]";
  if (!isArray(order) && (isObject(order) || isString(order)))
    return "order deve ser informado no formato [[field, asc|desc]]";

  const nameList = namesFromFields(fields);
  const fieldsInvalidos = [];
  let fieldsLivres = nameList.sort();

  for (const item of order) {
    if (!isArray(item))
      return "order deve ser informado no formato [[field, asc|desc]]";
    if (item.length !== 2)
      return "order deve ser informado no formato [[field, asc|desc]]";
    if (item[1] !== "asc" && item[1] !== "desc")
      return "order deve ser informado no formato [[field, asc|desc]]";
    if (!nameList.includes(item[0] as any)) {
      fieldsInvalidos.push(item[0]);
    }
    fieldsLivres = fieldsLivres.filter((f) => f !== item[0]);
  }
  if (fieldsInvalidos.length > 0) {
    return `${fieldsInvalidos} não ${
      fieldsInvalidos.length == 1 ? "é válido" : "são válidos"
    } para order use: ${fieldsLivres}`;
  }

  return null;
}

// export function isOrder(order: TOrder[], table: TTable): string | null {
//   if (isNull(order) || isUndefined(order)) return "Order deve ser informado";
//   if (!isArray(order) && (isObject(order) || isString(order)))
//     return "Order deve ser um array";
//   const nameList = namesFromTable(table);

//   for (const item of order) {
//     if (!isArray(item)) return "Order deve ser um array de tuplas";
//     if (item.length !== 2)
//       return "Order deve possuir tuplas com [field, asc|desc]";
//     if (item[1] !== "asc" && item[1] !== "desc")
//       return "Order dever ser asc ou desc";
//     if (!nameList.includes(item[0] as any)) {
//       return `${item[0].toString()} não é um campo válido para [order][${
//         table.table
//       }]: ${nameList}`;
//     }
//   }
//   return null;
// }
