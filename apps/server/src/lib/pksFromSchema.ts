import { Pks, SchemaField } from "@er/types";

export function pksFromSchema(schemaFields: SchemaField[]) {
  const pks: Pks = [];
  for (const field of schemaFields) {
    if (field.primaryKey) {
      pks.push(field.name);
    }
  }
  return pks;
}
