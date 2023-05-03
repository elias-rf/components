import { TFieldDef } from "@/types";
/**
 * Cria um registro limpo a partir do schema
 *
 * @param {TFieldDef} field
 * @return {*}
 */
function fieldClear(field: TFieldDef) {
  if (field.defaultValue) return field.defaultValue;
  if (field.allowNull !== false) return null;
  if (
    field.typeField === "string" ||
    field.typeField === "date" ||
    field.typeField === "datetime"
  )
    return "";
  if (field.typeField === "int" || field.typeField === "float") return 0;
  throw new Error(
    "condição imprevista para valor default " + JSON.stringify(field)
  );
}

export function recordClear<TReturn>(fields: TFieldDef[]): Required<TReturn> {
  const rsp: { [field: string]: any } = {};
  for (const field of fields) {
    rsp[field.name] = fieldClear(field);
  }
  return rsp as Required<TReturn>;
}
