import { TEntitySchema } from "../types";
import { isEmpty } from "./is-empty";

export function isTable(
  table: string,
  entitySchema: TEntitySchema
): string | null {
  if (isEmpty(table)) return "Um nome de tabela deve ser informado";
  if (!Object.keys(entitySchema).includes(table)) {
    return `${table} não é uma entidade cadastrada no schema. Talvez seja: ${Object.keys(
      entitySchema
    )}`;
  }
  return null;
}
