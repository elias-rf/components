import { TFieldDef } from "@/types/model";

/** busca names em uma tabela */
export function namesFromFields(fields: TFieldDef[]) {
  return fields.map((fld) => fld.name);
}
