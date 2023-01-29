import { TFieldServer, TWhere } from "../../types";
import { isArray } from "../identify/is-array";
import { isNull } from "../identify/is-null";
import { isObject } from "../identify/is-object";
import { isString } from "../identify/is-string";
import { isUndefined } from "../identify/is-undefined";
import { namesFromFields } from "../schema/names-from-fields";

export function isWhere(
  where: TWhere[],
  fields: TFieldServer[]
): string | null {
  if (isNull(where) || isUndefined(where))
    return "where deve ser no formato [field, igualdade, valor]";
  if (!isArray(where) && (isObject(where) || isString(where)))
    return "where deve ser no formato [field, igualdade, valor]";

  const nameList = namesFromFields(fields);
  const fieldsInvalidos = [];
  let fieldsLivres = nameList.sort();

  for (const item of where) {
    if (!isArray(item))
      return "where deve ser no formato [field, igualdade, valor]";
    if (item.length !== 3)
      return "where deve ser no formato [field, igualdade, valor]";
    if (!nameList.includes(item[0])) fieldsInvalidos.push(item[0]);
    fieldsLivres = fieldsLivres.filter((f) => f !== item[0]);
  }
  if (fieldsInvalidos.length > 0) {
    return `${fieldsInvalidos} não ${
      fieldsInvalidos.length === 1 ? "é um campo válido" : "são campos válidos"
    } para where use: ${fieldsLivres}`;
  }
  return null;
}
