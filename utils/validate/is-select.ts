import { TFieldDef, TSelect } from "@/types";
import { namesFromFields } from "../schema/names-from-fields";

export function isSelect(select: TSelect, fields: TFieldDef[]) {
  if (!Array.isArray(select))
    throw new Error("select deve ser um array de campos");
  // if (!isNonEmptyArray(select))
  //   throw new Error("select deve ser um array de campos");

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
    throw new Error(
      `${fieldsInvalidos} não ${
        fieldsInvalidos.length === 1 ? "é select válido" : "são select válidos"
      } use: ${fieldsLivres}`
    );
  }
  return select;
}
