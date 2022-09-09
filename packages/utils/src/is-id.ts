import { TEntity } from "@er/types/*";
import { isNonEmptyObject } from "@er/utils/src/is-non-empty-object";
import { pksFromEntity } from "./pks-from-entity";

export function isId(id: any, entity: TEntity): string | null {
  if (!isNonEmptyObject(id)) return "Id deve ser informado";
  const pkList = pksFromEntity(entity);

  for (const pk of Object.keys(id)) {
    if (!pkList.includes(pk as any)) {
      return `${pk} não é uma das chaves válidas para [id][${
        entity.table
      }]: ${pkList.toString()}`;
    }
  }
  return null;
}
