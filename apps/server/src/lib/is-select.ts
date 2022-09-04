import { isNonEmptyArray } from "@er/utils/src/is-non-empty-array";

export function isSelect<Rec>(
  select: (keyof Rec)[],
  nameList: (keyof Rec)[]
): string | null {
  if (!isNonEmptyArray(select)) return "Select deve ser um array de campos";
  for (const fld of select) {
    if (!nameList.includes(fld)) {
      console.log(`🚀 ~ file: is-select.ts ~ line 10 ~ nameList`, nameList);
      return `${fld.toString()} não é um campo válido: ${nameList}`;
    }
  }
  return null;
}
