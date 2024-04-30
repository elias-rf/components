import { isEmpty } from "../../../../../utils/identify/is-empty.mjs";
import { getName } from "../map-fields/get-name.mjs";
import { getFields } from "../schema/get-fields.mjs";
import { getTable } from "../schema/get-table.mjs";

export function validReturning(returning, schema, mapFields) {
  const nameList = getFields(schema);
  const fieldsInvalidos = [];
  let fieldsLivres = nameList;

  if (isEmpty(returning)) return {};
  if (!Array.isArray(returning))
    throw new Error("returning deve ser Array<string>");
  if (returning.length === 1 && returning[0] === "*")
    return { returning: ["*"] };

  for (const field of returning) {
    if (typeof field !== "string")
      throw new Error("returning deve ser Array<string>");

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
      } para returning em ${getTable(schema)} use: ${fieldsLivres.map((f) =>
        getName(f, mapFields || {})
      )}`
    );
  }
  return { returning: returning };
}
