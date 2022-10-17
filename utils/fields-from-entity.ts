import { TEntity } from "../types";

export function fieldsFromEntity(entity: TEntity) {
  return entity.fields.map((fld) => fld.field);
}
