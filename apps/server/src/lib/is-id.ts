import { Pks } from "@er/types/*";
import { isNonEmptyObject } from "@er/utils/src/is-non-empty-object";

export function isId(id: any, pks: Pks): string | null {
  if (!isNonEmptyObject(id)) return "Id deve ser informado";

  for (const pk of Object.keys(id)) {
    if (!pks.includes(pk as any)) {
      return `[${pk}] não é uma das chaves permitidas [${pks.toString()}]`;
    }
  }
  return null;
}
