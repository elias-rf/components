import { TFieldDef, TFilters } from "@/types";
import { isArray } from "../identify/is-array";
import { isNull } from "../identify/is-null";
import { isObject } from "../identify/is-object";
import { isString } from "../identify/is-string";
import { isUndefined } from "../identify/is-undefined";
import { namesFromFields } from "../schema/names-from-fields";

const FORMAT_INVALID = "where deve ser no formato {id:string, value:string}";

export function isWhere(where: TFilters, fields: TFieldDef[]) {
  if (isNull(where) || isUndefined(where)) throw new Error(FORMAT_INVALID);
  if (!isArray(where) && (isObject(where) || isString(where)))
    return FORMAT_INVALID;

  const nameList = namesFromFields(fields);
  const fieldsInvalidos = [];
  let fieldsLivres = nameList.sort();

  for (const item of where) {
    if (!isArray(item)) throw new Error(FORMAT_INVALID);
    if (item.length !== 3) throw new Error(FORMAT_INVALID);
    if (!nameList.includes(item[0])) fieldsInvalidos.push(item[0]);
    fieldsLivres = fieldsLivres.filter((f) => f !== item[0]);
  }
  if (fieldsInvalidos.length > 0) {
    throw new Error(
      `${fieldsInvalidos} não ${
        fieldsInvalidos.length === 1
          ? "é um campo válido"
          : "são campos válidos"
      } para where use: ${fieldsLivres}`
    );
  }
  return where;
}
