import { TDb } from "../../types/model";
import { isEmpty } from "../identify/is_empty";

export function isTable(table: string, entitySchema: TDb) {
  if (typeof table !== "string")
    throw new Error("Um nome de tabela deve ser informado");
  if (isEmpty(table)) throw new Error("Um nome de tabela deve ser informado");
  if (!Object.keys(entitySchema).includes(table)) {
    throw new Error(
      `${table} não é uma entidade cadastrada no schema. Talvez seja: ${Object.keys(
        entitySchema
      )}`
    );
  }
  return table;
}
