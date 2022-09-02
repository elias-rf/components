import { Pks, SchemaField } from "@er/types";

export function pksFromSchema<Rec>(schemaFields: SchemaField[]) {
  const pks: Pks<Rec> = [];
  for (const field of schemaFields) {
    if (field.primaryKey) {
      pks.push(field.name as keyof Rec);
    }
  }
  return pks;
}
