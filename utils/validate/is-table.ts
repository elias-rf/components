import { TTableDef } from "@/types/model";
import { isEmpty } from "../identify/is-empty";

export function isTable(
  table: string,
  entitySchema: {
    [table: string]: TTableDef;
  }
) {
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
