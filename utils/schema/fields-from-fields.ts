import { TField } from "../../types/model";

/** busca fields em uma tabela */
export function fieldsFromFields(fields: TField[]) {
  return fields.map((fld) => fld.field || "");
}
