import { isNonEmptyArray } from "@er/utils/src/is-non-empty-array";

export function isSelect<Rec>(
  select: (keyof Rec)[],
  nameList: (keyof Rec)[]
): string | null {
  if (!isNonEmptyArray(select)) return "Select deve ser um array de campos";
  for (const fld of select) {
    if (!nameList.includes(fld)) {
      return `${fld.toString()} não é um campo válido`;
    }
  }
  return null;
}
