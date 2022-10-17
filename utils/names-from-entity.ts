import { TEntity } from "../types";

export function namesFromEntity(entity: TEntity) {
  return entity.fields.map((fld) => fld.name);
}
