import { TPks } from "../../types";

/** busca nomes dos pks em uma lista de fields */
export function pksFromFields(fields: TField[] = []) {
  const pks: TPks = [];
  for (const field of fields) {
    if (field.primaryKey) {
      pks.push(field.name);
    }
  }
  return pks;
}
