import { TFieldServer, TOrder } from "../../types/index";
import { isArray } from "../identify/is-array";
import { isObject } from "../identify/is-object";
import { isString } from "../identify/is-string";
import { namesFromFields } from "../schema/names-from-fields";
import { isValid, z } from "./z";

const FORMAT_ERROR = "order deve ser informado no formato [[field, asc|desc]]";

export function zOrder(order: TOrder[], fields: TFieldServer[]) {
  const resp = isOrder(order, fields);
  if (resp === "") return;
  throw new Error(resp);
}

export function isOrder(order: TOrder[], fields: TFieldServer[]) {
  if (
    !isValid(
      order,
      z.array(
        z.tuple([z.string(), z.union([z.literal("asc"), z.literal("desc")])])
      )
    )
  )
    return FORMAT_ERROR;

  if (!isArray(order) && (isObject(order) || isString(order)))
    return FORMAT_ERROR;

  const nameList = namesFromFields(fields);
  const fieldsInvalidos = [];
  let fieldsLivres = nameList.sort();

  for (const item of order) {
    if (!isArray(item)) return FORMAT_ERROR;
    if (item.length !== 2) return FORMAT_ERROR;
    if (item[1] !== "asc" && item[1] !== "desc") return FORMAT_ERROR;
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

  return "";
}
