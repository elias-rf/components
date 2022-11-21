import { TDb } from "../../types";
import { isEmpty } from "../identify/is_empty";

export function isTable(table: string, entitySchema: TDb): string | null {
  if (isEmpty(table)) return "Um nome de tabela deve ser informado";
  if (!Object.keys(entitySchema).includes(table)) {
    return `${table} não é uma entidade cadastrada no schema. Talvez seja: ${Object.keys(
      entitySchema
    )}`;
  }
  return null;
}
