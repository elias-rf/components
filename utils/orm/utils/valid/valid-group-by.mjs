import { isEmpty } from "../../../../../utils/identify/is-empty.mjs";
import { getName } from "../map-fields/get-name.mjs";
import { getFields } from "../schema/get-fields.mjs";
import { getTable } from "../schema/get-table.mjs";

export function validGroupBy(groupBy, schema, mapFields) {
  const nameList = getFields(schema);
  const fieldsInvalidos = [];
  let fieldsLivres = nameList;

  if (isEmpty(groupBy)) return {};
  if (!Array.isArray(groupBy)) throw new Error("select deve ser Array<string>");
  if (groupBy.length === 1 && groupBy[0] === "*") return { select: ["*"] };

  for (const field of groupBy) {
    if (typeof field !== "string")
      throw new Error("select deve ser Array<string>");

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
      } para select em ${getTable(schema)} use: ${fieldsLivres.map((f) =>
        getName(f, mapFields || {})
      )}`
    );
  }
  return { groupBy };
}
