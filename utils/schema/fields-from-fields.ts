import { TFieldServer } from "../../types";

/** busca fields em uma tabela */
export function fieldsFromFields(fields: TFieldServer[]) {
  return fields.map((fld) => fld.field);
}
