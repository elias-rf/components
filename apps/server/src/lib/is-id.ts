import { Pks } from "@er/types/*";
import { isNonEmptyObject } from "@er/utils/src/is-non-empty-object";

export function isId<Rec>(id: any, pks: Pks<Rec>): string | null {
  if (!isNonEmptyObject(id)) return "Id deve ser informado";

  for (const pk of Object.keys(id)) {
    if (!pks.includes(pk as any)) {
      console.log(`🚀 ~ file: is-id.ts ~ line 5 ~ pks`, pks);
      return `[${pk}] não é uma das chaves permitidas [${pks.toString()}]`;
    }
  }
  return null;
}
