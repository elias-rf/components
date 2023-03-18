import { TField, TOrder } from "../../types";
import { isArray } from "../identify/is-array";
import { isNull } from "../identify/is-null";
import { isObject } from "../identify/is-object";
import { isString } from "../identify/is-string";
import { isUndefined } from "../identify/is-undefined";
import { namesFromFields } from "../schema/names-from-fields";

const ERR_MESSAGE = "order deve ser informado no formato [[field, asc|desc]]";

export function isOrder(order: TOrder[], fields: TField[]) {
  if (isNull(order) || isUndefined(order)) throw new Error(ERR_MESSAGE);
  if (!isArray(order) && (isObject(order) || isString(order)))
    throw new Error(ERR_MESSAGE);

  const nameList = namesFromFields(fields);
  const fieldsInvalidos = [];
  let fieldsLivres = nameList.sort();

  for (const item of order) {
    if (!isArray(item)) throw new Error(ERR_MESSAGE);
    if (item.length !== 2) throw new Error(ERR_MESSAGE);
    if (item[1] !== "asc" && item[1] !== "desc") throw new Error(ERR_MESSAGE);
    if (!nameList.includes(item[0] as any)) {
      fieldsInvalidos.push(item[0]);
    }
    fieldsLivres = fieldsLivres.filter((f) => f !== item[0]);
  }
  if (fieldsInvalidos.length > 0) {
    throw new Error(
      `${fieldsInvalidos} não ${
        fieldsInvalidos.length == 1 ? "é válido" : "são válidos"
      } para order use: ${fieldsLivres}`
    );
  }

  return order;
}
