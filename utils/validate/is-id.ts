import { TEntity } from "../../types";
import { difference } from "../array/difference";
import { isNonEmptyObject } from "../identify/is-non-empty-object";
import { pksFromEntity } from "../schema/pks-from-entity";

export function isId(
  id: { [field: string]: any },
  entity: TEntity
): string | null {
  if (!isNonEmptyObject(id)) return "Id deve ser informado";
  const pkList = pksFromEntity(entity);
  const fault = difference(pkList, Object.keys(id));

  if (fault.length > 0) {
    return `[${fault.toString()}] não foi informado para [id][${
      entity.table
    }]: ${pkList.toString()}`;
  }
  for (const pk of Object.keys(id)) {
    if (!pkList.includes(pk as any)) {
      return `${pk} não é uma das chaves válidas para [id][${
        entity.table
      }]: ${pkList.toString()}`;
    }
  }
  return null;
}
