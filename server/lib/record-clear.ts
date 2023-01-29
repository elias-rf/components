import { TFieldServer } from "../../types";

function fieldClear(field: TFieldServer) {
  if (field.defaultValue) return field.defaultValue;
  if (field.allowNull !== false) return null;
  if (
    field.type === "string" ||
    field.type === "date" ||
    field.type === "datetime"
  )
    return "";
  if (field.type === "int" || field.type === "float") return 0;
  throw new Error(
    "condição imprevista para valor default " + JSON.stringify(field)
  );
}

export function recordClear(fields: TFieldServer[]) {
  const rsp: { [field: string]: any } = {};
  for (const field of fields) {
    rsp[field.name] = fieldClear(field);
  }
  return rsp;
}
