import { Pks, Schema } from "../../types";

export function pksFromSchema(schema: Schema = []) {
  const pks: Pks = [];
  for (const field of schema) {
    if (field.primaryKey) {
      pks.push(field.name);
    }
  }
  return pks;
}
