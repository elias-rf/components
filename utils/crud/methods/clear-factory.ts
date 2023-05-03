import type { TGenericObject, TTableDef } from "@/types";
import { recordClear } from "../../schema/record-clear";
import { TCrudClear } from "../crud.type";

export function clearFactory(table: TTableDef): TCrudClear {
  const response = async (): Promise<TGenericObject> => {
    return recordClear(table.fields);
  };
  response.help = `Retorna um registro com os valores default`;
  return response;
}
