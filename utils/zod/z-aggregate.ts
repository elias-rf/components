import { TAggregate, TField } from "../../types/index";
import { namesFromFields } from "../schema/names-from-fields";

export function zAggregate(aggregate: TAggregate, fields: TField[]) {
  const resp = isAggregate(aggregate, fields);
  if (resp === "") return;
  throw new Error(resp);
}

export function isAggregate(aggregate: TAggregate, fields: TField[]) {
  if (
    typeof aggregate !== "object" ||
    Array.isArray(aggregate) ||
    aggregate === null
  )
    return "aggregate deve ser um objeto {alias:field}";

  const nameList = namesFromFields(fields);
  const fieldsInvalidos = [];
  let fieldsLivres = nameList.sort();

  for (const alias in aggregate) {
    if (!nameList.includes(aggregate[alias])) {
      fieldsInvalidos.push(aggregate[alias]);
    }
    fieldsLivres = fieldsLivres.filter((f) => f !== aggregate[alias]);
  }
  if (fieldsInvalidos.length > 0) {
    return `${fieldsInvalidos} não ${
      fieldsInvalidos.length === 1 ? "é select válido" : "são select válidos"
    } use: ${fieldsLivres}`;
  }
  return "";
}
