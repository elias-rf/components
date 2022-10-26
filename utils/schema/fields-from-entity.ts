import { TEntity } from "../../types";

export function fieldsFromEntity(entity: TEntity) {
  return entity.schema.map((fld) => fld.field);
}
