import {
  isArray,
  isNull,
  isObject,
  isString,
  isUndefined,
} from "@er/utils/src/type-guard";

export function validatePk(pk: any) {
  if (isNull(pk) || isUndefined(pk)) return "Pk deve ser informado";
  if (!isObject(pk) || isArray(pk)) return "Pk deve ser um objeto";

  if (Object.keys(pk).length === 0) {
    return "Pk não informado";
  }
  return null;
}

export function validateOrder(order: any) {
  if (isNull(order) || isUndefined(order)) return "Order deve ser informado";
  if (!isArray(order) && (isObject(order) || isString(order)))
    return "Order deve ser um array";
  for (const item of order) {
    if (!isArray(item)) return "Order deve ser um array de tuplas";
    if (item.length !== 2)
      return "Order deve possuir tuplas com [field, asc|desc]";
    if (item[1] !== "asc" && item[1] !== "desc")
      return "Order dever ser asc ou desc";
  }
  return null;
}

export function validateWhere(where: any) {
  if (isNull(where) || isUndefined(where)) return "Where deve ser informado";
  if (!isArray(where) && (isObject(where) || isString(where)))
    return "Where deve ser um array";
  for (const item of where) {
    if (!isArray(item)) return "Where deve ser um array de tuplas";
    if (item.length !== 3)
      return "Where deve possuir tuplas com [field, asc|desc]";
  }
  return null;
}
