import { TField, TSelect } from "../../types/index";
import { namesFromFields } from "../schema/names-from-fields";
import { isValid, z } from "./z";

export function zSelect(select: TSelect, fields: TField[]) {
  const resp = isSelect(select, fields);
  if (resp === "") return;
  throw new Error(resp);
}

export function isSelect(select: TSelect, fields: TField[]) {
  if (!isValid(select, z.array(z.string())))
    return "select deve ser um array de campos";

  const nameList = namesFromFields(fields);
  const fieldsInvalidos = [];
  let fieldsLivres = nameList.sort();

  for (const fld of select) {
    if (!nameList.includes(fld)) {
      fieldsInvalidos.push(fld);
    }
    fieldsLivres = fieldsLivres.filter((f) => f !== fld);
  }
  if (fieldsInvalidos.length > 0) {
    return `${fieldsInvalidos} não ${
      fieldsInvalidos.length === 1 ? "é select válido" : "são select válidos"
    } use: ${fieldsLivres}`;
  }
  return "";
}
