import { TEntity } from "../../types";

export function namesFromEntity(entity: TEntity) {
  return entity.schema.map((fld) => fld.name);
}
