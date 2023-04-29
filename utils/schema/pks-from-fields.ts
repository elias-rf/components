import { TFieldDef, TPks } from "@mono/types";

/** busca fields primaryKey em um schema */
export function pksFromFieldsServer(fields: TFieldDef[] = []) {
  const pks: TPks = [];
  for (const field of fields) {
    if (field.primaryKey) {
      pks.push(field.field || "");
    }
  }
  return pks;
}

/** busca names primaryKey em um schema */
export function pksFromFieldsClient(fields: TFieldDef[] = []) {
  const pks: TPks = [];
  for (const field of fields) {
    if (field.primaryKey) {
      pks.push(field.name);
    }
  }
  return pks;
}
