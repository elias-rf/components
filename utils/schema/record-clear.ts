import { TField } from "../../types";
/**
 * Cria um registro limpo a partir do schema
 *
 * @param {TField} field
 * @return {*}
 */
function fieldClear(field: TField) {
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

export function recordClear(fields: TField[]) {
  const rsp: { [field: string]: any } = {};
  for (const field of fields) {
    rsp[field.name] = fieldClear(field);
  }
  return rsp;
}
