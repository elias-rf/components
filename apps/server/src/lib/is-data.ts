import { isArray } from "@er/utils/src/is-array";
import { isObject } from "@er/utils/src/is-object";

export function isData<Rec>(data: Rec, nameList: (keyof Rec)[]): string | null {
  if (!isArray(data) && !isObject(data))
    return "Select deve ser um array ou objeto";
  for (const fld in data) {
    if (!nameList.includes(fld)) {
      return `${fld} não é um campo válido`;
    }
  }
  return null;
}
