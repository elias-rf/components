import { TFieldDef } from "@/types/model";

/** busca fields em uma tabela */
export function fieldsFromFields(fields: TFieldDef[]) {
  return fields.map((fld) => fld.field || "");
}
