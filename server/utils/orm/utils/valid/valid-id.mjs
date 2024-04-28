import { getName } from "../map-fields/get-name.mjs";
import { getFields } from "../schema/get-fields.mjs";
import { getPrimary } from "../schema/get-primary.mjs";
import { getTable } from "../schema/get-table.mjs";

export function validId(id, schema, mapFields) {
  const idColumns = getPrimary(schema);
  const fieldColumns = getFields(schema);
  const fieldsInvalidos = [];
  let fieldsLivres = [...idColumns].sort();

  // schema sem primary
  if (idColumns.length === 0)
    throw new Error(`${schema.table} não possui primary keys`);
  // id formato incorreto
  if (!Array.isArray(id))
    throw new Error("where deve ser Array<[string, any]>");

  for (const fields of id) {
    // field deve ser array
    if (!Array.isArray(fields))
      throw new Error("where deve ser Array<[string, any]>");

    // field deve ser [string, any]
    const [field] = fields;
    if (typeof field !== "string" || fields.length !== 2)
      throw new Error("where deve ser Array<[string, any]>");

    // field não é id
    if (!idColumns.includes(field) && !fieldColumns.includes(field)) {
      fieldsInvalidos.push(field);
    }
    fieldsLivres = fieldsLivres.filter((fld) => fld !== field);
  }

  if (fieldsInvalidos.length > 0) {
    throw new Error(
      `[${fieldsInvalidos}] não ${
        fieldsInvalidos.length === 1 ? "é id válido" : "são ids válidos"
      }${
        fieldsLivres.length > 0 ? ` em ${getTable(schema)} use: ` : ""
      }${fieldsLivres.map((f) => getName(f, mapFields || {}))}`
    );
  }

  if (fieldsLivres.length > 0) {
    throw new Error(
      `[${fieldsLivres.map((f) => getName(f, mapFields || {}))}] não ${
        fieldsLivres.length === 1 ? "foi usado" : "foram usados"
      } em ${getTable(schema)} use: ${fieldsLivres.map((f) =>
        getName(f, mapFields || {})
      )}`
    );
  }
  return { where: id };
}
