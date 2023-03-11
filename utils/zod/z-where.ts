import { isValid, z } from "./z";

import { TFieldServer, TWhere } from "../../types/index";
import { isArray } from "../identify/is-array";
import { namesFromFields } from "../schema/names-from-fields";

const FORMAT_INVALID = "where deve ser no formato [field, igualdade, valor]";

export function zWhere(where: TWhere[], fields: TFieldServer[]) {
  const resp = isWhere(where, fields);
  if (resp === "") return;
  throw new Error(resp);
}

function isWhere(where: TWhere[], fields: TFieldServer[]) {
  // where pode ser []
  if (Array.isArray(where) && where.length === 0) return "";
  if (
    !isValid(
      where,
      z
        .array(
          z.tuple([z.string(), z.string(), z.union([z.string(), z.number()])])
        )
        .nonempty()
    )
  )
    return FORMAT_INVALID;

  const nameList = namesFromFields(fields);
  const fieldsInvalidos = [];
  let fieldsLivres = nameList.sort();

  for (const item of where) {
    if (!isArray(item)) return FORMAT_INVALID;
    if (item.length !== 3) return FORMAT_INVALID;
    if (!nameList.includes(item[0])) fieldsInvalidos.push(item[0]);
    fieldsLivres = fieldsLivres.filter((f) => f !== item[0]);
  }
  if (fieldsInvalidos.length > 0) {
    return `${fieldsInvalidos} não ${
      fieldsInvalidos.length === 1 ? "é um campo válido" : "são campos válidos"
    } para where use: ${fieldsLivres}`;
  }
  return "";
}
