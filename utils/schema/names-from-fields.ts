import { TField } from "../../types/model";

/** busca names em uma tabela */
export function namesFromFields(fields: TField[]) {
  return fields.map((fld) => fld.name);
}
