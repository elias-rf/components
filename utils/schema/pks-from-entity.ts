import { TEntity } from "../../types";
import { pksFromSchema } from "./pks-from-schema";

export function pksFromEntity(entity: TEntity) {
  return pksFromSchema(entity.schema);
}
