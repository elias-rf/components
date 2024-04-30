import { isEmpty } from "../../../../../utils/identify/is-empty.mjs";
import { getName } from "../map-fields/get-name.mjs";
import { getFields } from "../schema/get-fields.mjs";
import { getTable } from "../schema/get-table.mjs";

function fieldName(field) {
  return field.split(" ")[0];
}

export function validFirst(first, schema, mapFields) {
  const nameList = getFields(schema);
  const fieldsInvalidos = [];
  let fieldsLivres = nameList;

  if (isEmpty(first)) return { first: ["*"] };
  if (!Array.isArray(first)) throw new Error("select deve ser Array<string>");
  if (first.length === 1 && first[0] === "*") return { first: ["*"] };

  for (const fld of first) {
    const field = fieldName(fld);
    if (typeof field !== "string")
      throw new Error("select deve ser Array<string>");

    if (!nameList.includes(field)) {
      fieldsInvalidos.push(field);
    }
    fieldsLivres = fieldsLivres.filter((f) => f !== field);
  }
  if (fieldsInvalidos.length > 0) {
    throw new Error(
      `[${fieldsInvalidos}] não ${
        fieldsInvalidos.length === 1
          ? "é um campo válido"
          : "são campos válidos"
      } para select em ${getTable(schema)} use: ${fieldsLivres.map((f) =>
        getName(f, mapFields || {})
      )}`
    );
  }
  return { first };
}
