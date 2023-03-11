import { TDb } from "../../types/index";
import { isValid, z } from "./z";

export function zTable(table: string, entitySchema: TDb) {
  const resp = isTable(table, entitySchema);
  if (resp === "") return;
  throw new Error(resp);
}

export function isTable(table: string, entitySchema: TDb) {
  if (!isValid(table, z.string().min(1)))
    return "Um nome de tabela deve ser informado";

  if (!Object.keys(entitySchema).includes(table)) {
    return `${table} não é uma entidade cadastrada no schema. Talvez seja: ${Object.keys(
      entitySchema
    )}`;
  }
  return "";
}
