import { Pks, TEntity } from "@er/types";

export function pksFromEntity(entity: TEntity) {
  const pks: Pks = [];
  for (const field of entity.fields) {
    if (field.primaryKey) {
      pks.push(field.name);
    }
  }
  return pks;
}
