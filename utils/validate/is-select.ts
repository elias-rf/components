import { TFieldServer, TSelect } from "../../types";
import { isNonEmptyArray } from "../identify/is-non-empty-array";
import { namesFromFields } from "../schema/names-from-fields";

export function isSelect(
  select: TSelect,
  fields: TFieldServer[]
): string | null {
  if (!isNonEmptyArray(select)) return "select deve ser um array de campos";

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
  return null;
}
