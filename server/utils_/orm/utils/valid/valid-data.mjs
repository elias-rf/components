import { getName } from "../map-fields/get-name.mjs";
import { getFields } from "../schema/get-fields.mjs";
import { getTable } from "../schema/get-table.mjs";

export function validData(data, schema, mapFields) {
  const nameList = getFields(schema);
  const fieldsInvalidos = [];
  let fieldsLivres = nameList;

  if (typeof data !== "object" || Array.isArray(data))
    throw new Error("data deve ser Record<string, any>");

  for (const field in data) {
    if (!nameList.includes(field)) {
      fieldsInvalidos.push(field);
    }
    fieldsLivres = fieldsLivres.filter((f) => f !== field);
  }

  if (fieldsInvalidos.length > 0) {
    throw new Error(
      `[${fieldsInvalidos.map((f) => getName(f, mapFields || {}))}] não ${
        fieldsInvalidos.length === 1
          ? "é um campo válido"
          : "são campos válidos"
      } para data em ${getTable(schema)} use: ${fieldsLivres.map((f) =>
        getName(f, mapFields || {})
      )}`
    );
  }
  return data;
}
