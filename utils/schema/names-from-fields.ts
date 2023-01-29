import { TFieldServer } from "../../types";

/** busca names em uma tabela */
export function namesFromFields(fields: TFieldServer[]) {
  return fields.map((fld) => fld.name);
}
