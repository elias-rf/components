import { TFieldClient, TFieldServer, TPks } from "../../types";

/** busca fields primaryKey em um schema */
export function pksFromFieldsServer(fields: TFieldServer[] = []) {
  const pks: TPks = [];
  for (const field of fields) {
    if (field.primaryKey) {
      pks.push(field.field);
    }
  }
  return pks;
}

/** busca names primaryKey em um schema */
export function pksFromFieldsClient(fields: TFieldClient[] = []) {
  const pks: TPks = [];
  for (const field of fields) {
    if (field.primaryKey) {
      pks.push(field.name);
    }
  }
  return pks;
}
