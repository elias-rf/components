import { getName } from "../map-fields/get-name.mjs";
import { getFields } from "../schema/get-fields.mjs";
import { getTable } from "../schema/get-table.mjs";

/**
 * Validates the given 'where' array against the provided schema and returns an object with the valid 'where' array.
 *
 * @param {Array<[string, any?, any?]>} where - The array of conditions to be validated.
 * @return {{ where?: Array<[string, any?, any?]> }} - An object containing the valid 'where' array.
 * @throws {Error} - If the 'where' array is not in the correct format or contains invalid fields.
 */
export function validWhere(where, schema, mapFields) {
  const nameList = getFields(schema);
  const fieldsInvalidos = [];
  let fieldsLivres = nameList;
  if (!Array.isArray(where))
    throw new Error("where deve ser [string, any?, any?][]");

  for (const flt of where) {
    const [field] = flt;
    // const value = value2 || value1
    // const equality = value1
    if (typeof field !== "string" || flt.length < 2 || flt.length > 3)
      throw new Error("where deve ser [string, any?, any?][]");
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
      } para where em ${getTable(schema)} use: ${fieldsLivres.map((f) =>
        getName(f, mapFields || {})
      )}`
    );
  }
  return { where };
}
